// translation
import { useTranslation } from "react-i18next";

// navigation
import { Link } from "react-router-dom";

// components ui
import { Button } from "@/components/shadcn/ui/button";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="flex flex-row w-full items-center justify-between border-b p-4">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost">{t("Navigation.Navbar.Home")}</Button>
        </Link>
        <Link to="/settings">
          <Button variant="ghost">{t("Navigation.Navbar.Settings")}</Button>
        </Link>
      </div>
      <div />
    </header>
  );
}
