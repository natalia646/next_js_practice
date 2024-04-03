'use client'

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

import { ChangeEvent, useTransition } from "react";

export default function LocalSwither() {
const [isPending, startTransition] = useTransition();
const router = useRouter();
const localActive = useLocale()

// console.log(router.asPath)

  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    startTransition(()=>{
      router.replace(`/${e.target.value}`)
    })
    

  };

  return (
    <label>
      <select defaultValue={localActive} onChange={changeSelect} disabled={isPending}> 
        <option value="en">EN</option>
        <option value="ua">UA</option>
        <option value="ru">RU</option>
      </select>
    </label>
  );
}
