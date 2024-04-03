// 'use client'

// import { useLocale } from "next-intl";
// import { useRouter } from "next/navigation";
// import { ChangeEvent, useTransition } from "react";

// export default function LocalSwither() {
// const [isPending, startTransition] = useTransition();
// const router = useRouter();
// const localActive = useLocale()

//   const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
//     startTransition(()=>{
//       router.replace(`/${e.target.value}`)
//     })
//   };

//   return (
//     <label>
//       <select defaultValue={localActive} onChange={changeSelect} disabled={isPending}>
//         <option value="en">EN</option>
//         <option value="ua">UA</option>
//         <option value="ru">RU</option>
//       </select>
//     </label>
//   );
// }
