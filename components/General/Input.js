import { useEffect, useRef, useState } from "react";
import styles from "./General.module.css";

export default function Input({
  type,
  labelStyle,
  inputStyle,
  func,
  label,
  placeholder,
  name,
  value,
  before,
  labelAfter,
}) {
  const beforeRef = useRef(null);
  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const [leftOffset, setLeftOffset] = useState(80);

  useEffect(() => {
    if (beforeRef.current) {
      let width = beforeRef.current.clientWidth;
      let padding = 20 + width + "px";
      inputRef.current.style.paddingLeft = padding;
    }
    if (labelRef.current) {
      let _width = labelRef.current.clientWidth;
      setLeftOffset(_width);
    }
  }, []);

  return (
    <label
      htmlFor={label}
      className={styles.Input}
      style={{ ...labelStyle, "--left-offset": `${leftOffset}px` }}
      data-after={labelAfter}
    >
      <i ref={labelRef}>{label}</i>
      <input
        placeholder={placeholder}
        onChange={(e) => func(e.target)}
        type={type ? type : "text"}
        style={type == "file" ? { ...inputStyle, display: "none" } : inputStyle}
        id={label}
        name={name}
        value={value}
        ref={inputRef}
      />
      {type == "file" && <span className={styles.file}>{placeholder}</span>}
      {before && (
        <span className={styles.before} ref={beforeRef}>
          {before}
        </span>
      )}
    </label>
  );
}
