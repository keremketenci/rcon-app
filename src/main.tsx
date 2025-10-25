// react
import React from "react";
import ReactDOM from "react-dom/client";

// app
import App from "./App";

// theme
import { ThemeProvider } from "@/components/shadcn/Theme/theme-provider";

// translation
import "@/lib/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
