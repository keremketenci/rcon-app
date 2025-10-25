// translation
import { useTranslation } from "react-i18next";

// navigation
import { Link } from "react-router-dom";

// components ui
import { Button } from "@/components/shadcn/ui/button";

// components
import { ThemeModeToggle } from "@/components/shadcn/Theme/theme-mode-toggle";

export default function Settings() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("Settings.title")}</h1>

      <Link to="/">
        <Button variant="ghost">{t("Navigation.Go.Home")}</Button>
      </Link>

      <div className="flex flex-col p-4 gap-4">
        <ThemeModeToggle />
        <div className="space-x-2">
          <Button onClick={() => i18n.changeLanguage("en")}>English</Button>
          <Button onClick={() => i18n.changeLanguage("tr")}>Türkçe</Button>
        </div>
      </div>
    </div>
  );
}
