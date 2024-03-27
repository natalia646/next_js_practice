import Header from "@/components/header";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
    <Header/>
      <h1>{t("title")}</h1>
      <h2>{t("desc")}</h2>
    </>
  );
}
