import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <form onSubmit={(e) => handleForm(e)} className='flex flex-col mt-5 justify-center items-center gap-10 rounded-md border-2 border-gray-500 p-8'>
            <input onChange={(e) => handleEmail(e)} value={email} className='outline-none w-full rounded-md border border-gray-500 px-3 py-2 text-md' required type="email" placeholder='Enter your email' />
            <input onChange={(e) => handlePassword(e)} value={password} className='outline-none w-full rounded-md border border-gray-500 px-3 py-2 text-md' required type="password" placeholder='*****' />
            <button className='bg-emerald-800 text-white w-full rounded-md px-4 py-2'>Log in</button>
        </form>
    </div>
  )
}

export default Login