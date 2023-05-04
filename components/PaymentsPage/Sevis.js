import { useEffect, useState } from "react";
import RadioGroup from "../General/Radio";
import { GrValidate, GrDocumentUpload } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { RxCopy, RxPerson } from "react-icons/rx";
import Input from "../General/Input";
import Nigeria from "../../assets/Nigeria";
import Document from "../../assets/Document";
import Cloud from "../../assets/Cloud";
import Person from "../../assets/PersonalInfo";
import Lock from "../../assets/Lock";
import InfoModal from "../../assets/InfoModal";
import Timer from "../../assets/Timer";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";
import Span from "../General/Span";
import styles from "../../styles/payments.module.css";
import Sevis from "../../assets/Sevis";
import IdeaSVG from "../../assets/SVGs/idea.svg";
import VisaSVG from "../../assets/SVGs/visa.svg";
import MasterCardSVG from "../../assets/SVGs/masterCard.svg";
import PaypalSVG from "../../assets/SVGs/paypal.svg";
import GTCO_SVG from "../../assets/SVGs/gtco.svg";
import HighlightHeader from "../General/HighlightHeader";
import Button from "../General/Button";
import Select from "../General/Options";
import {
  states,
  cities,
  countries,
  daysOfMonth,
  monthsOfYear,
  years,
  gloablButtonStyle,
} from "./variables";
import { SevisHeader } from "../../pages/payments/sevis";
import ImageComponent from "../../assets/SVGs/SVGImageComponent";
export function StartSevisPayment({ setState }) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  useEffect(() => {
    if (selectedOption === "auto") setState(2);
    if (selectedOption === "user") setState(3);
  }, [selectedOption]);
  let radioOptions = [
    { value: "auto", label: "Carry out all the SEVIS Fee Payment for me" },
    { value: "user", label: "I have generated SEVIS Payment Coupon " },
  ];
  return (
    <section className={styles.StartSevisPayment}>
      <SevisHeader
        headers="I-901 Service Fee Payment"
        span="View Payment Status"
        spanLink="/payments/sevis/status"
        icon={<Sevis />}
      />
      <aside className={styles.Body}>
        <RadioGroup
          options={radioOptions}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />
      </aside>
    </section>
  );
}

export let position = [
  "Applicants Information",
  "Payment Method",
  "Confirm Payment",
];

export function SevisValidation({ setState, isMobile }) {
  const [selectedOption, setSelectedOption] = useState("DS 2019 J-1");
  const [localState, setLocalState] = useState(false);
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  let radioOptions = [
    {
      value: "DS 2019 J-1",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span>DS 2019 J-1</span>
          <Sevis />
        </span>
      ),
    },
    {
      value: "Form 1-20",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span>Form 1-20</span>
          <Sevis />
        </span>
      ),
    },
  ];
  useEffect(() => {
    const scrollAnimate = setInterval(() => {
      window.scrollTo(0, window.scrollY - 10);
      if (window.scrollY == 0) clearInterval(scrollAnimate);
    }, 1);
  }, [localState]);
  return (
    <section className={styles.SevisValidation}>
      {isMobile ? (
        <MobilePointer position={position} index={0} />
      ) : (
        <Pointer2 index={1} position={position} />
      )}
      <section className={styles.Sevis}>
        {localState ? (
          <Form2 setState={setState} isMobile={isMobile} />
        ) : (
          <Form1
            selectedOption={selectedOption}
            isMobile={isMobile}
            radioOptions={radioOptions}
            handleOptionChange={handleOptionChange}
          />
        )}
        {isMobile ? null : <Aside state={localState} />}
      </section>
      <Button
        action={localState ? () => setState(3) : () => setLocalState(true)}
        content={localState ? "Submit" : "Next"}
        style={gloablButtonStyle}
      />
    </section>
  );
}

export function PaymentMethod({ setState, isMobile }) {
  const [selectedOption, setSelectedOption] = useState("card");
  const [localState, setLocalState] = useState(false);
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  let radioOptions = [
    { value: "card", label: "Credit/Debit Card" },
    { value: "bank", label: "Bank Transfer" },
  ];
  useEffect(() => {
    const scrollAnimate = setInterval(() => {
      window.scrollTo(0, window.scrollY - 10);
      if (window.scrollY == 0) clearInterval(scrollAnimate);
    }, 1);
  }, [localState]);
  return (
    <section className={styles.PaymentMethod}>
      {" "}
      {isMobile ? (
        <MobilePointer position={position} index={localState ? 2 : 1} />
      ) : (
        <Pointer2 position={position} index={localState ? 3 : 2} />
      )}
      <div className={styles.paymentId}>
        <Span content="Payment ID - EDU2349856" style={{ color: "#7E7E80" }} />
        <i>
          Copy <RxCopy />
        </i>
      </div>
      <aside className={styles.paymentBox}>
        {!localState && (
          <RadioGroup
            options={radioOptions}
            selectedOption={selectedOption}
            onChange={handleOptionChange}
          />
        )}
        {selectedOption === "card" ? (
          localState ? (
            <CompleteCardPayment isMobile={isMobile} setState={setState} />
          ) : (
            <CardPayment isMobile={isMobile} setLocalState={setLocalState} />
          )
        ) : (
          <BankPayment isMobile={isMobile} setState={setState} />
        )}
      </aside>
    </section>
  );
}

