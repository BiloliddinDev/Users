import Nav from "../Components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Layout({ children }) {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Nav />
      {children}
    </div>
  );
}
