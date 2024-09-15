const FaqAccordion = (prop) => {
  const { question } = prop;
  return <div className="accordion__item">{question}</div>;
};

export default FaqAccordion;
