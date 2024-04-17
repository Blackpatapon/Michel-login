// eslint-disable-next-line no-unused-vars
import { useForm, useFormState } from "react-hook-form";
import { addUser } from "../services/auth.service";
import "../style/formularios.css";
// eslint-disable-next-line no-unused-vars
import { UserContext } from "../context/auth.context";


export function RegisterUser() {
  // eslint-disable-next-line no-unused-vars
  const { handleSubmit, errors, register } = useForm();
  // eslint-disable-next-line no-undef
  //const history = useHistory();
  const submitForm = async (data) => {
    console.log(data);
    const res = await addUser(data);
    console.log(res);
    history.push("./register.supplier.jsx");
  };

  return (
   <div className="form-container">
    <h1 className="form-title">USUARIOS</h1>
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
      <div className="form-row">
          <div className="form-cell">
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            {...register("phone", {
              required: "Phone number is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            {...register("firstname", {
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
            id="lastname"
            placeholder="Last Name"
            {...register("lastname", {
              required: "Last name is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <select
            id="gender"
            {...register("gender", {
              required: "Gender is required",
            })}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="date"
            id="fechaNacimiento"
            {...register("fechaNacimiento", {
              required: "Fecha de Nacimiento is required",
            })}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-cell">
          <input
            type="number"
            id="edad"
            placeholder="Age"
            {...register("edad", {
              required: "Edad is required",
            })}
            required
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Registrar
      </button>
    </form>
   </div> 
  );
}
