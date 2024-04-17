// eslint-disable-next-line no-unused-vars
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { UserContext } from "../context/auth.context";

// eslint-disable-next-line no-unused-vars
import { login } from "../services/auth.service";
import "../style/formularios.css"

export function LoginUser() {
  const { handleSubmit, register } = useForm();

  const submitForm = async (data) => {
    console.log(data);
    try {
      // eslint-disable-next-line no-undef
      const res = await loginUser(data);
      console.log(res);
      // Handle successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form className="form-table" onSubmit={handleSubmit(submitForm)}>
        <div className="form-row">
          <div className="form-cell">
            <input
              type="text"
              id="username"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
              })}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-cell">
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
              required
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
