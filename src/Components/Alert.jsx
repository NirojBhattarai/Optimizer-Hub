import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "Error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const alertColors = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-gray-900",
    info: "bg-blue-500 text-white",
  };

  return (
    <div className="h-12 bg-slate-900 text-center flex items-center justify-center">
      {props.alert && (
        <div
          className={`w-full max-w-xl mx-auto p-2 rounded-md shadow-md text-sm font-semibold flex justify-between items-center ${
            alertColors[props.alert.type]
          }`}
          role="alert"
        >
          <span>
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </span>
          <button
            onClick={props.onClose}
            className="ml-4 text-white font-bold hover:text-gray-300"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;
