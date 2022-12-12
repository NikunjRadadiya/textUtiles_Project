import React, { useState } from "react";

export default function TextForm(props) {
  // change multiple value in useState
  const [carDetail, setCarDetail] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "Red",
  });
  const carInfo = () => {
    carDetail.brand === "Ford"
      ? setCarDetail((previousDetails) => {
          return { ...previousDetails, brand: "Hundai" };
        })
      : setCarDetail((previousDetails) => {
          return { ...previousDetails, brand: "Ford" };
        });
  };

  // text change onclick js
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // text = ""
    //   ? props.showAlert("Enter Something First", "warning")
    props.showAlert("converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // text = ""
    //   ? props.showAlert("Enter Something First", "warning")
    props.showAlert("converted to LowerCase", "info");
  };

  const handleCpClick = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    // text = ""
    //   ? props.showAlert("Enter Something First", "warning")
    props.showAlert("converted to Captilize", "warning");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    // text = ""
    //   ? props.showAlert("Enter Something First", "warning")
    props.showAlert("text cleared", "danger");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let darkBg = props.mode === "dark" ? "black" : "white";
  let darkText = props.mode === "dark" ? "white" : "black";

  // let limebg = props.limeMode === "lime" ? "lime" : "white";

  let styleChangeMode = {
    color: darkText,
    backgroundColor: darkBg,
  };

  return (
    <>
      <div className={`my-3 container`} style={styleChangeMode}>
        <h2>{props.heading}</h2>
        <textarea
          className={`form-control`}
          style={styleChangeMode}
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary m-3" onClick={handleUpClick}>
          Click to Uppercase
        </button>
        <button className="btn btn-primary m-3" onClick={handleLoClick}>
          Click to Lowercase
        </button>
        <button className="btn btn-primary m-3" onClick={handleCpClick}>
          Click to Capitalize
        </button>
        <button className="btn btn-primary m-3" onClick={handleClearClick}>
          Clear
        </button>

        {/* text summary */}

        <div className="container border border-2" style={styleChangeMode}>
          <h2>Your Text Summary</h2>
          <p>
            Words : {text.split(" ").length} Latters: {text.length};
          </p>
          <p>
            Read Time:
            {0.008 * text.split(" ").length}min.
          </p>
        </div>

        {/* car change state  */}

        <div
          className="container border border-2 border-warning my-3"
          style={styleChangeMode}
        >
          <h2>
            I have {carDetail.color} {carDetail.model} of {carDetail.brand}
          </h2>
          <button className="btn btn-warning" onClick={carInfo}>
            Click to Change
          </button>
        </div>
      </div>
    </>
  );
}
