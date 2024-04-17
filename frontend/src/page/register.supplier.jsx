import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/auth.hooks";
import NavBar from "../components/nav.components";
import { logout } from "../services/auth.service";
import { newSupplier } from "../services/supplier.service";
import "../style/formularios.css";


export function RegisterSupplier() {
  // eslint-disable-next-line no-unused-vars
  const { handleSubmit, errors, register } = useForm();
  const submitForm = async (data) => {
    console.log(data);
    // eslint-disable-next-line no-undef
    const res = await addSupplier(data);
    console.log(res);
  };

  return (
    <div className="form-container">
      <h1>PROVEEDOR</h1>
      <form className="form-table" onSubmit={handleSubmit(submitForm)}>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="text"
            id="supplierId"
            placeholder="Supplier ID"
            {...register("supplierId", {
              required: "Supplier ID is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="text"
            id="supplierFName"
            placeholder="Supplier's First Name"
            {...register("supplierFName", {
              required: "First name is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="text"
            id="supplierLName"
            placeholder="Supplier's Last Name"
            {...register("supplierLName", {
              required: "Last name is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="text"
            id="supplierComName"
            placeholder="Supplier's Company Name"
            {...register("supplierComName", {
              required: "Company name is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="tel"
            id="supplierPhone"
            placeholder="Supplier's Phone"
            {...register("supplierPhone", {
              required: "Phone number is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="email"
            id="supplierEmail"
            placeholder="Supplier's email"
            {...register("supplierEmail", {
              required: "Email is required",
            })}
            required
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Supplier
      </button>
    </form>
    </div>
  );
}
