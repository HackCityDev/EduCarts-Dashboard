import Headers from "../../../components/General/Headers";
import Paragraphs from "../../../components/General/Paragraphs";
import Span from "../../../components/General/Span";
import styles from "../../../styles/payments.module.css";
import SevisSVG from "../../../assets/SVGs/sevis.svg";
import SearchSVG from "../../../assets/SVGs/search.svg";
import BookSVG from "../../../assets/SVGs/book.svg";
// import { ChatSupportBox } from "../../../components/Home";
import HighlightHeader from "../../../components/General/HighlightHeader";
import Button from "../../../components/General/Button";
import ImageComponent from "../../../assets/SVGs/SVGImageComponent";

export default function SevisPage() {
  return (
    <main className={styles.SevisPage}>
      {/* <ChatSupportBox /> */}
      <HeaderElement />
      <OptionsElement />
    </main>
  );
}

export function HeaderElement() {
  return (
    <section className={styles.Header}>
      <HighlightHeader content="SEVIS FEE" />
      <Paragraphs content="We carry out Sevis fee payments to help you focus on other Important school runs" />
    </section>
  );
}

function OptionsElement() {
  return (
    <section className={styles.Options}>
      <Headers content="Sevis Payment Options" />
      <aside className={styles.Grid}>
        {Options.map(({ icon, button, header, content, link }, i) => (
          <div key={i} className={styles.Item}>
            <div
              className={styles.top}
              style={{ justifyContent: "space-between" }}
            >
              <ImageComponent src={icon} />
              <Button
                content={button}
                style={{
                  fontSize: "14px",
                  lineHeight: "0px",
                  letterSpacing: "-0.02em",
                  height: "auto",
                }}
                link={link}
              />
            </div>
            <Headers
              content={header}
              style={{ fontSize: "18px", lineHeight: "28px" }}
            />
            <Span content={content} />
          </div>
        ))}
      </aside>
    </section>
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
