# AI Rules for Dr. Hiba Monzer Clinic Application

This document outlines the technical stack and specific library usage guidelines for developing and maintaining the Dr. Hiba Monzer Clinic web application.

## Tech Stack Description

*   **React**: The application is built using React for a component-based UI architecture.
*   **TypeScript**: All application code is written in TypeScript, ensuring type safety and improved developer experience.
*   **Vite**: Vite is used as the build tool, providing a fast development server and optimized builds.
*   **Tailwind CSS**: Styling is handled exclusively with Tailwind CSS, utilizing its utility-first approach for responsive and consistent designs.
*   **shadcn/ui**: Pre-built, accessible UI components are sourced from the shadcn/ui library.
*   **React Router**: Client-side routing is managed by React Router to navigate between different views (though currently, components are rendered directly in `App.tsx`).
*   **Lucide React**: A collection of beautiful and customizable open-source icons is provided by Lucide React.
*   **Three.js / React Three Fiber / Drei**: For interactive 3D graphics and animations, the application leverages Three.js, integrated with React via React Three Fiber and Drei.
*   **Supabase**: The backend services, including database interactions (e.g., appointment booking), are handled by Supabase.

## Library Usage Rules

*   **UI Components**:
    *   **Styling**: Always use **Tailwind CSS** classes for all styling. Avoid inline styles or separate CSS files unless absolutely necessary for global styles (like `src/index.css`).
    *   **Pre-built Components**: Prioritize using components from **shadcn/ui** for common UI elements (e.g., buttons, forms, cards). If a specific shadcn/ui component doesn't fit the need, create a new custom component.
*   **Icons**: Use **lucide-react** for all icons throughout the application.
*   **3D Graphics**: For any 3D rendering or interactive scenes, use **Three.js** in conjunction with **@react-three/fiber** and **@react-three/drei**.
*   **Routing**: Implement client-side navigation using **React Router**. All main routes should be defined within `src/App.tsx`.
*   **State Management**: For local component state, use React's built-in hooks like `useState`, `useEffect`, and `useRef`.
*   **Backend/Database**: All interactions with the database or authentication services should be done through **Supabase**.
*   **Forms**: Use standard HTML form elements managed by React state for user input.
*   **New Components**: Always create new files for new components or hooks, keeping files small and focused (ideally under 100 lines of code).