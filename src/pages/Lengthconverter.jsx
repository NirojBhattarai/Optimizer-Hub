import React from "react";

export default function Lengthconverter(props) {
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
      centimeter = (inputData * 100).toFixed(2);
      foot = (inputData * 3.281).toFixed(2);
      inch = (inputData * 39.37).toFixed(2);
      yard = (inputData * 1.094).toFixed(2);
      kilometer = (inputData / 1000).toFixed(2);
    } else if (dataType === "centimeter") {
      meter = (inputData / 100).toFixed(2);
      centimeter = inputData;
      foot = (inputData / 30.48).toFixed(2);
      inch = (inputData / 2.54).toFixed(2);
      yard = (inputData / 91.44).toFixed(2);
      kilometer = (inputData / 100000).toFixed(2);
    } else if (dataType === "foot") {
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
      inch = inputData;
      yard = (inputData * 0.027777778).toFixed(2);
      kilometer = (inputData * 0.0000254).toFixed(2);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Enter your data for Length Conversion:
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your data in the given field and select the unit to convert it
          to the desired unit. This tool will help you with accurate data unit
          conversion.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <input
            className="w-full sm:w-2/3 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="number"
            id="data-input"
            placeholder="Enter data here"
          />
          <select
            id="data-type"
            className="w-full sm:w-1/3 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={getData}
          >
            <option value="centimeter">Centimeter</option>
            <option value="meter">Meter</option>
            <option value="inch">Inch</option>
            <option value="foot">Foot</option>
            <option value="yard">Yard</option>
            <option value="kilometer">Kilometer</option>
          </select>
        </div>

        <div className="text-center">
          <button
            className="w-full p-3 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-600 transition-colors"
            onClick={unitConvert}
          >
            Calculate
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <span
              id="meters"
              className="block text-2xl font-bold text-gray-800"
            >
              -
            </span>
            <p className="text-gray-500">Meters</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <span
              id="centimeters"
              className="block text-2xl font-bold text-gray-800"
            >
              -
            </span>
            <p className="text-gray-500">Centimeters</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <span id="foots" className="block text-2xl font-bold text-gray-800">
              -
            </span>
            <p className="text-gray-500">Feet</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <span
              id="inches"
              className="block text-2xl font-bold text-gray-800"
            >
              -
            </span>
            <p className="text-gray-500">Inches</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <span id="yards" className="block text-2xl font-bold text-gray-800">
              -
            </span>
            <p className="text-gray-500">Yards</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <span
              id="kilometers"
              className="block text-2xl font-bold text-gray-800"
            >
              -
            </span>
            <p className="text-gray-500">Kilometers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
