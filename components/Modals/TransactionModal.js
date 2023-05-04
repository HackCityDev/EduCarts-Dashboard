import Image from "next/image";
import Loading from "../../assets/loader.svg";
import Success from "../../assets/tick-circle.png";
import Paragraphs from "../General/Paragraphs";
import Button from "../General/Button";
export default function Modal({ receipt }) {
  return (
    <div className="Modal">
      <div className="ModalImage">
        <Image
          src={receipt ? Success : Loading}
          objectFit="contain"
          layout="fill"
        />
      </div>
      {receipt && (
        <div className="SuccessModal">
          <Paragraphs
            content="Transfer Successful"
            style={{ color: "#1B9E61", fontWeight: "500" }}
          />
          <div>
            <Button content="Download Receipt" />
            <Button content="View Status" oppose={true} />
          </div>
        </div>
      )}
    </div>
  );
}
