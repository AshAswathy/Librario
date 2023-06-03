import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyLibrary from "./pages/MyLibrary";
import { AppProvider } from "./Context";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLibrary />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
