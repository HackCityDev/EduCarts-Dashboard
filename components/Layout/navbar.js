import { useRouter } from "next/router";
import Image from "next/image";
import useMQ from "../../hooks/useMQ";
import styles from "../styles.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { BellIcon, DashboardIcon } from "../../assets_dashboard/Navbar";
import Avatar from "../../assets_dashboard/avatar.png";
import Input from "../General/Input";
import Paragraphs from "../General/Paragraphs";
import HighlightHeader from "../General/HighlightHeader";

export default function Navbar() {
  let isMobile = useMQ("(max-width: 700px)");
  let router = useRouter();
  function activeLink(link) {
    let title = headersUrls.map((headersUrl) => {
      if (headersUrl.link === link) {
        return headersUrl.name;
      }
    });
    return title;
  }
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Dashboard}>
        {isMobile ? <RxHamburgerMenu /> : <DashboardIcon />}
        <HighlightHeader content={activeLink(router.route)} />
      </div>
      <div className={styles.Search}>
        {isMobile ? (
          <CiSearch color="#ADB1B2" fontSize="1.2rem" />
        ) : (
          <Input
            placeholder="Type to search"
            before={<CiSearch />}
            labelStyle={{ width: "min(100%, 200px)" }}
            inputStyle={{ border: "0.75px solid #E8E8E8", borderRadius: "6px" }}
          />
        )}
      </div>
      <div className={styles.BellIcon}>
        <div className={styles.Bell}>
          <BellIcon />
          <span></span>
        </div>
      </div>
      <div className={styles.Avatar}>
        <div className={styles.AvatarImage}>
          <Image src={Avatar} objectFit="cover" layout="fill" />
        </div>
        {!isMobile && (
          <Paragraphs
            content="Adewale John"
            style={{ color: "#151A1D", fontSize: "1rem", fontWeight: "500" }}
          />
        )}
        <HiChevronDown />
      </div>
    </nav>
  );
}
let headersUrls = [
  { link: "/", name: "Dashboard" },
  { link: "/payments", name: "Payments" },
];
