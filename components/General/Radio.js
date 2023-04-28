import { useState } from "react";
import styles from "./General.module.css";

export default function RadioGroup({ options, selectedOption, onChange }) {
  const [selected, setSelected] = useState(selectedOption);

  const handleChange = (value) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={styles.Radio}>
      {options.map((option, index) => (
        <Radio
          key={index}
          value={option.value}
          label={option.label}
          checked={option.value === selected}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

function Radio({ value, label, checked, onChange }) {
  return (
    <div className={styles.radio}>
      <input
        type="radio"
        value={value}
        checked={checked}
        id={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}
