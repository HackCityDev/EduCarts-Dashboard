import Span from "../General/Span";
import Button from "../General/Button";
import Headers from "../General/Headers";
import styles from "./components.module.css";
import ImageComponent from "../../assets/SVGs/SVGImageComponent";

export default function OptionsElement({ Options, headers }) {
  return (
    <section className={styles.Options}>
      <Headers content={headers} />
      <aside className={styles.Grid}>
        {Options.map(({ icon, button, header, content, link }, i) => (
          <div key={i} className={styles.Item}>
            <div
              className={styles.top}
              style={{ justifyContent: "space-between" }}
            >
              <ImageComponent src={icon} />
              <Button
                content={button}
                style={{
                  fontSize: "14px",
                  lineHeight: "0px",
                  letterSpacing: "-0.02em",
                  height: "auto",
                }}
                link={link}
              />
            </div>
            <Headers
              content={header}
              style={{ fontSize: "18px", lineHeight: "28px" }}
            />
            <Span content={content} />
          </div>
        ))}
      </aside>
    </section>
  );
}
