import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import Home from "./pages/home";
import Impress from "./pages/impress";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/impress" element={<Impress />}/>
        </Routes>
    </BrowserRouter>
);

export default App;
