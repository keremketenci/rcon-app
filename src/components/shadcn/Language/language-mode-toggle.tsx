import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { useLanguage } from "@/components/shadcn/Language/language-provider";

export function LanguageModeToggle() {
  const { setLanguage, language } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>EN</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("tr")}>TR</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
