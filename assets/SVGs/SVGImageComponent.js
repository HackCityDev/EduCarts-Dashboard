import Image from "next/image";
let containerStyles = {
  width: "40px",
  height: "40px",
  position: "relative",
};
export default function ImageComponent({ src, style }) {
  return (
    <div style={{ ...containerStyles, ...style }}>
      <Image src={src} objectFit="contain" layout="fill" />
    </div>
  );
}
