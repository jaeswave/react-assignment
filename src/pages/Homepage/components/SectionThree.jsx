import img1 from "../../../assets/image/sectionthree/img1.svg";
import img2 from "../../../assets/image/sectionthree/img2.svg";
import img3 from "../../../assets/image/sectionthree/img3.svg";
import SectionThreeCard from "../../../shared-components/SectionThreeCard";
const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="section-3-child">
        <h3>Why Choose MAPP</h3>
        <p>
          Discover the power of precision with our cutting-edge features. From
          real-time asset tracking to secure wealth transfers, MAPP is the
          catalyst for a smarter, more organized financial journey
        </p>
      </div>
      <div className="section-3-cards">
        <SectionThreeCard
          imageSrc={img1}
          title="Peace of mind"
          description="liminate all the worries associated with what happens to your
              assets in your absence. MAPP will sort it out."
        />

        <SectionThreeCard
          imageSrc={img2}
          title="Peace of mind"
          description="liminate all the worries associated with what happens to your
              assets in your absence. MAPP will sort it out."
        />

        <SectionThreeCard
          imageSrc={img3}
          title="Peace of mind"
          description="liminate all the worries associated with what happens to your
              assets in your absence. MAPP will sort it out."
        />
      </div>
    </div>
  );
};

export default SectionThree;
