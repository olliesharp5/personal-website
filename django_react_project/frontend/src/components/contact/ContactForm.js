import React from 'react';
import InputField from './InputField';
import FormSubmitButton from './FormSubmitButton';
import useContactForm from '../../hooks/useContactForm';

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, errors, isSubmitting } = useContactForm();

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
      />
      <InputField
        type="textarea"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      <FormSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default ContactForm;
