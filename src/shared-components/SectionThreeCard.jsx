const SectionThreeCard = (prop) => {
  const { imageSrc, altText, title, description } = prop;
  return (
    <div className="card">
      <img src={imageSrc} alt={altText} />

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionThreeCard;
