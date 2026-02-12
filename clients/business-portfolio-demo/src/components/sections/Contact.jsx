import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <div className="max-w-4xl mx-auto px-4 py-12"></div>
      <input name="email" onChange={handleChange} />
    </section>
  );
};

export default Contact;
