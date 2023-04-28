import Link from "next/link";
import styles from "./General.module.css";

export default function Span({ content, style, link }) {
  return (
    <span style={style} className={styles.Span}>
      {link ? (
        <Link href={link}>
          <a>{content}</a>
        </Link>
      ) : (
        content
      )}
    </span>
  );
}
