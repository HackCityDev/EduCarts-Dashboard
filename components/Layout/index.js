import Navbar from "./navbar";
import styles from "../styles.module.css";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <aside className={styles.LayoutSidebar}>
        <Sidebar />
      </aside>
      <aside className={styles.LayoutNavbar}>
        <Navbar />
        {children}
      </aside>
    </div>
  );
}
