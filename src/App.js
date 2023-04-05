import "./App.css";
import AlertMessage from "./components/AlertMessage";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
// } from "react-router-dom";
function App() {
  //wether dark mode is enabled or not
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
  let toggleMode = () => {
    if (
      mode === "light" ||
      mode === "primary" ||
      mode === "danger" ||
      mode === "success"
    ) {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };

  let blueTheme = () => {
    document.body.style.backgroundColor = "blue";
    // document.body.style.color = "white";
    setMode("primary");
  };
  let redTheme = () => {
    document.body.style.backgroundColor = "red";
    // document.body.style.color = "white";
    setMode("danger");
  };
  let greenTheme = () => {
    document.body.style.backgroundColor = "green";
    // document.body.style.color = "white";
    setMode("success");
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          id="navi"
          title="Word Counter"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          blueTheme={blueTheme}
          redTheme={redTheme}
          greenTheme={greenTheme}
        />
        <AlertMessage alert={alert} mode={mode} />
        {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}></Route> */}
          {/* <Route path="/" element={ */}
          <TextForm
              heading="Enter the text to analyse"
              mode={mode}
              showAlert={showAlert}
              setAlert={setAlert}
              blueTheme={blueTheme}
              redTheme={redTheme}
              greenTheme={greenTheme}
            />
            {/* }></Route> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
