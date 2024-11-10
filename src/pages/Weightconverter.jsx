import React from "react";

export default function Weightconverter(props) {
  let inputData;
  let dataType;
  let gram, kilogram, pound, ounce, miligram, ton;

  function unitConvert() {
    getData();
    checkUnit();
    displayResult(gram, kilogram, pound, ounce, miligram, ton);
    props.showAlert("Data Conversion Successful", "success");
  }

  function getData() {
    inputData = document.getElementById("data-input").value;
    dataType = document.getElementById("data-type").value;
  }

  function checkUnit() {
    if (dataType === "gram") {
      gram = inputData;
      kilogram = (inputData / 1000).toFixed(2);
      pound = (inputData * 0.00220462262).toFixed(2);
      ounce = (inputData * 0.0352739619).toFixed(2);
      miligram = (inputData * 1000).toFixed(2);
      ton = (inputData / 1000000).toFixed(2);
    } else if (dataType === "kilogram") {
      gram = (inputData * 1000).toFixed(2);
      kilogram = inputData;
      pound = (inputData * 2.20462262).toFixed(2);
      ounce = (inputData * 35.2739619).toFixed(2);
      miligram = (inputData * 1000000).toFixed(2);
      ton = (inputData * 0.001).toFixed(2);
    } else if (dataType === "pound") {
      gram = (inputData * 453.59237).toFixed(2);
      kilogram = (inputData * 0.45359237).toFixed(2);
      pound = inputData;
      ounce = (inputData * 16).toFixed(2);
      miligram = (inputData * 453592.37).toFixed(2);
      ton = (inputData * 0.00045359237).toFixed(2);
    } else if (dataType === "ounce") {
      gram = (inputData * 28.3495231).toFixed(2);
      kilogram = (inputData * 0.0283495231).toFixed(2);
      pound = (inputData * 0.0625).toFixed(2);
      ounce = inputData;
      miligram = (inputData * 28349.5231).toFixed(2);
      ton = (inputData / 35273.9619).toFixed(2);
    } else if (dataType === "miligram") {
      gram = (inputData * 0.001).toFixed(2);
      kilogram = (inputData / 1000000).toFixed(2);
      pound = (inputData / 453592.37).toFixed(2);
      ounce = (inputData / 28349.5231).toFixed(2);
      miligram = inputData;
      ton = (inputData / 1000000000).toFixed(2);
    } else if (dataType === "ton") {
      gram = (inputData * 1000000).toFixed(2);
      kilogram = (inputData * 1000).toFixed(2);
      pound = (inputData * 2204.62262).toFixed(2);
      ounce = (inputData * 35273.9619).toFixed(2);
      miligram = (inputData * 1000000000).toFixed(2);
      ton = inputData;
    } else {
      props.showAlert("Something goes wrong. Try again", "danger");
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
    <div className="min-h-screen flex justify-center bg-slate-900">
      <div className="w-1/2 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-green-500 text-center mb-4">
          Enter your data for Weight Conversion:
        </h2>
        <p className="text-white text-lg text-justify mb-6">
          Enter your data in the given field and select the unit in order to
          convert it to the desired unit. This tool will help for accurate
          conversion of data units.
        </p>
        <div className="text-center bg-gray-700 p-6 rounded-lg shadow-lg mb-12">
          <input
            className="w-1/3 p-2 text-lg font-semibold text-black rounded-lg mb-4"
            type="number"
            id="data-input"
            placeholder="Enter data here"
          />
          <select
            name="data"
            id="data-type"
            className="w-1/3 p-2 text-lg font-semibold text-black rounded-lg mb-4"
            onChange={getData}
          >
            <option value="gram">Gram</option>
            <option value="kilogram">Kilogram</option>
            <option value="pound">Pound</option>
            <option value="ounce">Ounce</option>
            <option value="miligram">Miligram</option>
            <option value="ton">Ton</option>
          </select>
          <button
            className="w-1/3 p-3 bg-green-500 text-white font-bold rounded-lg"
            onClick={unitConvert}
          >
            Calculate
          </button>
        </div>
        <div className="flex justify-between mb-6">
          <div className="w-1/5 p-4 bg-gray-700 text-white rounded-lg shadow-lg text-center">
            <span id="grams" className="text-xl font-semibold">
              -
            </span>
            <p>Grams</p>
          </div>
          <div className="w-1/5 p-4 bg-gray-700 text-white rounded-lg shadow-lg text-center">
            <span id="kilograms" className="text-xl font-semibold">
              -
            </span>
            <p>Kilograms</p>
          </div>
          <div className="w-1/5 p-4 bg-gray-700 text-white rounded-lg shadow-lg text-center">
            <span id="pounds" className="text-xl font-semibold">
              -
            </span>
            <p>Pounds</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/5 p-4 bg-gray-700 text-white rounded-lg shadow-lg text-center">
            <span id="ounces" className="text-xl font-semibold">
              -
            </span>
            <p>Ounces</p>
          </div>
          <div className="w-1/5 p-4 bg-gray-700 text-white rounded-lg shadow-lg text-center">
            <span id="miligrams" className="text-xl font-semibold">
              -
            </span>
            <p>Miligrams</p>
          </div>
          <div className="w-1/5 p-4 bg-gray-700 text-white rounded-lg shadow-lg text-center">
            <span id="tons" className="text-xl font-semibold">
              -
            </span>
            <p>Tons</p>
          </div>
        </div>
      </div>
    </div>
  );
}
