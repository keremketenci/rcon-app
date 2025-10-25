// react
import React from "react";
import ReactDOM from "react-dom/client";

// app
import App from "./App";

// theme
import { ThemeProvider } from "@/components/shadcn/Theme/theme-provider";

// translation
import "@/lib/i18n";
import { LanguageProvider } from "@/components/shadcn/Language/language-provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider defaultLanguage="en" storageKey="app-language">
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
);
