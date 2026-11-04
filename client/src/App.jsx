import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import UseGetCurrentUser from "./Hooks/UseGetCurrentUser.jsx";
import { useSelector } from "react-redux";
import DashboardPage from "./pages/DashboardPage.jsx";
import GeneratePage from "./pages/GeneratePage.jsx";
import EditorPage from "./pages/EditorPage.jsx";
export const serverUrl = "http://localhost:4000";

const App = () => {
  const { userData } = useSelector((state) => state.user);
  UseGetCurrentUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={userData ? <DashboardPage /> : <HomePage />}
        />
        <Route
          path="/generate"
          element={userData ? <GeneratePage /> : <HomePage />}
        />
        <Route
          path="/generate"
          element={userData ? <GeneratePage /> : <HomePage />}
        />
        <Route
          path="/editor/:id"
          element={userData ? <EditorPage /> : <HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
