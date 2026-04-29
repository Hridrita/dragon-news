'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleRegisterFunc = async(e) =>{
        // console.log(e.target);
        // e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;

        // console.log(email,password);
        console.log(e);

        const {email, name, photo, password} = e;
        console.log(name, photo);

        const {data, error} = await authClient.signUp.email({
          name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
        });
        console.log(data, error);

        if(error){
          alert(error.message);
        }

        if(data){
          alert("SignUp Successful")
        }

    };

    console.log(errors);
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">Register Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
            <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input 
            type="text" 
            placeholder="Type here Name"
            {...register("name", {required: "name field is required"})}
            // name="password" 
            className="input input-primary w-full" />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            
          </fieldset>
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

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input 
            type="text" 
            placeholder="Type here URL"
            {...register("url", {required: "Photo URL field is required"})}
            // name="password" 
            className="input input-primary w-full" />
            {errors.url && <p className="text-red-500">{errors.url.message}</p>}
            
          </fieldset>


          

          <button className="btn w-full bg-slate-800 ">Register</button>
        </form>

       
      </div>
    </div>
  );
};

export default RegisterPage;
