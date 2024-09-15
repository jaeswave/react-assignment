const ContactItem = (prop) => {
  const { contactType } = prop;
  return contactType == "email" ? (
    <div className="contact-item">
      <img src="email-icon.png" alt="Email Icon" />
      <h3>Email</h3>
      <p>Our friendly team is here to help.</p>
      <a href="mailto:mapp@investmapp.com">mapp@investmapp.com</a>
    </div>
  ) : contactType == "office" ? (
    <div className="contact-item">
      <img src="office-icon.png" alt="Office Icon" />
      <h3>Office</h3>
      <p>Come say hello at our office.</p>
      <p>20A Gerrard Road, Ikoyi, Lagos</p>
    </div>
  ) : (
    <div className="contact-item">
      <img src="phone-icon.png" alt="Phone Icon" />
      <h3>Phone</h3>
      <p>Mon-Fri from 8am to 4:30pm.</p>
      <a href="tel:+2347029648011">+234 702 964 8011</a>
    </div>
  );
};

export default ContactItem;
