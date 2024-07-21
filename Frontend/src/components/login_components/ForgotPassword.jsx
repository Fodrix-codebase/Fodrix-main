import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './forgot.css';
import { useHistory } from 'react-router';

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);

  const sendOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/forgot-password', { email });
      setIsOTPSent(true);
      swal(response.data.message);
    } catch (error) {
      console.error(error);
      swal('Failed to send OTP. Please try again later.');
    }
  };

  const resendOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/resend-otp', { email });
      setIsOTPSent(true);
      swal(response.data.message);
    } catch (error) {
      console.error(error);
      swal('Failed to resend OTP. Please try again later.');
    }
  };

  const resetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/reset-password', {
        email,
        otp,
        newPassword,
      });
      swal(response.data.message).then(() => {
        // Redirect the user to the login page after successful password reset
        history.push('/login');
      });
    } catch (error) {
      console.error(error);
      swal('Failed to reset password. Please check your email, OTP, and try again.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="custom-card">
            <div className="card-header">Forgot Password</div>
            <div className="card-body">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {!isOTPSent ? (
                <button className="btn btn-primary" onClick={sendOTP}>
                  Send OTP
                </button>
              ) : (
                <>
                  <div className="form-group">
                    <label>OTP</label>
                    <input
                      type="text"
                      className="form-control"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button className="btn btn-primary" onClick={resetPassword}>
                    Reset Password
                  </button>
                </>
              )}
              {isOTPSent && (
                <button className="btn btn-secondary m-2" onClick={resendOTP}>
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
