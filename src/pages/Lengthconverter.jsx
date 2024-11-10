import React from "react";

export default function Lengthconverter(props) {
  let inputData;
  let dataType;
  let meter, centimeter, foot, inch, yard, kilometer;

  function unitConvert() {
    getData();
    checkUnit();
    displayResult(meter, centimeter, foot, inch, yard, kilometer);
    props.showAlert("Data Conversion Successful", "success");
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
    } else {
      props.showAlert("Something went wrong. Try again", "danger");
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
    <div className="min-h-screen flex justify-center bg-slate-900">
      <div className="w-full sm:w-1/2 p-10 bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-green-500 font-bold text-2xl mb-4">
          Enter your data for Length Conversion:
        </h2>
        <p className="text-white text-lg text-justify mb-6">
          Enter your data in the given field and select the unit in order to
          convert it to the desired unit. This tool will help for accurate
          conversion of data units.
        </p>

        <div className="space-y-6 text-center">
          <input
            className="w-1/3 h-12 px-4 text-xl rounded-lg border-2 border-gray-400"
            type="number"
            id="data-input"
            placeholder="Enter data here"
          />
          <select
            id="data-type"
            className="w-1/3 h-12 text-xl rounded-lg border-2 border-gray-400"
            onChange={getData}
          >
            <option value="centimeter">Centimeter</option>
            <option value="meter">Meter</option>
            <option value="inch">Inch</option>
            <option value="foot">Foot</option>
            <option value="yard">Yard</option>
            <option value="kilometer">Kilometer</option>
          </select>

          <button
            className="w-1/3 h-12 bg-green-500 text-white font-bold text-xl rounded-lg"
            onClick={unitConvert}
          >
            Calculate
          </button>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="bg-slate-700 text-white p-6 rounded-lg shadow-xl">
            <span id="meters" className="text-2xl font-bold">
              -
            </span>
            <p className="text-lg">Meters</p>
          </div>
          <div className="bg-slate-700 text-white p-6 rounded-lg shadow-xl">
            <span id="centimeters" className="text-2xl font-bold">
              -
            </span>
            <p className="text-lg">Centimeters</p>
          </div>
          <div className="bg-slate-700 text-white p-6 rounded-lg shadow-xl">
            <span id="foots" className="text-2xl font-bold">
              -
            </span>
            <p className="text-lg">Foots</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-6">
          <div className="bg-slate-700 text-white p-6 rounded-lg shadow-xl">
            <span id="inches" className="text-2xl font-bold">
              -
            </span>
            <p className="text-lg">Inches</p>
          </div>
          <div className="bg-slate-700 text-white p-6 rounded-lg shadow-xl">
            <span id="yards" className="text-2xl font-bold">
              -
            </span>
            <p className="text-lg">Yards</p>
          </div>
          <div className="bg-slate-700 text-white p-6 rounded-lg shadow-xl">
            <span id="kilometers" className="text-2xl font-bold">
              -
            </span>
            <p className="text-lg">Kilometers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
