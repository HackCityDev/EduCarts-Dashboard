import { SevisHeader } from ".";
import ViewStatus from "../../../assets/ViewStatus";
import { RxCopy } from "react-icons/rx";
import { BsCloudDownload } from "react-icons/bs";
import Button from "../../../components/General/Button";
import Headers from "../../../components/General/Headers";
import Input from "../../../components/General/Input";
import Span from "../../../components/General/Span";
import { gloablButtonStyle } from "../../../components/PaymentsPage/variables";
import useMQ from "../../../hooks/useMQ";
import styles from "../../../styles/payments.module.css";
import { useState } from "react";
import Paragraphs from "../../../components/General/Paragraphs";

export default function StatusPage() {
  let isMobile = useMQ("(max-width: 700px)");
  const [state, setState] = useState(false);
  return (
    <main className={styles.SevisPage}>
      <SevisHeader
        span="I-901 Service Fee Payment"
        headers="View Payment Status"
        spanLink="/payments/sevis/i_901"
        icon={<ViewStatus />}
      />
      <div className={styles.StatusPage}>
        {state ? (
          <Status isMobile={isMobile} />
        ) : (
          <EnterId isMobile={isMobile} setState={setState} />
        )}
      </div>
    </main>
  );
}
function EnterId({ isMobile, setState }) {
  let [value, setValue] = useState(null);
  let func = (target) => {
    setValue(target.value);
    console.log(value);
  };
  return (
    <div className={styles.IdBox}>
      <Headers content="Enter Your Payment ID" />
      <div className={styles.InputBox}>
        <Input placeholder="Enter ID" func={func} />
        <Button
          content="View Status"
          style={isMobile ? gloablButtonStyle : {}}
          action={() => setState(true)}
        />
      </div>
    </div>
  );
}

function Status({ isMobile }) {
  let Details = [
    { header: "#", content: 1 },
    { header: "Form Category", content: "D 2019 J-1" },
    { header: "Sevis ID", content: "N0000000" },
    { header: "Date Of Payment", content: "02-03-23" },
    { header: "Time Of Payment", content: "02:48 PM" },
    { header: "Status", content: "Pending" },
    { header: "Download", content: <BsCloudDownload /> },
  ];
  return (
    <div className={styles.IdBox}>
      <Headers
        content={
          <>
            <i>Payment ID - EDU2349856</i>
            <Span
              content={
                <>
                  Copy <RxCopy />{" "}
                </>
              }
            />
          </>
        }
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      />
      <div>
        <div className={styles.table}>
          {Details.map(({ header, content }, i) => (
            <div className={styles.elem} key={i}>
              <Paragraphs content={header} />
              <Span content={content} />
            </div>
          ))}
        </div>
        <Button
          content="View Status"
          style={{ ...gloablButtonStyle, margin: "2rem auto" }}
        />
      </div>
    </div>
  );
}
