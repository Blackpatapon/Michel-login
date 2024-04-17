/* eslint-disable no-unused-vars */
// IndexPage.js
import React from "react";
import { Link } from "react-router-dom";
import "../style/inicio.css";

export default function Index() {
  return (
    <div className="container">
      <h1 className="title">INICIO</h1>
      <div className="link-container">
        <Link to="/login" className="link">
          Ir al Login
        </Link>
        <Link to="/register" className="link">
          Ir al Registro
        </Link>
      </div>
    </div>
  );
}
