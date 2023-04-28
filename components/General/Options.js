import styles from "./General.module.css";
import { MdOutlineKeyboardArrowDown, MdCheck } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
export default function Select({
  filters,
  filterState = "Select an Option",
  setFilterState,
  label,
  labelAfter,
  labelStyle,
}) {
  let menuRef = useRef();
  const [openFilters, setOpenFilters] = useState(false);
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!menuRef.current.contains(e.target)) {
          setOpenFilters(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const labelRef = useRef(null);
  const [leftOffset, setLeftOffset] = useState(80);

  useEffect(() => {
    if (labelRef.current) {
      let _width = labelRef.current.clientWidth;
      setLeftOffset(_width);
    }
  }, []);
  return (
    <div className={styles.Selector}>
      <label
        style={{ ...labelStyle, "--left-offset": `${leftOffset}px` }}
        data-after={labelAfter}
        className={styles.Input}
      >
        <i ref={labelRef}>{label}</i>
      </label>
      <aside className={styles.Filters}>
        <div
          className={styles.filterCurrent}
          onClick={() => setOpenFilters(true)}
        >
          {filterState} <MdOutlineKeyboardArrowDown />
        </div>
        <div
          className={styles.filter}
          style={{ display: openFilters ? "" : "none" }}
          ref={menuRef}
        >
          {" "}
          {openFilters
            ? filters.map((filter, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setFilterState(filters[i]);
                    setOpenFilters(false);
                  }}
                >
                  {filter} {filterState === filters[i] ? <MdCheck /> : null}
                </div>
              ))
            : null}
        </div>
      </aside>
    </div>
  );
}
