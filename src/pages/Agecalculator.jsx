import React from "react";

export default function AgeCalculator(props) {
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth, birthDate, birthYear;
    let birthDetails = {
      date: inputDate.getDate(),
      month: inputDate.getMonth() + 1,
      year: inputDate.getFullYear(),
    };
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (
      birthDetails.year > currentYear ||
      (birthDetails.month > currentMonth &&
        birthDetails.year === currentYear) ||
      (birthDetails.date > currentDate &&
        birthDetails.month === currentMonth &&
        birthDetails.year === currentYear)
    ) {
      displayResult("-", "-", "-");
      return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
      birthMonth = currentMonth - birthDetails.month;
    } else {
      birthYear--;
      birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
      birthDate = currentDate - birthDetails.date;
    } else {
      birthMonth--;
      let days = months[currentMonth - 2];
      birthDate = days + currentDate - birthDetails.date;
      if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;
      }
    }
    displayResult(birthDate, birthMonth, birthYear);
  }

  function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
  }

  function leapChecker(year) {
    if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
      months[1] = 29;
    } else {
      months[1] = 28;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Calculate Your Age
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your date of birth below, and we'll tell you your exact age in
          years, months, and days!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <input
            className="w-full sm:w-2/3 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="date"
            id="date-input"
          />
          <button
            className="w-full sm:w-1/3 p-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            onClick={ageCalculate}
          >
            Calculate
          </button>
        </div>
        <div className="flex justify-between gap-4">
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span className="block text-4xl font-bold text-gray-800" id="years">
              -
            </span>
            <p className="text-gray-500">Years</p>
          </div>
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span
              className="block text-4xl font-bold text-gray-800"
              id="months"
            >
              -
            </span>
            <p className="text-gray-500">Months</p>
          </div>
          <div className="w-1/3 p-6 text-center bg-gray-200 rounded-lg shadow-md">
            <span className="block text-4xl font-bold text-gray-800" id="days">
              -
            </span>
            <p className="text-gray-500">Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
