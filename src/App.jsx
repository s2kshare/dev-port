import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    return (
        <BrowserRouter>
            <div
                className="App w-screen bg-base-0 text-black min-h-screen" // Added min-h-screen to make sure the div takes full height
                style={
                    {
                        // backgroundImage: `url(https://images.unsplash.com/photo-1596869628264-2344d70a73ca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D)`, // A reliable image URL
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        // backgroundAttachment: "fixed",
                    }
                }
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
