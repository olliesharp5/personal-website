// src/toastConfig.js
import { toast } from 'react-toastify';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

// Success toast with dynamic email
export const successToast = (email) => {
  toast.success(
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaCheckCircle style={{ marginRight: '10px', color: '#28a745' }} />
      <div>
        <strong>Your message has been sent successfully!</strong>
        <p>A receipt has been sent to <strong>{email}</strong>.</p>
      </div>
    </div>, 
    {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};

// Error toast with static message
export const errorToast = () => {
  toast.error(
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaExclamationTriangle style={{ marginRight: '10px', color: '#e63946' }} />
      <div>
        <strong>Something went wrong!</strong>
        <p>Please try again later.</p>
      </div>
    </div>, 
    {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};
