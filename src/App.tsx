// styles
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
      <h1 className="text-2xl font-bold text-center">{t("app.title")}</h1>
      <div className="flex flex-col min-h-screen items-center justify-center gap-4">
        <Button>Click me</Button>
        <ThemeModeToggle />
        <div className="space-x-2">
          <Button onClick={() => i18n.changeLanguage("en")}>🇺🇸 English</Button>
          <Button onClick={() => i18n.changeLanguage("tr")}>🇹🇷 Türkçe</Button>
        </div>
      </div>
    </main>
  );
}

export default App;
