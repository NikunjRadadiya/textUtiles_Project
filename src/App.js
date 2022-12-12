import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm.jsx";
import About from "./components/About";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode Disabled", "warning");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtiles"
          aboutText="About_Using_Props"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alertmsg={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                exact
                showAlert={showAlert}
                heading="Tell me about your self :"
                mode={mode}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
