# 🛻 Trailer Load Planner

**A mobile-friendly utility for truck drivers to quickly calculate trailer fit based on cart types and bin counts.**

![screenshot](./screenshot.png) <!-- Replace with actual path -->

---

## 🚚 About This Project

As a working truck driver, I built this tool to solve a real problem I face on the job: estimating how many carts and bins will fit into different trailer types.

Manual calculation on the fly is time-consuming and error-prone — especially when you're dealing with multiple types of laundry carts, bins, and changing trailer specs. This app simplifies that process by letting you enter your load items and instantly get recommendations on what trailers can handle it.

Whether you're loading a pup, a 50ft trailer, or a straight truck — this planner does the math so you can focus on the road.

---

## ✨ Features

- 🧮 **Real-time Load Summary**
  - Total carts, bins, and cart-equivalent calculation.
- 🚛 **Trailer Fit Calculator**
  - Determines if your load fits in:
    - Pup trailer (max 25 CE)
    - 50ft trailer (max 38 CE)
    - Straight truck (max 20 CE)
- ⚠️ **Sideways Loading Alert**
  - Automatically flags if a sideways load is required for uneven loads.
- ♻️ **Reset Button**
  - Quickly clear the form and recalculate for a new load.
- 🌗 **Dark Mode Support**
  - Fully responsive and theme-aware for day/night shifts.

---

## 📱 Designed for Real Workflows

- Fast input form with icons and large touch targets.
- Optimized for mobile use while on the job.
- Clean layout using Tailwind CSS and DaisyUI.
- Subtle animations and UI polish using Framer Motion.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [FontAwesome](https://fontawesome.com/)
- [Lucide React](https://lucide.dev/)

---

## 📦 Installation

```bash
git clone https://github.com/RW2023/loader/trailer-load-planner.git
cd trailer-load-planner
npm install
npm run dev
```




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
