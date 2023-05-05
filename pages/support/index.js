import HeaderElement from "../../components/Components/HeaderElement";
import OptionsElement from "../../components/Components/OptionsElement";
import styles from "../../styles/styles.module.css";
import FAQ_SVG from "../../assets/SVGs/faq1.svg";
import CustomerRep_SVG from "../../assets/SVGs/customer-service.svg";
import Livechat_SVG from "../../assets/SVGs/online-chat.svg";

export default function SupportIndex() {
  return (
    <main className={styles.SupportIndex}>
      <HeaderElement
        header="SUPPORT"
        paragraph="Lets resolve you complex problems together,
        choose any option below to get started"
      />
      <OptionsElement Options={Options} headers="Customer Support Options" />
    </main>
  );
}

export let Options = [
  {
    icon: Livechat_SVG,
    button: "Start Chat",
    header: "Live Chat",
    content:
      "Find quick solutions to issues you are experiencing with the aid of out bot",
    link: "/support/livechat",
  },
  {
    icon: CustomerRep_SVG,
    button: "Start Consultation",
    header: "Consultation",
    content:
      "Talk with an Educart expert to solve your complex issues is not time",
    link: "/support/consult",
  },
  {
    icon: FAQ_SVG,
    button: "Find answers",
    header: "Frequently Asked Questions",
    content: "Our list of curated articles can help you find solutions on time",
    link: "/support/faq",
  },
];
