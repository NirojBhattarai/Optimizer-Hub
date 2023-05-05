import React from "react";
import "./Agecalculator.css";

export default function Wordcounter(props) {
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
      props.showAlert("Not Born Yet",'danger');
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
    props.showAlert("Data Calculation Successful",'success');
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
    <div className="main-containerage">
      <div className="calc-container">
      <h2 className="calc-title">Enter your Date of Birth :</h2>
      <p className="about-agecalculator">Enter your date birth in given field inorder to calculate your age. This tool will provide your actual age with year, month and day data.</p>
        <div className="inputs-wrapper">
          <input className="date-input" type="date" id="date-input" />
          <button className=" btn-success calc-button" onClick={ageCalculate}>
            Calculate
          </button>
        </div>
        <div className="outputs-wrapper">
          <div>
            <span className="outputbox" id="years">
              -
            </span>
            <p className="countunit">Years</p>
          </div>
          <div>
            <span className="outputbox" id="months">
              -
            </span>
            <p className="countunit">Months</p>
          </div>
          <div>
            <span className="outputbox" id="days">
              -
            </span>
            <p className="countunit">Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
