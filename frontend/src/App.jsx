import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/forms/login-form";
import { Button } from "./components/ui/button";
import "./global.css";
import Home from "./pages/home";
export default function App(){
    return(
        <div className="App">
            {/* <LoginForm /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}