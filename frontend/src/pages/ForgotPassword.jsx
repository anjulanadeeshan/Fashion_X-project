import React, { useState } from 'react';
import { requestPasswordReset } from '../services/userService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await requestPasswordReset(email);

      if (response.success) {
        toast.success(response.message);
        // Store the reset token (in production, this would be sent via email)
        setResetToken(response.resetToken);
        
        // Redirect to reset password page with email
        setTimeout(() => {
          navigate(`/reset-password?email=${encodeURIComponent(email)}`);
        }, 1500);
      } else {
        toast.error(response.message || 'Failed to send reset link');
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh] flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      
      {/* Title Section */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>Forgot Password</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      <p className='text-sm text-gray-600 text-center mb-4'>
        Enter your email address and we'll send you instructions to reset your password.
      </p>

      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
        <input
          type="email"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type='submit'
          className='bg-black text-white font-light px-8 py-2 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed'
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>

        {resetToken && (
          <div className='mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded'>
            <p className='text-sm font-semibold mb-2'>Development Mode - Reset Token:</p>
            <p className='text-xs break-all bg-white p-2 rounded border'>{resetToken}</p>
            <p className='text-xs text-gray-600 mt-2'>
              Copy this token - you'll need it on the next page.
            </p>
          </div>
        )}
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

export default ForgotPassword;
