import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LiveFeed from "./pages/LiveFeed";
import Recordings from "./pages/Recordings";
import Settings from "./pages/Settings";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/live-feed" element={<LiveFeed />} />
                    <Route path="/recordings" element={<Recordings />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;