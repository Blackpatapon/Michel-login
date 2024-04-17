// eslint-disable-next-line no-unused-vars
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/auth.context";
import { logout } from "../services/auth.service";
import NavBar from "../components/nav.components";
import { newProduct } from "../services/product.service";
import { getSupplierInfo} from "../services/supplier.service";
import "../style/formularios.css"

export function RegisterProduct() {
  // eslint-disable-next-line no-unused-vars
  const { handleSubmit, errors, register } = useForm();
  const submitForm = async (data) => {
    console.log(data);
    // eslint-disable-next-line no-undef
    const res = await addProduct(data);
    console.log(res);
  };

  return (
    <div className="form-container">
      <h1>PRODUCTOS</h1>
      <form className="form-table" onSubmit={handleSubmit(submitForm)}>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="text"
            id="productCode"
            placeholder="Product ode"
            {...register("productCode", {
              required: "Product code is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="text"
            id="productName"
            placeholder="Product Name"
            {...register("productName", {
              required: "Product name is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <textarea
            id="productDesc"
            placeholder="Product Description"
            {...register("productDesc", {
              required: "Product description is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <select
            id="productStatus"
            {...register("productStatus", {
              required: "Product status is required",
            })}
            required
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form cell">
          <input
            type="text"
            id="productProvider"
            placeholder="Product Provider"
            {...register("productProvider", {
              required: "Product provider is required",
            })}
            required
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
    </div>
  );
}
