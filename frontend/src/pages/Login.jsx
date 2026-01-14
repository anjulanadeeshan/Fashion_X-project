import React, { useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { loginUser, registerUser, adminLogin } from '../services/userService'
import { toast } from 'react-toastify'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const { login, navigate } = useContext(ShopContext);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      let response;
      
      if (currentState === 'Sign Up') {
        // Register new user (admin login not available for sign up)
        if (isAdminLogin) {
          toast.error('Admin registration is not allowed. Please sign up as a regular user.');
          setLoading(false);
          return;
        }
        response = await registerUser(formData.name, formData.email, formData.password);
      } else {
        // Login existing user or admin
        if (isAdminLogin) {
          response = await adminLogin(formData.email, formData.password);
          if (response.success) {
            // Save admin token and info
            localStorage.setItem('adminToken', response.token);
            localStorage.setItem('adminUser', JSON.stringify(response.user));
            toast.success('Admin login successful!');
            navigate('/admin/dashboard');
            setLoading(false);
            return;
          } else {
            toast.error(response.message || 'Invalid admin credentials');
            setLoading(false);
            return;
          }
        } else {
          response = await loginUser(formData.email, formData.password);
        }
      }

      if (response.success) {
        // Save auth data and update context
        login(response.token, response.user);
        navigate('/');
      } else {
        toast.error(response.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Auth error:', error);
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      const errorMessage = error.response?.data?.message || error.message || 'Something went wrong. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh]">
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        
        {/* Title Section */}
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl'>{isAdminLogin ? 'Admin Login' : currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>

        {/* Admin Login Toggle - Only visible during Login */}
        {currentState === 'Login' && (
          <div className='w-full flex items-center gap-2 -mt-2'>
            <input 
              type="checkbox" 
              id="adminLogin"
              checked={isAdminLogin}
              onChange={(e) => setIsAdminLogin(e.target.checked)}
              className='h-4 w-4'
            />
            <label htmlFor="adminLogin" className='text-sm text-gray-700 cursor-pointer'>
              Login as Admin
            </label>
          </div>
        )}

        {/* Name Input - Only visible during Sign Up */}
        {currentState === 'Sign Up' && !isAdminLogin && (
          <input 
            type="text" 
            name="name"
            className='w-full px-3 py-2 border border-gray-800' 
            placeholder='Name' 
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        
        {/* Email & Password Inputs */}
        <input 
          type="email" 
          name="email"
          className='w-full px-3 py-2 border border-gray-800' 
          placeholder='Email' 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type="password" 
          name="password"
          className='w-full px-3 py-2 border border-gray-800' 
          placeholder='Password' 
          value={formData.password}
          onChange={handleChange}
          required
          minLength={8}
        />

        {/* Forgot Password & Toggle Link */}
        <div className='w-full flex justify-between text-sm -mt-2'>
            {!isAdminLogin && (
              <p 
                onClick={() => navigate('/forgot-password')} 
                className='cursor-pointer hover:underline'
              >
                Forgot your password?
              </p>
            )}
            <div className={isAdminLogin ? 'w-full' : ''}>
            {
                currentState === 'Login'
                ? <p onClick={()=>{ setCurrentState('Sign Up'); setIsAdminLogin(false); }} className='cursor-pointer'>Create account</p>
                : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
            }
            </div>
        </div>

        {/* Submit Button */}
        <button 
          className='bg-black text-white font-light px-8 py-2 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed'
          disabled={loading}
        >
            {loading ? 'Please wait...' : (isAdminLogin ? 'Admin Sign In' : (currentState === 'Login' ? 'Sign In' : 'Sign Up'))}
        </button>

      </form>
    </div>
  )
}

export default Login