import React, { useState, useEffect } from 'react';
import { resetPassword } from '../services/userService';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    email: searchParams.get('email') || '',
    resetToken: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Validate password length
    if (formData.newPassword.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await resetPassword(
        formData.email,
        formData.resetToken,
        formData.newPassword
      );

      if (response.success) {
        toast.success(response.message);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast.error(response.message || 'Failed to reset password');
      }
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh] flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      
      {/* Title Section */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>Reset Password</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      <p className='text-sm text-gray-600 text-center mb-4'>
        Enter your reset token and new password
      </p>

      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
        <input
          type="email"
          name="email"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="resetToken"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Reset Token'
          value={formData.resetToken}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="newPassword"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='New Password (min 8 characters)'
          value={formData.newPassword}
          onChange={handleChange}
          required
          minLength={8}
        />

        <input
          type="password"
          name="confirmPassword"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Confirm New Password'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          minLength={8}
        />

        <button
          type='submit'
          className='bg-black text-white font-light px-8 py-2 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed'
          disabled={loading}
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>

      <div className='w-full text-center mt-4'>
        <p className='text-sm text-gray-600'>
          Remember your password?{' '}
          <span
            onClick={() => navigate('/login')}
            className='text-black cursor-pointer hover:underline'
          >
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
