import styles from "./General.module.css";

export default function HighlightHeader({ content, style }) {
  return (
    <div style={style} className={styles.HighlightHeader}>
      {content}
    </div>
  );
}
