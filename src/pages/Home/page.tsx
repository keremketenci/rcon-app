// translation
import { useTranslation } from "react-i18next";

// navigation
import { Link } from "react-router-dom";

// components ui
import { Button } from "@/components/shadcn/ui/button";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("Home.title")}</h1>
      
      <Link to="/settings">
        <Button variant="ghost">{t("Navigation.Go.Settings")}</Button>
      </Link>
    </div>
  );
}
