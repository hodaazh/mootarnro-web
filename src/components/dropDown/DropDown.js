import React from "react";

import s from "./DropDown.module.css";
import { HOME_CONST } from "../../constants/HOME_CONST";

const DropDown = ({ setSortOption }) => {
  const { options } = HOME_CONST;

  return (
    <select
      className={s.select}
      onChange={(e) => setSortOption(e.target.value)}
      placeholder="select..."
      defaultChecked={false}
    >
      {options.map(({ id, value, label }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export { DropDown };
