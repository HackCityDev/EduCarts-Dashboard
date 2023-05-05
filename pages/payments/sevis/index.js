import Headers from "../../../components/General/Headers";
import Span from "../../../components/General/Span";
import styles from "../../../styles/styles.module.css";
import SevisSVG from "../../../assets/SVGs/sevis.svg";
import SearchSVG from "../../../assets/SVGs/search.svg";
import BookSVG from "../../../assets/SVGs/book.svg";
import HeaderElement from "../../../components/Components/HeaderElement";
import OptionsElement from "../../../components/Components/OptionsElement";

export default function SevisPage() {
  return (
    <main className={styles.SevisPage}>
      <HeaderElement
        header="SEVIS FEE"
        paragraph="We carry out Sevis fee payments to help you focus on other Important school runs"
      />
      <OptionsElement Options={Options} headers="Sevis Payment Options" />
    </main>
  );
}

export function SevisHeader({ headers, span, spanLink, icon }) {
  return (
    <aside className={styles.Head}>
      <div className={styles.contentLeft}>
        {icon}
        <Headers content={headers} />
      </div>
      <div className={styles.contentRight}>
        <Span content={span} link={spanLink} />
        <Span content="Learn About SEVIS" link="/payments/sevis/learn_more" />
      </div>
    </aside>
  );
}
let Options = [
  {
    icon: SevisSVG,
    button: "Pay I-901 Fee",
    header: " I-901 Fee Payments",
    content:
      "Click here if you have or have not Completed the Form I-20 or DS-2019 and want to pay the Sevis Fee",
    link: "/payments/sevis/i_901",
  },
  {
    icon: SearchSVG,
    button: "View Status",
    header: "View Payment Status",
    content:
      "If you have already made a payment on Educarts previously, Click view to track your payments Status",
    link: "/payments/sevis/status",
  },
  {
    icon: BookSVG,
    button: "Learn More",
    header: "Learn About SEVIS Fees",
    content: "Obtain More Clarity on SEVIS-1901 Payments and Procedure",
    link: "/payments/sevis/learn_more",
  },
];
