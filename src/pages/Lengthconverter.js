import React from "react";
import "./Lengthconverter.css";

export default function Lengthconverter() {
  let inputData;
  let dataType;
  let meter, centimeter, foot, inch, yard, kilometer;
  
  function unitConvert() {
    getData();
    checkUnit();
    displayResult(meter, centimeter, foot, inch, yard, kilometer);
  }
  
  function getData() {
    inputData = document.getElementById("data-input").value;
    dataType = document.getElementById("data-type").value;
  }

  function checkUnit() {
    if (dataType === "meter") {
      meter = inputData;
      centimeter = (inputData*100).toFixed(2);
      foot = (inputData * 3.281).toFixed(2);
      inch = (inputData * 39.37).toFixed(2);
      yard = (inputData * 1.094).toFixed(2);
      kilometer = (inputData / 1000).toFixed(2);
    } 
    else if (dataType === "centimeter") {
      meter = (inputData / 100).toFixed(2);
      centimeter = inputData;
      foot = (inputData / 30.48).toFixed(2);
      inch = (inputData / 2.54).toFixed(2);
      yard = (inputData / 91.44).toFixed(2);
      kilometer = (inputData / 100000).toFixed(2);
    } 
    else if (dataType === "foot") {
      meter = (inputData * 0.3048).toFixed(2);
      centimeter = (inputData * 30.48).toFixed(2);
      foot = inputData;
      inch = (inputData * 12).toFixed(2);
      yard = (inputData * 0.3333333).toFixed(2);
      kilometer = (inputData * 0.0003048).toFixed(2);
    } else if (dataType === "inch") {
      meter = (inputData * 0.0254).toFixed(2);
      centimeter = (inputData * 2.54).toFixed(2);
      foot = (inputData * 0.0833).toFixed(2);
      inch = inputData ; 
      yard = (inputData * 0.027777778).toFixed(2);
      kilometer = (inputData *0.0000254).toFixed(2);
    } else if (dataType === "yard") {
      meter = (inputData * 0.9144).toFixed(2);
      centimeter = (inputData * 91.44).toFixed(2);
      foot = (inputData * 3).toFixed(2);
      inch = (inputData * 36).toFixed(2);
      yard = inputData;
      kilometer = (inputData * 0.0009144).toFixed(2);
    } else if (dataType === "kilometer") {
      meter = (inputData * 1000).toFixed(2);
      centimeter = (inputData * 100000).toFixed(2);
      foot = (inputData * 3280.8339).toFixed(2);
      inch = (inputData * 39370.0787).toFixed(2);
      yard = (inputData * 1093.6133).toFixed(2);
      kilometer = inputData;
    } else {
      alert("Something Error");
    }
  }

  function displayResult(meter, cm, ft, inc, yd, km) {
    document.getElementById("meters").textContent = meter;
    document.getElementById("centimeters").textContent = cm;
    document.getElementById("foots").textContent = ft;
    document.getElementById("inches").textContent = inc;
    document.getElementById("yards").textContent = yd;
    document.getElementById("kilometers").textContent = km;
  }

  return (
    <div className="main-containerunit">
      <div className="unit-container">
        <h2 className="unit-title">Enter your data for Length Conversion :</h2>
        <p className="about-unitconverter">
          Enter your data in given field and select the unit inorder to convert
          it to desired unit. This tool will help for accurate coversion of data
          units.
        </p>
        <div className="inputs-wrapperunit">
          <input className="data-input" type="number" id="data-input" />
          <select
            name="cars"
            id="data-type"
            className="unit-option"
            onChange={getData}
          >
            <option id="unit" value="centimeter">
              Centimeter
            </option>
            <option id="unit" value="meter">
              Meter
            </option>
            <option id="unit" value="inch">
              Inch
            </option>
            <option id="unit" value="foot">
              Foot
            </option>
            <option id="unit" value="yard">
              Yard
            </option>
            <option id="unit" value="kilometer">
              Kilometer
            </option>
          </select>

          <button
            className=" btn-success unit-button"
            onClick={unitConvert}
            onChange={getData}
          >
            Calculate
          </button>
        </div>
        <div className="outputs-wrapperunit">
          <div>
            <span className="outputbox" id="meters">
              -
            </span>
            <p className="countunit">Meters</p>
          </div>
          <div>
            <span className="outputbox" id="centimeters">
              -
            </span>
            <p className="countunit">Centimeters</p>
          </div>
          <div>
            <span className="outputbox" id="foots">
              -
            </span>
            <p className="countunit">Foots</p>
          </div>
        </div>
        <div className="outputs-wrapperunit2">
          <div>
            <span className="outputbox" id="inches">
              -
            </span>
            <p className="countunit">Inches</p>
          </div>
          <div>
            <span className="outputbox" id="yards">
              -
            </span>
            <p className="countunit">Yards</p>
          </div>
          <div>
            <span className="outputbox" id="kilometers">
              -
            </span>
            <p className="countunit">Kilometers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
