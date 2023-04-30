import { useRouter } from "next/router";
import Image from "next/image";
import useMQ from "../../hooks/useMQ";
import styles from "../styles.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { BellIcon, DashboardIcon } from "../../assets_dashboard/Navbar";
import Avatar from "../../assets_dashboard/avatar.png";
import Input from "../General/Input";
import Paragraphs from "../General/Paragraphs";
import HighlightHeader from "../General/HighlightHeader";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [openBar, setOpenBar] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  let isMobile = useMQ("(max-width: 700px)");
  let isDesktop = useMQ("(min-width: 1000px)");
  let router = useRouter();
  function activeLink(link) {
    let title = headersUrls.map((headersUrl) => {
      if (headersUrl.link === link) {
        return headersUrl.name;
      }
    });
    return title;
  }
  let sidebarRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!sidebarRef.current?.contains(e.target)) {
          setOpenSideBar(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Dashboard}>
        <span onClick={() => setOpenSideBar(!openSideBar)}>
          {isMobile ? <RxHamburgerMenu /> : <DashboardIcon />}
        </span>
        <HighlightHeader content={activeLink(router.route)} />
      </div>
      <div className={styles.Search}>
        {isMobile ? (
          <CiSearch color="#ADB1B2" fontSize="1.2rem" />
        ) : (
          <Input
            placeholder="🔍 Type to search"
            labelStyle={{ width: "min(100%, 200px)" }}
            inputStyle={{
              border: "0.75px solid #E8E8E8",
              borderRadius: "6px",
            }}
          />
        )}
      </div>
      <div className={styles.BellIcon}>
        <div className={styles.Bell}>
          <BellIcon />
          <span></span>
        </div>
      </div>
      <div className={styles.Avatar} onClick={() => setOpenBar(!openBar)}>
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
        {openBar && <Bar setOpenBar={setOpenBar} />}
      </div>
      <aside ref={sidebarRef} className={styles.openSideBar}>
        {openSideBar && <Sidebar />}
      </aside>
    </nav>
  );
}
let headersUrls = [
  { link: "/", name: "Dashboard" },
  { link: "/payments", name: "Payments" },
];
export let accountUrls = [
  { link: "/profile", name: "Profile" },
  { link: "/transactions", name: "Transactions" },
  { link: "/identity", name: "Identity" },
  { link: "/security", name: "Security" },
];
function Bar({ setOpenBar }) {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!menuRef.current?.contains(e.target)) {
          setOpenBar(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className={styles.Bar} ref={menuRef}>
      <aside className={styles.Top}>
        <Paragraphs
          content="Accounts"
          style={{
            color: "#0d1d2f",
          }}
        />
        <span onClick={() => setOpenBar(false)}>
          <IoCloseOutline color="#0d1d2f" />
        </span>
      </aside>
      <aside className={styles.Bottom}>
        {accountUrls.map((url) => (
          <Link href={url.link} key={url.link}>
            <a>{url.name}</a>
          </Link>
        ))}
      </aside>
    </div>
  );
}
