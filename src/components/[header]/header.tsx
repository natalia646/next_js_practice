import { useMessages, useTranslations } from "next-intl";
import { Link } from "../../navigation";
import LocalSwither from "./local-swither";

export default function Header() {
  const t = useTranslations("Header");
  const messages = useMessages();
  const keys = Object.keys(messages.Header);

  return (
    <header>
      <nav>
        {keys.map((val, i) => (
          <Link key={i} href={`/${val}`}>
            {t(`${val}`)}
          </Link>
        ))}
      </nav>
      <LocalSwither/>
    </header>
  );
}
