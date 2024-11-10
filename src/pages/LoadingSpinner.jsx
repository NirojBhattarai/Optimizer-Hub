import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-20">
      <div className="w-10 h-10 border-4 border-t-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
    </div>
  );
}
