import React from 'react';

const FormSubmitButton = ({ isSubmitting }) => (
  <button className="coloured-button submit-button" type="submit" disabled={isSubmitting}>
    {isSubmitting ? <span className="spinner"></span> : "Send"}
  </button>
);

export default FormSubmitButton;
