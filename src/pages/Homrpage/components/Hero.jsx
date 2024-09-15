import "../../../css/index.css";
import Button from "../../../shared-components/Button";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-section-1">
          <h1>TRACK, ORGANISE AND TRANSFER YOUR WEALTH</h1>
        </div>
        <div className="hero-section-2">
          <p>
            Seamlessly track your assets, designate beneficiaries, and access
            estate planning products tailored to your needs.
          </p>
          <Button
            style={{ marginTop: "30px" }}
            text={"Get Started"}
            btn_type={"getstarted"}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
