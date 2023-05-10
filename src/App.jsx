import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Regiser";
import { Layout } from "./Layout";
import EditPage from "./Pages/EditPage";
import Create from "./Pages/CreatePage/Index";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/add" element={<Create />} />
        {/* <Route /> */}
      </Routes>
    </Layout>
  );
}

export default App;