let CategoryOptions = ["MSU", "Oxford", "Cambridge"];
// Start of Sevis Validation component
export function Form1({
  isMobile,
  radioOptions,
  selectedOption,
  handleOptionChange,
}) {
  return (
    <aside className={styles.Info}>
      <aside className={styles.ValidationInfo}>
        <div className={styles.header}>
          <GrValidate />
          <Paragraphs content="Validation Information" />
        </div>
        {isMobile ? <Note /> : null}
        <div
          className={styles.formType}
          style={{ marginTop: isMobile ? "1rem" : "" }}
        >
          <Paragraphs content="Form Type" />
          <RadioGroup
            options={radioOptions}
            selectedOption={selectedOption}
            onChange={handleOptionChange}
          />
        </div>
        <div className={styles.form}>
          {selectedOption == "DS 2019 J-1" && (
            <Select filters={CategoryOptions} label="Category" labelAfter="*" />
          )}
          <Input placeholder="Enter Sevis ID" label="Sevis ID" labelAfter="*" />
          <Input
            placeholder="Enter Last Name"
            label="Last Name"
            labelAfter="*"
          />
          <Input placeholder="Enter First & Second Name" label="Given Names" />
          <div className={styles.DOB}>
            <Input
              label="Date of Birth"
              labelAfter="*"
              inputStyle={{ display: "none" }}
            />
            <div className={styles.options}>
              <Select filters={daysOfMonth} filterState="Day" />
              <Select filters={monthsOfYear} filterState="Month" />
              <Select filters={years} filterState="Year" />
            </div>
          </div>
        </div>
      </aside>
      <aside className={styles.ValidationInfo}>
        <div className={styles.header}>
          <RxPerson />
          <Paragraphs content="Personal Information" />
        </div>
        <div className={styles.form} style={{ margin: "3rem 0 1.5rem" }}>
          <Input
            placeholder="Enter Email"
            label="Email"
            type="email"
            labelAfter="*"
          />
          <Input
            placeholder="Enter Last Name"
            label="Last Name"
            labelAfter="*"
          />
          <Input
            label="Phone Number"
            type="number"
            before={
              <>
                <Nigeria /> <i>+234</i>
              </>
            }
          />
          <Select
            filters={countries}
            label="Country of residence"
            labelAfter="*"
            filterState="Select country"
          />
          <Select
            filters={countries}
            label="Country of Birth"
            labelAfter="*"
            filterState="Select country"
          />
        </div>
      </aside>
    </aside>
  );
}
export function Form2({ isMobile }) {
  return (
    <aside className={styles.Info}>
      <aside className={styles.ValidationInfo}>
        <div className={styles.header}>
          <CiLocationOn />
          <Paragraphs content="Address Information" />
        </div>
        {isMobile ? <Note /> : null}
        <div className={styles.form}>
          <Input
            placeholder="Enter Address 1"
            label="Address 1"
            labelAfter="*"
          />
          <Input
            placeholder="Enter Address 2"
            label="Address 2"
            labelAfter="*"
          />
          <Select
            filters={states}
            label="State"
            labelAfter="*"
            filterState="Select State"
          />
          <Select
            filters={cities}
            label="City"
            labelAfter="*"
            filterState="Select City"
          />
          <Select
            filters={countries}
            label="Country"
            labelAfter="*"
            filterState="Select Country"
          />
        </div>
      </aside>
      <aside className={styles.ValidationInfo}>
        <div className={styles.header}>
          <GrDocumentUpload />
          <Paragraphs content="Documents Upload" />
        </div>
        <div className={styles.form} style={{ margin: "3rem 0 1.5rem" }}>
          <Span
            content="Please upload the following documents"
            style={{ color: "#696A6A", fontSize: "22px" }}
          />
          <Input
            placeholder={
              <>
                <Cloud />
                <span>
                  <i>Select a file</i> or drag and Drop .Jpg or .Png
                </span>
              </>
            }
            label="IS-19/DS 20"
            type="file"
          />
          <Input
            placeholder={
              <>
                <Cloud />
                <span>
                  <i>Select a file</i> or drag and Drop .Jpg or .Png
                </span>
              </>
            }
            label="Passport Photograph"
            type="file"
          />
          <Input
            placeholder={
              <>
                <Cloud />
                <span>
                  <i>Select a file</i> or drag and Drop .Jpg or .Png
                </span>
              </>
            }
            label="International Passport Data Page"
            type="file"
          />
        </div>
      </aside>
    </aside>
  );
}
export function Aside({ state }) {
  return (
    <div className={styles.Aside}>
      <Note />
      <div className={styles.document}>
        <div className={styles.doc1}>
          <div className={styles.doc2}>
            <div className={styles.doc3}>
              {state ? <Document /> : <Person />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Note() {
  return (
    <div className={styles.Note}>
      <div className={styles.top}>
        <ImageComponent src={IdeaSVG} />
        <Headers content="Please Note" />
      </div>
      <Paragraphs content=">Ensure you have a complete and accurate Form I-20 or DS-2019." />
      <Paragraphs content=" >If you do not have an I-20 or DS-2019 or if the information on the form is incorrect, contact your school official or program sponsor." />
    </div>
  );
}
// End of Sevis Vali

// Start of Payment
export function CardPayment({ isMobile, setLocalState }) {
  return (
    <div className={styles.CardPayment}>
      <div className={styles.Svg}>
        <ImageComponent
          src={MasterCardSVG}
          style={{ width: "90px", height: "50px" }}
        />
        <ImageComponent
          src={VisaSVG}
          style={{ width: "150px", height: "100px" }}
        />
        <ImageComponent
          src={PaypalSVG}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div
        className={styles.Note}
        style={{ padding: isMobile ? "12px" : "20px" }}
      >
        <div className={styles.top} style={{ alignItems: "flex-start" }}>
          <div className={styles.lock}>
            <Lock />
          </div>
          <Paragraphs
            content="We do not store any credit card Information and your payments are processed by world leading payment gateways"
            style={{ maxWidth: isMobile ? "90%" : "70%" }}
          />
        </div>
      </div>
      <div className={styles.cardForm}>
        <Input
          label="Card Name"
          placeholder="Enter Card Holders Name"
          labelAfter="*"
        />
        <Input
          label="Card Number"
          placeholder="0000 0000 0000"
          labelAfter="*"
        />
        <div className={styles.sensitiveCardInfo}>
          <div className={styles.expiry}>
            <Input label="Expiry Date" placeholder="Month" labelAfter="*" />
            <Input placeholder="Year" label="." />
          </div>
          <Input label="CVV" placeholder="123" labelAfter="*" />
        </div>
      </div>
      <div className={styles.InfoModal}>
        <InfoModal />
        Credit Card payments maight take up to 24 hours to be processed
      </div>
      <Button
        content="Next"
        action={() => setLocalState(true)}
        style={gloablButtonStyle}
      />
    </div>
  );
}
export function CompleteCardPayment({ isMobile, setState }) {
  let PaymentSummary = [
    { header: "Paying For", content: "SEVIS FEE(1-90)" },
    { header: "Form Fee", content: "$450.00" },
    { header: "Charge", content: "$120.00" },
    { header: "Total", content: "$670.00" },
  ];
  return (
    <div className={styles.CompleteCardPayment}>
      <PaymentsNote
        content="Kindly Double Check The Details Below Before You Click Pay"
        isMobile={isMobile}
        width={true}
      />
      <div className={styles.PaymentDetails}>
        <div className={styles.top}>
          <Span
            content={
              <>
                Payment Details
                <GrValidate />
              </>
            }
          />
          <i>Edit</i>
        </div>
        <div className={styles.bottom}>
          <div className={styles.cardDetails}>
            <ImageComponent src={MasterCardSVG} />
            <aside>
              {[1, 2, 3].map((Dots) => (
                <span className={styles.Dots} key={Dots}>
                  {[1, 2, 3, 4].map((Dot) => (
                    <i className={styles.dot} key={Dot}></i>
                  ))}
                </span>
              ))}
              <span className={styles.lastNum}>3584</span>
            </aside>
          </div>
          <Span content="Master Card" style={{ fontSize: "14px" }} />
        </div>
      </div>
      <div className={styles.PaymentSummary}>
        {" "}
        <div className={styles.top}>
          <Span content="Payment Summary" />
          <i>Edit</i>
        </div>
        <div className={styles.Details}>
          {PaymentSummary.map(({ header, content }) => (
            <div className={styles.Detail} key={header}>
              <Span content={header} style={{ color: "#A6A6A8" }} />{" "}
              <span>|</span> <Span content={content} />
            </div>
          ))}
        </div>
      </div>
      <Button
        content="Pay"
        style={gloablButtonStyle}
        action={() => setState(4)}
      />
    </div>
  );
}
export function BankPayment({ isMobile, setState }) {
  let Details = [
    { header: "Account Name", detail: "Educarts LLC" },
    { header: "Account Number", detail: "1234567890" },
    { header: "Bank Name", detail: "GTCO" },
    { header: "Account Type", detail: "Current" },
  ];
  return (
    <div className={styles.BankPayment}>
      <PaymentsNote
        content="Bank Transfer can take up to 15 minutes to be confirmed, Please check Your Payment Status to confirm your payment status"
        isMobile={isMobile}
      />
      <div className={styles.accountBox}>
        <div className={styles.box}>
          <Span content="Make a transfer to the account details below" />
          <div className={styles.Bank}>
            <ImageComponent src={GTCO_SVG} />
            <HighlightHeader content="Educarts LLC" />
          </div>
          <div className={styles.Details}>
            {Details.map(({ header, detail }) => (
              <div className={styles.Detail} key={header}>
                <Span content={header} style={{ color: "#A6A6A8" }} />{" "}
                <span>|</span> <Span content={detail} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button
        content="I Have Made Payments"
        style={gloablButtonStyle}
        action={() => setState(4)}
      />
    </div>
  );
}
export function PaymentsNote({ content, isMobile, width }) {
  return (
    <div
      className={styles.Note}
      style={{
        padding: isMobile ? "12px" : "20px",
        width: width ? "min(400px, 100%)" : "",
      }}
    >
      <div className={styles.top}>
        <div className={styles.lock}>
          <Timer />
        </div>
        <Paragraphs
          content={content}
          style={{ maxWidth: isMobile ? "90%" : "70%" }}
        />
      </div>
    </div>
  );
}

export function Pointer({ position, index }) {
  let CircleStyle = { background: "#696A6A" };
  let scale = { scale: 0.7 };
  return (
    <div className={styles.Pointer}>
      {position.map((point, i) => (
        <div className={styles.Point} key={i}>
          <div className={styles.MainPointer}>
            <div
              className={styles.OuterCircle}
              style={index != i ? { ...scale, ...CircleStyle } : {}}
            >
              <div
                className={styles.InnerCircle}
                style={index != i ? CircleStyle : {}}
              >
                <span>{i + 1}</span>
              </div>
            </div>
            <Paragraphs content={point} />
          </div>
          {i != position.length - 1 && (
            <span className={styles.PointerLine}></span>
          )}
        </div>
      ))}
    </div>
  );
}
export function MobilePointer({ position, index }) {
  return (
    <div className={styles.MobilePointer}>
      <div className={styles.Point}>
        <div className={styles.MainPointer}>
          <div className={styles.OuterCircle}>
            <div className={styles.InnerCircle}>
              <span>{index + 1}</span>
            </div>
          </div>
          <Paragraphs content={position[index]} />
        </div>
      </div>
    </div>
  );
}

export function Pointer2({ index, position }) {
  let CircleStyle = { background: "#696A6A" };
  let scale = { scale: 0.7 };
  let setStyle = (i) => {
    if (index !== i) {
      return { ...scale, ...CircleStyle };
    } else {
      return {};
    }
  };
  let setCircleStyle = (i) => {
    if (index !== i) {
      return CircleStyle;
    } else {
      return {};
    }
  };
  let setColor = (i) => {
    if (index === i) {
      return { color: "#fff" };
    } else {
      return {};
    }
  };

  return (
    <div className={styles.Pointer2}>
      <div className={styles.step}>
        <div className={styles.OuterCircle} style={setStyle(1)}>
          <div className={styles.InnerCircle} style={setCircleStyle(1)}>
            <span style={setColor(1)}>1</span>
          </div>
        </div>
        <Paragraphs content={position[0]} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.step}>
        <div className={styles.OuterCircle} style={setStyle(2)}>
          <div className={styles.InnerCircle} style={setCircleStyle(2)}>
            <span style={setColor(2)}>2</span>
          </div>
        </div>
        <Paragraphs content={position[1]} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.step}>
        <div className={styles.OuterCircle} style={setStyle(3)}>
          <div className={styles.InnerCircle} style={setCircleStyle(3)}>
            <span style={setColor(3)}>3</span>
          </div>
        </div>
        <Paragraphs content={position[2]} />
      </div>
    </div>
  );
}
