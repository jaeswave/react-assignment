import FaqAccordion from "../../../shared-components/FaqAccordion";
const Faq = () => {
  return (
    <div className="faq">
      <h4>Frequently Asked Question</h4>
      <div className="accordion">
        <FaqAccordion question="How do I start a wealth management account?"/>
        <FaqAccordion question="How do I start a wealth management account?"/>
        <FaqAccordion question="How do I start a wealth management account?"/>
        <FaqAccordion question="How do I start a wealth management account?"/>
        <FaqAccordion question="How do I start a wealth management account?"/>
        <FaqAccordion question="How do I start a wealth management account?"/>
      </div>
    </div>
  );
};

export default Faq;
