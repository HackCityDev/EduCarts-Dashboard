import Headers from "../../components/General/Headers";
import useMQ from "../../hooks/useMQ";
import Paragraphs from "../../components/General/Paragraphs";
import Span from "../../components/General/Span";
import styles from "../../styles/payments.module.css";
// import { ChatSupportBox } from "../../components/Home";
import ImageComponent from "../../assets/SVGs/SVGImageComponent";
import SevisSVG from "../../assets/SVGs/sevis.svg";
import CertificateSVG from "../../assets/SVGs/certificate.svg";
import EmailSVG from "../../assets/SVGs/email.svg";
import RoadmapSVG from "../../assets/SVGs/roadmap.svg";
import LetterSVG from "../../assets/SVGs/letter.svg";
import PlaneSVG from "../../assets/SVGs/plane.svg";
import MoreSVG from "../../assets/SVGs/more.svg";
import Link from "next/link";

export default function Payments() {
  const isMobile = useMQ("(max-width: 700px)");
  return (
    <main className={styles.Payments}>
      {/* <ChatSupportBox /> */}
      <section
        className={styles.Main}
        style={{ paddingRight: isMobile ? "10%" : 0 }}
      >
        <Headers
          content="Select a payment you want to make"
          style={{ fontSize: "24px", lineHeight: "38px", color: "#3E3E42" }}
        />
        <aside className={styles.Grid}>
          {paymentMethods.map(({ header, content, link, svg }, i) => (
            <Link key={i} href={`/payments${link}`}>
              <a className={styles.Item}>
                <div className={styles.top}>
                  <ImageComponent src={svg} />
                  <Paragraphs content={header} />
                </div>
                <Span content={content} />
              </a>
            </Link>
          ))}
        </aside>
      </section>
      {!isMobile && (
        <section className={styles.Background}>
          <div></div>
        </section>
      )}
    </main>
  );
}

let paymentMethods = [
  {
    header: "SEVIS Fee",
    content:
      "Click here if you have or have not Completed the Form I-20 or DS-2019 and want to pay the Sevis Fee",
    link: "/sevis",
    svg: SevisSVG,
  },
  {
    header: "Credential Evaluation",
    content:
      "If you have already made a payment on Educarts previously, Click view to track your payments Status",
    link: "/certificate_eval",
    svg: CertificateSVG,
  },
  {
    header: "Application Fee",
    content:
      "Click here if you have or have not Completed the Form I-20 or DS-2019 and want to pay the Sevis Fee",
    link: "/application_fee",
    svg: EmailSVG,
  },
  {
    header: "Track Payment",
    content:
      "If you have already made a payment on Educarts previously, Click here to track your payments Status",
    link: "/track_payment",
    svg: RoadmapSVG,
  },
  {
    header: "Admission Doc. Shipment",
    content: "Obatain your admission doc for less stress",
    link: "/admission_document",
    svg: LetterSVG,
  },
  {
    header: "Visa Payments",
    content: "Pay for visa fees with our Agents",
    link: "/visa_payments",
    svg: PlaneSVG,
  },
  {
    header: "Others",
    content: "Perform other seaamless transactions on educarts",
    link: "/others",
    svg: MoreSVG,
  },
];
