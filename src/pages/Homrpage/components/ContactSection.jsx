import ContactItem from "../../../shared-components/Contactitem";
const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2>Get in touch</h2>
      <p>Our friendly team is always here to help.</p>
      <div className="contact-options">
        <ContactItem contactType="email" />
        <ContactItem contactType="office" />
        <ContactItem />
      </div>
    </section>
  );
};

export default ContactSection;
