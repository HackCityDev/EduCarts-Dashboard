import { LogoutIcon, ProfileIcon } from "../../assets_dashboard/Sidebar";
import { HiChevronUpDown } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Paragraphs from "../General/Paragraphs";
import styles from "../styles.module.css";
import Span from "../General/Span";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import EDU from "../../assets_dashboard/eduLogo.png";
import { accountUrls } from "./navbar";

export default function Sidebar() {
  let router = useRouter();
  function activeLink(link) {
    let isActive = false;
    if (link.length > 1) {
      isActive = router.pathname.startsWith(link);
    } else if (router.route === link) isActive = true;
    if (isActive) {
      return isPath;
    } else {
      return {};
    }
  }
  const [accountBar, setAccountBar] = useState(false);
  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.Sidebar}>
        <div className={styles.Logo}></div>
        <div className={styles.AccountType}>
          <div className={styles.Account}>
            <Span
              content="PLAN"
              style={{ fontSize: "12px", color: "#6A839F" }}
            />
            <div>
              <ProfileIcon />{" "}
              <Paragraphs content="Personal" style={{ color: "#fff" }} />{" "}
              <span>
                <HiChevronUpDown />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.Links}>
          {urls.map((url, i) =>
            url.link == null ? (
              <div className={styles.accountBar}>
                <span
                  onClick={() => setAccountBar(!accountBar)}
                  style={accountBar ? isPath : {}}
                >
                  {url.name} <HiChevronDown />
                </span>
                {accountBar && (
                  <div style={{ marginLeft: "50px" }}>
                    {accountUrls.map((url, i) => (
                      <Link href={url.link} key={i}>
                        <a style={activeLink(url.link)}>{url.name}</a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link href={url.link} key={i}>
                <a style={accountBar ? {} : activeLink(url.link)}>{url.name}</a>
              </Link>
            )
          )}
        </div>
        <div className={styles.FooterComponent}>
          <div className={styles.InstallAppModal}>
            <div className={styles.Modal}>
              <div className={styles.ModalTop}>
                <Image src={EDU} width="32px" height="32px" />
                <Span
                  content="Get Educarts For Mobile"
                  style={{ color: "#6A839F" }}
                />
              </div>
              <Span
                content="Install mobile app"
                style={{ textDecoration: "underline", color: "#E8E8E8" }}
              />
              <IoCloseOutline color="#E8E8E8" className={styles.Close} />
            </div>
          </div>
          <div className={styles.Footer}>
            <div className={styles.Logout}>
              <LogoutIcon /> <Span content="Log Out" />
            </div>
            <Span
              content="© Copyright Educarts 2023"
              style={{ color: "#8A8B8B" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
let urls = [
  { link: "/", name: "Home" },
  { link: "/inbox", name: "Inbox" },
  { link: "/payments", name: "Payments" },
  { link: null, name: "Accounts" },
  { link: "/consult", name: "Consultants" },
  { link: "/wallet", name: "Wallets" },
  { link: "/security", name: "Security" },
  { link: "/resources", name: "Resources" },
  { link: "/support", name: "Support" },
];
let isPath = {
  background: "#F4F9FA",
  color: "#0D1D2F",
};
