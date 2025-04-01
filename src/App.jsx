import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div
                className="App w-screen text-black min-h-screen" // Added min-h-screen to make sure the div takes full height
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1596869628264-2344d70a73ca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D)`, // A reliable image URL
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <Navbar />
                <Header bold size="2xl">
                    Devontae Chadwick
                </Header>
                <Header size="md">Software Engineer</Header>
            </div>
        </BrowserRouter>
    );
}

export default App;
