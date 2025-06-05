📁 Project Structure
/app: App Router entry point (layout, pages, routes).

layout.tsx: Defines top-level layout structure.

page.tsx: Default route page component.

[route]/page.tsx: Route-specific pages.

loading.tsx, error.tsx: Optional route-level handling.

/components: Reusable, preferably typed React components.

/styles: Tailwind CSS config + global styles if any.

/lib: Utility functions (e.g., API handlers, formatters).

/hooks: Custom React hooks.

/types: TypeScript type definitions/interfaces.

/public: Static assets (e.g., favicons, images).

/tests: Unit and integration tests (Jest + RTL).

🛠️ Development Standards
Framework: Next.js 13+ (App Router).

Language: TypeScript only.

Styling: Tailwind CSS.

Routing: App Router (/app) — use layout.tsx, page.tsx, ServerComponent.tsx.

Data Fetching: Use async server components, fetch() with cache, revalidate, or client-side useSWR/react-query.

State Management: Prefer local state or custom hooks. Use Zustand or context only if necessary.

✅ Linting & Formatting
Use ESLint with next, react, typescript, and tailwindcss plugins.

Prettier enforces consistent formatting.

Use strict TypeScript (strict: true in tsconfig.json).

Avoid any unless absolutely necessary.

🧪 Testing
Framework: Jest + @testing-library/react

Use mocks for next/navigation, fetch, etc.

Coverage for components, hooks, and lib functions.

bash
Copy
Edit
npm run test
npm run test:coverage
🔄 Pull Requests
Descriptive title & summary of changes.

Reference related issues (e.g., Closes #12).

All tests must pass.

Run npm run lint && npm run build before pushing.

📌 Notes for Codex/Agents
Do not use legacy getServerSideProps or getStaticProps.

Use server components by default unless interactivity requires client components ('use client').

For navigation, use useRouter() or Link from next/navigation.

Prefer semantic HTML and accessible components.

Refer to /types/ for shared TypeScript interfaces.

