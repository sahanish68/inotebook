import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/forms/login-form";
import { Button } from "./components/ui/button";
import "./global.css";
export default function App(){
    return(
        <div className="App">
            {/* <LoginForm /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}