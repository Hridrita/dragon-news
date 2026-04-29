'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleLoginFunc = async(e) =>{
        // console.log(e.target);
        // e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;

        // console.log(email,password);
        console.log(e);

        const { data, error } = await authClient.signIn.email({
    email: e.email, // required
    password: e.password, // required
    rememberMe: true,
    callbackURL: "/",
});

    };

    console.log(errors);
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">Login Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input 
            type="email" 
            placeholder="Type here email" 
            {...register("email", {required: "Email field is required"})}
            // name="email"
            className="input input-primary w-full" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input 
            type="password" 
            placeholder="Type here password"
            {...register("password", {required: "Password field is required"})}
            // name="password" 
            className="input input-primary w-full" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            
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
