# Ryan Wilson – Portfolio Website

Welcome to the source code for my personal developer portfolio, built with 💙 Next.js 15, Tailwind CSS, DaisyUI, and Framer Motion.

This portfolio showcases selected projects, skills, and personal background as a full-stack developer with a flair for clean design, smooth interactions, and purpose-driven creativity.

## ✨ Live Demo

🔗 [ryan-2025.vercel.app](https://ryan-2025.vercel.app)

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 15](https://nextjs.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Fonts**: Sora, IBM Plex Sans, Space Mono (via Google Fonts)
* **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

---

## 📁 Project Structure

```
app/
├── layout.tsx              // Global layout with ThemeProvider and Navbar/Footer
├── page.tsx                // Home route with Hero section
├── about/                  // About section and bio
├── projects/               // Projects listing and [slug] dynamic detail pages
components/
├── Hero.tsx                // Hero with animation and CTA
├── Navbar.tsx              // Responsive nav with dark mode toggle
├── AboutMe.tsx             // Skills, bio, quote
├── Projects.tsx            // Project gallery with filtering
├── ProjectCard.tsx         // Individual animated project tiles
├── ListMotion.tsx          // Reusable motion wrappers
├── Button.tsx              // Styled CTA buttons
public/
└── profile/                // Profile image assets
styles/
└── globals.css             // Theme variables, font assignments
```

---

## 🌗 Dark Mode

Implemented using `next-themes` and Tailwind’s `data-theme` support. Fully customizable via CSS variables:

```css
html[data-theme='light'] {
  --primary: hsl(191, 33%, 52%);
  ...
}

html[data-theme='dark'] {
  --primary: hsl(191, 33%, 42%);
  ...
}
```

---

## 🔍 Features

* ✅ Responsive, accessible layout
* ✅ Light/dark theme toggle
* ✅ Animated component transitions
* ✅ Project filtering by category
* ✅ Dynamic project pages with GitHub/live demo links
* ✅ Professional design using consistent color and font palette
* ✅ Modular and scalable architecture (prepared for backend integration)

---

## 🚧 Roadmap

* 🔄 Migrate project data to Firebase or Supabase
* ✍️ Add blog using MDX
* 📃 Generate PDF Press Kit for media use
* 🧠 Add AI-generated project summaries
* 🌐 Add SEO metadata to dynamic routes

---

## 📸 Preview

![Hero Section Screenshot](https://ryan-2025.vercel.app/portfolioDark.png)


---

## 📄 License

This project is licensed under the MIT License.

---

### Created with ❤️ by Ryan Wilson

*"Technology is most powerful when it reflects clarity of purpose."*

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
