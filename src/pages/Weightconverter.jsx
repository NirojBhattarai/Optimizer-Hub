import React from "react";

export default function Weightconverter(props) {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Enter your data for Weight Conversion
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your data in the field below, select the unit, and convert it to
          the desired unit for an accurate measurement.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <input
            className="w-full sm:w-2/3 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="number"
            id="data-input"
            placeholder="Enter data here"
          />
          <select
            name="data"
            id="data-type"
            className="w-full sm:w-1/3 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={getData}
          >
            <option value="gram">Gram</option>
            <option value="kilogram">Kilogram</option>
            <option value="pound">Pound</option>
            <option value="ounce">Ounce</option>
            <option value="miligram">Milligram</option>
            <option value="ton">Ton</option>
          </select>
          <button
            className="w-full sm:w-1/3 p-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            onClick={unitConvert}
          >
            Calculate
          </button>
        </div>
        <div className="flex justify-between gap-4">
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span className="block text-4xl font-bold text-gray-800" id="grams">
              -
            </span>
            <p className="text-gray-500">Grams</p>
          </div>
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span
              className="block text-4xl font-bold text-gray-800"
              id="kilograms"
            >
              -
            </span>
            <p className="text-gray-500">Kilograms</p>
          </div>
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span
              className="block text-4xl font-bold text-gray-800"
              id="pounds"
            >
              -
            </span>
            <p className="text-gray-500">Pounds</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span
              className="block text-4xl font-bold text-gray-800"
              id="ounces"
            >
              -
            </span>
            <p className="text-gray-500">Ounces</p>
          </div>
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span
              className="block text-4xl font-bold text-gray-800"
              id="miligrams"
            >
              -
            </span>
            <p className="text-gray-500">Milligrams</p>
          </div>
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span className="block text-4xl font-bold text-gray-800" id="tons">
              -
            </span>
            <p className="text-gray-500">Tons</p>
          </div>
        </div>
      </div>
    </div>
  );
}
