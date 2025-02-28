import { Routes, Route } from "react-router";
import Login from "./components/LoginComponent/Login.tsx";
import Home from "./components/HomePage.tsx";
import Register from "./components/LoginComponent/Register.tsx";
import CreateArticle from "./components/ArticlesComponent/CreateArticle.tsx";



function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Register />} />
            <Route path="/CreatePost" element={<CreateArticle />} />
        </Routes>
    );
}

export default App;