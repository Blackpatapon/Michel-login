import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/auth.context";

import {RegisterUser} from "./page/register.user";
import {LoginUser} from "./page/login.user";
import Index from "./page/inicio";
import ProductPage from "./page/product.page";
import SupplierPage from "./page/supplier.page";
import ProtectedRoute from "./components/route.components";
import {RegisterProduct} from "./page/register.product";
import UpdateProduct from "./page/update.product";
import DeleteProduct from "./page/delete.product";
import ViewProduct from "./page/view.product";
import {RegisterSupplier} from "./page/register.supplier";
import ViewSupplier from "./page/view.supplier";
import UpdateSupplier from "./page/update.supplier";
import DeleteSupplier from "./page/delete.supplier";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="*" element={<h1>NO SE ENCONTRO</h1>} />

          <Route element={<ProtectedRoute />}>
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/new" element={<RegisterProduct />} />
            <Route path="/product/view" element={<ViewProduct />} />
            <Route path="/product/update" element={<UpdateProduct />} />
            <Route path="/product/delete" element={<DeleteProduct />} />
            <Route path="/supplier" element={<SupplierPage />} />
            <Route path="/supplier/new" element={<RegisterSupplier />} />
            <Route path="/supplier/view" element={<ViewSupplier />} />
            <Route path="/supplier/update" element={<UpdateSupplier />} />
            <Route path="/supplier/delete" element={<DeleteSupplier />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
