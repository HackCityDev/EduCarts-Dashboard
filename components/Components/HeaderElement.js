import HighlightHeader from "../General/HighlightHeader";
import Paragraphs from "../General/Paragraphs";
import styles from "./components.module.css";

export default function HeaderElement({ header, paragraph, bgImage }) {
  return (
    <section className={styles.Header}>
      <HighlightHeader content={header} />
      <Paragraphs content={paragraph} />
    </section>
  );
}
