import { useEffect, useState } from "react";
import useMQ from "../../../hooks/useMQ";
import styles from "../../../styles/styles.module.css";
// import { ChatSupportBox } from "../../../components/Home";
import {
  PaymentMethod,
  SevisValidation,
  StartSevisPayment,
} from "../../../components/PaymentsPage/Sevis";
import Modal from "../../../components/Modals/TransactionModal";
import { SevisHeader } from ".";
import Sevis from "../../../assets/Sevis";
import HeaderElement from "../../../components/Components/HeaderElement";

export default function I_901() {
  const [state, setState] = useState(1);
  const [success, setSuccess] = useState(false);
  let isMobile = useMQ("(max-width: 700px)");
  useEffect(() => {
    if (state === 4) {
      let timeOut = setTimeout(() => {
        setSuccess(true);
        return clearTimeout(timeOut);
      }, 5000);
    }
  }, [state]);

  useEffect(() => {
    const scrollAnimate = setInterval(() => {
      window.scrollTo(0, window.scrollY - 10);
      if (window.scrollY == 0) clearInterval(scrollAnimate);
    }, 1);
  }, [state]);
  return (
    <main className={styles.SevisPage}>
      {/* <ChatSupportBox /> */}
      {state === 1 && (
        <HeaderElement
          header="SEVIS FEE"
          paragraph="We carry out Sevis fee payments to help you focus on other Important school runs"
        />
      )}
      {state === 1 && <StartSevisPayment setState={setState} />}
      {state === 2 ||
        (state === 3 && (
          <SevisHeader
            headers="I-901 Service Fee Payment"
            span="View Payment Status"
            spanLink="/payments/sevis/status"
            icon={<Sevis />}
          />
        ))}
      {state === 2 && (
        <SevisValidation isMobile={isMobile} setState={setState} />
      )}
      {state === 3 && <PaymentMethod isMobile={isMobile} setState={setState} />}
      {state === 4 && <Modal receipt={success} />}{" "}
    </main>
  );
}
