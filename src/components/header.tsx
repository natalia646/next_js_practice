import { useMessages, useTranslations } from "next-intl";
import { Link } from "../navigation";

export default function Header() {
  const t = useTranslations("Header");
  const messages = useMessages();
  const keys = Object.keys(messages.Header);

  return (
    <header>
      {keys.map((val, i) => (
        <Link key={i} href={`/${val}`}>
          {t(`${val}`)}
        </Link>
      ))}
    </header>
  );
}
