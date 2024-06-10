'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = isSignUp ? '/api/signup' : '/api/signin';
    try {
      const response = await axios.post(endpoint, { email, password })
      console.log(response.data) // Handle response
      router.push('/');
    } catch (error) {
      console.error(error); // Handle error
    }
  }

  return (
    <div className='conatinerr'>
      <h1>{isSignUp ? 'Sign up' : 'Sign in'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default AuthPage;
