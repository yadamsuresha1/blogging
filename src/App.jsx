import { Container, Stack } from "react-bootstrap";
import Header from "./components/Header";
import FeedPage from "./pages/Feedpage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ExplorePage from "./pages/Explorepage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      {/* <Container fluid className="App">
        <FeedPage />
      </Container> */}
    </BrowserRouter>
  );
};

export default App;
