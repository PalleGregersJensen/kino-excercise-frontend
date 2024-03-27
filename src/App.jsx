import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Cinema from "./pages/Cinema";
import Theater from "./pages/Theater";
import Home from "./pages/Home";

export default function App() {
    return (
        // <Router>
        <Layout>
            <Routes>
                <Route path="/theater" element={<Theater />} />
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/test" element={<h1>Test</h1>} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
        // </Router>
    );
}
