# 🎥 Quickcast - Screen Recording & Video Sharing Platform

**Quickcast** is a full-stack screen recording and video sharing web application built with cutting-edge technologies including **Next.js**, **Bunny.net**, **Xata**, and **Tailwind CSS**. It allows users to record their screens, upload and manage videos, generate AI-based transcripts, and securely share videos with powerful privacy and search features.

🌐 **Live App**: [quickcast-liart.vercel.app](https://quickcast-liart.vercel.app/)

---

## 🚀 Features

- 🔐 **Authentication**  
  Secure user login and registration using [Better Auth](https://betterauth.dev) and Google OAuth.

- 📺 **Screen Recording**  
  Record your screen directly within the browser—no extensions or installations required.

- 📤 **Video Uploading**  
  Upload videos seamlessly with support for both **public** and **private** visibility options.

- 🧠 **AI-Generated Transcripts**  
  Automatically generate searchable and accessible transcripts for uploaded videos.

- 🔒 **Privacy Controls**  
  Toggle video visibility between **public** and **private** modes.

- 🧰 **Security Integration with Arcjet**  
  Advanced bot protection, email validation, rate limiting, and form security powered by [Arcjet](https://arcjet.com).

- 📊 **Video Metadata**  
  View unique video IDs, URLs, and access detailed metadata for easy referencing.

- 🔎 **Search Functionality**  
  Intuitive search bar to locate your videos quickly and efficiently.

- 🔗 **Sharable Links**  
  Generate unique links to share videos securely with others.

- 💅 **Responsive Modern UI**  
  Clean and elegant UI/UX built with [Tailwind CSS](https://tailwindcss.com).

- 🗃️ **Database Integration**  
  Scalable real-time storage and management powered by [Xata](https://xata.io).

- ✅ **Type-Safe ORM**  
  Use [Drizzle ORM](https://orm.drizzle.team) for secure and type-safe SQL queries.

- 🌐 **Cross-Device Compatibility**  
  Fully responsive design ensures a seamless experience across all devices.

---

## 🧰 Tech Stack

| Category              | Technology        |
|-----------------------|-------------------|
| **Frontend**          | Next.js, TypeScript, Tailwind CSS |
| **Backend**           | Next.js API Routes |
| **Authentication**    | Better Auth, Google OAuth |
| **Database**          | Xata |
| **ORM**               | Drizzle ORM |
| **Video Delivery**    | Bunny.net |
| **Security**          | Arcjet |
| **Deployment**        | Vercel |

---
## 📁 Project Structure

````
/snapcast
│
├── /app # Next.js App Router
├── /components # Reusable UI components
├── /lib # Utility functions
├── /styles # Tailwind and global styles
├── /drizzle # Drizzle ORM config and schema
├── /public # Static assets
├── /types # TypeScript type definitions
└── .env # Environment variables
````

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/MYSELFABHISHEK/Quickcast.git
cd Quickcast
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# [Xata] Configuration used by the CLI and the SDK
# Make sure your framework/tooling loads this file on startup to have it available for the SDK
XATA_API_KEY=
DATABASE_URL_POSTGRES=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# BetterAuth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# Bunny
BUNNY_STORAGE_ACCESS_KEY=
BUNNY_LIBRARY_ID=
BUNNY_STREAM_ACCESS_KEY=

#ArcJet
ARCJET_API_KEY=
XATA_API_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on: [Better-Auth](https://www.better-auth.com), [Google Cloud](https://console.cloud.google.com), [Bunny.net](https://bunny.net), [Xata.io](https://xata.io), [Arcjet](https://arcjet.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.




## 🛡️ Security

### Quickcast is integrated with Arcjet to ensure:

- Bot protection
- Rate limiting
- Email validation
- Attack protection on forms and login routes

## 📹 Powered By
- Bunny.net: For fast and secure video delivery.
- Better Auth: For scalable and flexible authentication.
- Xata: For real-time database storage and search.
- Drizzle ORM: For type-safe SQL operations.
- Arcjet: For developer-first security integration.
