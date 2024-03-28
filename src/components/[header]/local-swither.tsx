'use client'

import { ChangeEvent } from "react";

export default function LocalSwither() {
  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <label>
      <select onChange={changeSelect}>
        <option value="en">EN</option>
        <option value="ua">UA</option>
        <option value="ru">RU</option>
      </select>
    </label>
  );
}
