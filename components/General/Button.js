import Link from "next/link";
import styles from "./General.module.css";
export default function Button({
  content,
  style,
  action,
  oppose,
  link,
  aStyle,
}) {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a style={aStyle}>
            <button
              style={style}
              className={`${styles.Button} ${
                oppose ? styles.OpposeButton : ""
              }`}
              type="button"
            >
              {content}
            </button>
          </a>
        </Link>
      ) : (
        <button
          style={style}
          className={`${styles.Button} ${oppose ? styles.OpposeButton : ""}`}
          type="button"
          onClick={action}
        >
          {content}
        </button>
      )}
    </>
  );
}
