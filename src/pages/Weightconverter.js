import React from "react";
import "./Weightconverter.css";

export default function Weightconverter() {
  let inputData;
  let dataType;
  let gram, kilogram, pound, ounce, miligram, ton;
  
  function unitConvert() {
    getData();
    checkUnit();
    displayResult(gram, kilogram, pound, ounce, miligram, ton);
  }
  
  function getData() {
    inputData = document.getElementById("data-input").value;
    dataType = document.getElementById("data-type").value;
  }

  function checkUnit() {
    if (dataType === "gram") {
      gram = inputData;
      kilogram = (inputData/1000).toFixed(2);
      pound = (inputData * 0.00220462262).toFixed(2);
      ounce = (inputData * 0.0352739619).toFixed(2);
      miligram = (inputData *1000).toFixed(2);
      ton = (inputData / 1000000).toFixed(2);
    } 
    else if (dataType === "kilogram") {
      gram = (inputData*1000).toFixed(2);
      kilogram = inputData
      pound = (inputData * 2.20462262).toFixed(2);
      ounce = (inputData * 35.2739619).toFixed(2);
      miligram = (inputData * 1000000).toFixed(2);
      ton = (inputData *0.001).toFixed(2);
    } 
    else if (dataType === "pound") {
      gram = (inputData*453.59237).toFixed(2);
      kilogram = (inputData*0.45359237).toFixed(2);
      pound = inputData ;
      ounce = (inputData * 16).toFixed(2);
      miligram = (inputData * 453592.37).toFixed(2);
      ton = (inputData *0.00045359237).toFixed(2);
    } else if (dataType === "ounce") {
      gram = (inputData*28.3495231).toFixed(2);
      kilogram = (inputData*0.0283495231).toFixed(2);
      pound = (inputData * 0.0625).toFixed(2);
      ounce = inputData;
      miligram = (inputData * 28349.5231).toFixed(2);
      ton = (inputData / 35273.9619).toFixed(2);
    } else if (dataType === "miligram") {
      gram = (inputData*0.001).toFixed(2);
      kilogram = (inputData/1000000).toFixed(2);
      pound = (inputData / 453592.37).toFixed(2);
      ounce = (inputData / 28349.5231).toFixed(2);
      miligram = inputData;
      ton = (inputData / 1000000000).toFixed(2);
    } else if (dataType === "ton") {
      gram = (inputData*1000000).toFixed(2);
      kilogram = (inputData*1000).toFixed(2);
      pound = (inputData * 2204.62262).toFixed(2);
      ounce = (inputData * 35273.9619).toFixed(2);
      miligram = (inputData * 1000000000).toFixed(2);
      ton = inputData;
    } else {
      alert("Something Error");
    }
  }

  function displayResult(gm, kg, lb, oun, mg, tn) {
    document.getElementById("grams").textContent = gm;
    document.getElementById("kilograms").textContent = kg;
    document.getElementById("pounds").textContent = lb;
    document.getElementById("ounces").textContent = oun;
    document.getElementById("miligrams").textContent = mg;
    document.getElementById("tons").textContent = tn;
  }

  return (
    <div className="main-containerunit">
      <div className="unit-container">
        <h2 className="unit-title">Enter your data for Weight Conversion:</h2>
        <p className="about-unitconverter">
          Enter your data in given field and select the unit inorder to convert
          it to desired unit. This tool will help for accurate coversion of data
          units.
        </p>
        <div className="inputs-wrapperunit">
          <input className="data-input" type="number" id="data-input" placeholder="Enter data here" />
          <select
            name="data"
            id="data-type"
            className="unit-option"
            onChange={getData}
          >
            <option id="unit" value="gram">
              Gram
            </option>
            <option id="unit" value="kilogram">
              Kilogram
            </option>
            <option id="unit" value="pound">
              Pound
            </option>
            <option id="unit" value="ounce">
              Ounce
            </option>
            <option id="unit" value="miligram">
              Miligram
            </option>
            <option id="unit" value="ton">
              Ton
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
            <span className="outputbox" id="grams">
              -
            </span>
            <p className="countunit">Grams</p>
          </div>
          <div>
            <span className="outputbox" id="kilograms">
              -
            </span>
            <p className="countunit">Kilograms</p>
          </div>
          <div>
            <span className="outputbox" id="pounds">
              -
            </span>
            <p className="countunit">Pounds</p>
          </div>
        </div>
        <div className="outputs-wrapperunit2">
          <div>
            <span className="outputbox" id="ounces">
              -
            </span>
            <p className="countunit">Ounces</p>
          </div>
          <div>
            <span className="outputbox" id="miligrams">
              -
            </span>
            <p className="countunit">Miligrams</p>
          </div>
          <div>
            <span className="outputbox" id="tons">
              -
            </span>
            <p className="countunit">Tons</p>
          </div>
        </div>
      </div>
    </div>
  );
}
