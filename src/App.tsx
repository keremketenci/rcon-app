import "./App.css";

// translation
import { useTranslation } from "react-i18next";

// components
import { ThemeModeToggle } from "@/components/shadcn/Theme/theme-mode-toggle";
// components ui
import { Button } from "@/components/shadcn/ui/button";

function App() {
  // translation
  const { t, i18n } = useTranslation();

  return (
    <main>
      <h1 className="text-2xl font-bold">{t("app.title")}</h1>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
        <ThemeModeToggle />
        <div>
          <button
            className="border px-3 py-1 rounded"
            onClick={() => i18n.changeLanguage("en")}
          >
            🇺🇸 English
          </button>
          <button
            className="ml-2 border px-3 py-1 rounded"
            onClick={() => i18n.changeLanguage("tr")}
          >
            🇹🇷 Türkçe
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
