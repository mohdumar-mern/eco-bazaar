import React, { useState } from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactForm,
  TextAreaField,
  Group,
  FormInputLabel,
} from "./ContactPageStyle.jsx";
import Input from "../../Components/form input/Input.jsx";
import Button from "../../Components/custom button/Button.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const shrink = formData.message.length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ fixed the typo here
    alert("Message submitted successfully!");
    // console.log(formData);
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          label="Your Name"
          handleChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <Group>
          <TextAreaField
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <FormInputLabel className={shrink ? "shrink" : ""}>
            Your Message
          </FormInputLabel>
        </Group>
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
