'use client'
import Link from "next/link";
import React from "react";

const LoginPage = () => {

    const handleLoginFunc = (e) =>{
        console.log(e.target);
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password);

    }
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">Login Your Account</h2>

        <form className="space-y-4" onSubmit={handleLoginFunc}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input 
            type="email" 
            placeholder="Type here email" 
            name="email"
            className="input input-primary w-full" />
            
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input 
            type="password" 
            placeholder="Type here password"
            name="password" 
            className="input input-primary w-full" />
            
          </fieldset>

          <button className="btn w-full bg-slate-800 ">Login</button>
        </form>

        <p className="mt-4">Don't Have an Account? <Link href={"/register"} className="text-blue-500">
            Register
        </Link> </p>
      </div>
    </div>
  );
};

export default LoginPage;
