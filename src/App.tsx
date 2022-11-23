import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

//pages
import Parcels from "./pages/Parcels";
import Dashboad from "./pages/Dashboad";
import NotFound from "./pages/404";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboad />} />
                <Route path="/parcels" element={<Parcels />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
