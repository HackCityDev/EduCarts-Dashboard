import HeaderElement from "../../../components/Components/HeaderElement";
import OptionsElement from "../../../components/Components/OptionsElement";
import styles from "../../../styles/styles.module.css";

export default function FAQIndex() {
  return (
    <main className={styles.SupportIndex}>
      <HeaderElement
        header="FAQ’s"
        paragraph="Some questions you have for us might have
        been answere check them out below"
      />
      {/* <OptionsElement Options={Options} headers="Customer Support Options" /> */}
    </main>
  );
}
