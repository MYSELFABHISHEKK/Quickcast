import { getAllVideos } from "@/lib/actions/video";
import  SharedHeader  from "@/components/SharedHeader";
import VideoCard from "@/components/VideoCard";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";

// If using TypeScript, define the type like this:
interface PageProps {
  searchParams?: {
    query?: string;
    filter?: string;
    page?: string;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const query = searchParams?.query || "";
  const filter = searchParams?.filter || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { videos, pagination } = await getAllVideos(query, filter, currentPage);

  return (
    <main className="wrapper page">
      <Header subHeader="Public Library" title="All Videos" />

      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              id={video.videoId}
              title={video.title}
              thumbnail={video.thumbnailUrl}
              createdAt={video.createdAt}
              userImg={user?.image ?? ""}
              username={user?.name ?? "Guest"}
              views={video.views}
              visibility={video.visibility}
              duration={video.duration}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No Videos Found"
          description="Try adjusting your search."
        />
      )}

      {/* Uncomment if Pagination is ready */}
      {/* {pagination?.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          queryString={query}
          filterString={filter}
        />
      )} */}
    </main>
  );
};

export default Page;
