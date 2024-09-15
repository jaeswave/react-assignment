const FeatureCard = (prop) => {
  const { imageSrc, altText, title, description } = prop;
  return (
    <div className="feature-card">
      <img src={imageSrc} alt={altText} />
      <div className="feature-title-p">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
