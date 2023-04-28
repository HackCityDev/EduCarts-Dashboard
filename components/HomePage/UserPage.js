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
import { ConvertIcon, SmileIcon } from "../../assets_dashboard/UserHomepage";

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
          </div>
        </aside>
      </section>
      <section className={styles.TableSection}>
        <aside className={styles.ConvertFunds}>
          <Paragraphs content="Convert Funds" />
          <ConvertFunds />
        </aside>
        <aside className={styles.RecentPayments}>
          {/* <RecentPayments /> */}
        </aside>
        <aside className={styles.RecentActivity}></aside>
      </section>
    </main>
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

function RecentPayments() {
  return (
    <div className={styles.RecentPaymentsBox}>
      <Aside />
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
