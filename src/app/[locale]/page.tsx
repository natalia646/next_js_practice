import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{t("desc")}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis voluptates pariatur dolorem saepe reprehenderit incidunt atque? Quaerat officia adipisci dicta blanditiis iure, voluptatum vel sit, sapiente quas ea laboriosam.</p>
    </>
  );
}
