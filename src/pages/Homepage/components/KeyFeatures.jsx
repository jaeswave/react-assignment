import "../../../css/index.css";
import FeaturesCard from "../../../shared-components/FeaturesCard";
import feature1img from "../../../assets/image/keyFeatures/feature1.svg";
import feature2img from "../../../assets/image/keyFeatures/feature2.svg";
import feature3img from "../../../assets/image/keyFeatures/feature3.svg";
import feature4img from "../../../assets/image/keyFeatures/feature4.svg";

const KeyFeatures = () => {
  return (
    <div className="hero-section">
      <section className="key-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          {/* Feature 1 */}
          <FeaturesCard
            imageSrc={feature1img}
            title="Keep Track of your Assets"
            description="Track your assets and monitor their growth seamlessly. With MAPP, the total value of your cash, investments, real estate, and digital assets are organized and consolidated."
          />

          <FeaturesCard
            imageSrc={feature2img}
            title="Keep Track of your Assets"
            description="Track your assets and monitor their growth seamlessly. With MAPP, the total value of your cash, investments, real estate, and digital assets are organized and consolidated."
          />

          <FeaturesCard
            imageSrc={feature3img}
            title="Keep Track of your Assets"
            description="Track your assets and monitor their growth seamlessly. With MAPP, the total value of your cash, investments, real estate, and digital assets are organized and consolidated."
          />

          <FeaturesCard
            imageSrc={feature4img}
            title="Keep Track of your Assets"
            description="Track your assets and monitor their growth seamlessly. With MAPP, the total value of your cash, investments, real estate, and digital assets are organized and consolidated."
          />
        </div>
      </section>
    </div>
  );
};

export default KeyFeatures;
