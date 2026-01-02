import { Container, Stack } from "react-bootstrap";
import Header from "./components/Header";
import FeedPage from "./pages/Feedpage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ExplorePage from "./pages/Explorepage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import ApiProvider from "./contexts/ApiProvider";
import RegistrationPage from "./pages/RegistrationPage";
import FlashProvider from "./contexts/FlashProvider";
import UserProvider from "./contexts/UserProvider";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <FlashProvider>
        <ApiProvider>
          <UserProvider>
            <Header />

            <Routes>
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PrivateRoute>
                    <Routes>
                      <Route path="/" element={<FeedPage />} />
                      <Route path="/explore" element={<ExplorePage />} />
                      <Route path="/user/:username" element={<UserPage />} />
                      <Route path="/*" element={<Navigate to={"/"} />} />
                    </Routes>
                  </PrivateRoute>
                }
              ></Route>
            </Routes>
            {/* <Container fluid className="App">
        <FeedPage />
      </Container> */}
          </UserProvider>
        </ApiProvider>
      </FlashProvider>
    </BrowserRouter>
  );
};

export default App;
