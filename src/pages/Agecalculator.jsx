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
      props.showAlert("Not Born Yet", "danger");
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
    props.showAlert("Data Calculation Successful", "success");
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
    <div className="min-h-screen flex justify-center bg-slate-900">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold text-center text-green-500 mb-4">
          Enter your Date of Birth:
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Enter your date of birth in the field below to calculate your age.
          This tool will provide your actual age in years, months, and days.
        </p>
        <div className="mb-8">
          <input
            className="w-3/5 p-3 text-lg border-2 border-gray-300 rounded-lg mb-4"
            type="date"
            id="date-input"
          />
          <button
            className="w-2/5 p-3 bg-green-500 text-white text-lg font-bold rounded-lg hover:bg-green-600"
            onClick={ageCalculate}
          >
            Calculate
          </button>
        </div>
        <div className="flex justify-between">
          <div className="w-1/3 p-6 text-center bg-gray-800 rounded-lg shadow-md">
            <span className="block text-4xl text-white" id="years">
              -
            </span>
            <p className="text-gray-400">Years</p>
          </div>
          <div className="w-1/3 p-6 text-center bg-gray-800 rounded-lg shadow-md">
            <span className="block text-4xl text-white" id="months">
              -
            </span>
            <p className="text-gray-400">Months</p>
          </div>
          <div className="w-1/3 p-6 text-center bg-gray-800 rounded-lg shadow-md">
            <span className="block text-4xl text-white" id="days">
              -
            </span>
            <p className="text-gray-400">Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
