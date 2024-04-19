import { useTranslations } from "next-intl";
import Image from "next/image";
import photo from "/public/namephoto.png"

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{t("desc")}</h2>
      <Image src={photo} alt="photo" ></Image>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis voluptates pariatur dolorem saepe reprehenderit incidunt atque? Quaerat officia adipisci dicta blanditiis iure, voluptatum vel sit, sapiente quas ea laboriosam.</p>
    </>
  );
}
