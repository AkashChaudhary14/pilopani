import { apple, waterbox, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={waterbox} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Revolutionary  <br className="sm:block hidden" /> Advertising
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Revitalize your advertising with Pilopani - a revolutionary platform that utilizes free water
       distribution for a fresh approach to marketing. 
       Say goodbye to annoying your audience; instead, we bring smiles and 
       create a joyful state that fosters excitement to support your brand.
      </p>

      
    </div>
  </section>
);

export default Billing;
