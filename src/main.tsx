// app
import App from "./App";

// react
import React from "react";
import ReactDOM from "react-dom/client";

// routes
import { BrowserRouter } from "react-router-dom";

// translation
import "@/lib/i18n";
import { LanguageProvider } from "@/components/Language/language-provider";

// theme
import { ThemeProvider } from "@/components/Theme/theme-provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider defaultLanguage="en" storageKey="app-language">
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
