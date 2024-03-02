import { bottle } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Our product is a  <br className="sm:block hidden" /> blank canvas.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "We're not your typical advertising – we're anything but annoying. 
      Instead of making your audience cringe, we make them smile. 
      And from that happiness, they'll eagerly support your brand."
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={bottle} alt="billing" className="w-[100%] h-[100%]" /> 
    </div>
  </section>
);

export default CardDeal;
