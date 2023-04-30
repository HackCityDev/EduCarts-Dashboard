import useMQ from "../../hooks/useMQ";
import Image from "next/image";
import styles from "../styles.module.css";
import { HiChevronDown } from "react-icons/hi";
import User from "../../assets_dashboard/user.png";
import HighlightHeader from "../General/HighlightHeader";
import Headers from "../General/Headers";
import Span from "../General/Span";
import Paragraphs from "../General/Paragraphs";
import Button from "../General/Button";
import {
  BG1,
  BG2,
  ConvertIcon,
  SmileIcon,
} from "../../assets_dashboard/UserHomepage";
import {
  AddPaymentMethodIcon,
  AwardIcon,
  CalendarIcon,
  CardPOSIcon,
  HouseIcon,
  StarIcon,
  TrashIcon,
} from "../../assets_dashboard/RecommendedSection";

export default function UserPage() {
  let userName = "Adewale John";
  let isMobile = useMQ("(max-width:700px)");
  return (
    <main className={styles.UserPage}>
      <section className={styles.UserSection}>
        <aside className={styles.User}>
          <div className={styles.UserBox}>
            <div className={styles.Details}>
              <HighlightHeader
                content={`Welcome, ${userName}`}
                style={{ color: "#F4F9FA" }}
              />
              <Paragraphs
                content="Take a moment to complete your  Profile to get 100% Off your first Transaction"
                style={{ color: "#BAC6D2" }}
              />
              <Button
                content="Complete Profile"
                oppose={true}
                style={{
                  background: "#F4F9FA",
                  boxShadow: "0px 4px 20px rgba(24, 30, 36, 0.2)",
                  borderRadius: "48px",
                  color: "#0D1D2F",
                  fontWeight: "400",
                }}
              />
            </div>
            <div className={styles.UserPlaceholder}>
              <Image src={User} objectFit="cover" layout="fill" />
            </div>
            <span className={styles.BG1}>
              <BG1 />
            </span>
            <span className={styles.BG2}>
              <BG2 />
            </span>
          </div>
        </aside>
      </section>
      <section className={styles.TableSection}>
        <aside className={styles.PaymentMethod}>
          <div className={styles.Header}>
            <Paragraphs content="Payment Method" />
          </div>
          <PaymentMethod />
        </aside>
        <aside className={styles.ConvertFunds}>
          <div className={styles.Header}>
            <Paragraphs content="Convert Funds" />
          </div>
          <ConvertFunds />
        </aside>
        <aside className={styles.RecentPayments}>
          <div className={styles.Header}>
            <Paragraphs content="Recent Transactions" />
            <Span content="View all" />
          </div>
          <div className={styles.RecentPaymentsBox}>
            <Aside />
          </div>
        </aside>
        <aside className={styles.Recommended}>
          <div className={styles.Header}>
            <Paragraphs content="Recommended" />
            <Span content="See all" />
          </div>
          <RecommendedOption />
        </aside>
      </section>
    </main>
  );
}
function PaymentMethod() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.Card}>
        <AddPaymentMethodIcon />
        <Paragraphs content="Add a payment method" />
      </div>
    </div>
  );
}
function ConvertFunds() {
  return (
    <div className={styles.ConvertFundsBox}>
      <div className={styles.Currencies}>
        <div className={styles.CurrencyBox}>
          <div className={styles.CurrencyName}>
            <Span content="American Dollars" />
          </div>
          <div className={styles.CurrencySelector}>
            <div className={styles.CurrencyFlag}>
              <Image
                width="32px"
                height="28px"
                src="https://flagsapi.com/US/flat/64.png"
              />
              <HiChevronDown />
            </div>
            <Paragraphs content="$1" />
          </div>
        </div>
        <ConvertIcon />
        <div className={styles.CurrencyBox}>
          <div className={styles.CurrencyName}>
            <Span content="Nigerian Naira" />
          </div>{" "}
          <div className={styles.CurrencySelector}>
            <div className={styles.CurrencyFlag}>
              <Image
                width="32px"
                height="28px"
                src="https://flagsapi.com/NG/flat/64.png"
              />{" "}
              <HiChevronDown />
            </div>
            <Paragraphs content="#700" />
          </div>
        </div>
      </div>
      <Button content="Convert" oppose={true} />
    </div>
  );
}
function RecommendedOption() {
  return (
    <div className={styles.RecommendedOptions}>
      {RecommendedOptions.map((option, i) => (
        <div key={i} className={styles.Option}>
          <div className={styles.Info}>
            {option.icon}
            <div className={styles.OptionInfo}>
              <Headers content={option.title} />
              <Paragraphs content={option.text} />
            </div>
          </div>
          <div className={styles.Controls}>
            <span>
              <TrashIcon />
            </span>
            <span>
              <StarIcon />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Aside({ state }) {
  return (
    <div className={styles.Aside}>
      <div className={styles.document}>
        <div className={styles.doc1}>
          <div className={styles.doc2}>
            <div className={styles.doc3}>
              <SmileIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.emptyTx}>
        <Headers content="You are yet to make payments" />
        <Paragraphs content="Click on Payment to begin making payment" />
      </div>
    </div>
  );
}

let RecommendedOptions = [
  {
    icon: <HouseIcon />,
    title: "Free Appartments",
    text: "Amber Hostels is offering...",
  },
  {
    icon: <AwardIcon />,
    title: "Educarts Awards",
    text: "Read about Anita, the bes...",
  },
  {
    icon: <CardPOSIcon />,
    title: "Payment Tracking",
    text: "Educarts will now charge...",
  },
  {
    icon: <CalendarIcon />,
    title: "Payments To Oxford",
    text: "Your Payments to oxford is...",
  },
];
