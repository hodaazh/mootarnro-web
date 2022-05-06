import React, { useState } from "react";
import cn from "classnames";

import s from "./ToggleSwitch.module.css";

const ToggleSwitch = ({ className, labelClassName, label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <div className="flex-row" onClick={handleChange}>
      <label className={cn("flex-center", s.switch, className)}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => console.log(e)}
          disabled
        />
        <div className={s.slider}></div>
      </label>
      <span className={cn("SBodyR", labelClassName)}>{label}</span>
    </div>
  );
};

export { ToggleSwitch };
