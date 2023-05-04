import React from "react";
import "../pages/Home.css";
import coverphoto from "../myComponents/img/coverphoto.webp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "bootstrap/js/dist/dropdown";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  return (
    <div className="section_home">
      <div className="section_first">
        <h1 className="header_first">Welcome to the Optimizer Hub !!</h1>
        <div className="intro_section">
          <div className="row">
            <div className="left">
              <img src={coverphoto} alt="Coverphoto" />
            </div>

            <div className="right">
              <div className="content">
                <p>
                  Welcome to Optimizer Hub - the ultimate destination for
                  website owners, marketers, and SEO professionals seeking to
                  optimize their website's performance and increase their online
                  visibility. Our powerful suite of SEO tools is designed to
                  help you identify and fix website issues, analyze and improve
                  your website's content, monitor your website's rankings and
                  traffic, and much more. With Optimizer Hub, you'll have
                  everything you need to improve your website's search engine
                  ranking and attract more organic traffic to your site. Whether
                  you're a small business owner or a seasoned SEO professional,
                  Optimizer Hub has the tools and resources you need to succeed
                  in today's competitive online marketplace. Let's optimize your
                  website and take your online presence to the next level!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maintool-container">
        <h1 className="toolcontainername">Text Analysis Tools</h1>
        <div className="tool-container">
          <p className="abouttextanalysistool">
            Text analysis tool that offers a variety of features to help you
            analyze and understand text data. It also offers a range of other
            text analysis features, including word counter, topic modeling, and
            keyword extraction. Sentiment analysis can help you determine the
            overall emotional tone of a piece of text, while topic modeling can
            help you identify the main themes or topics present in a large
            corpus of text. Keyword extraction, on the other hand, can help you
            identify the most important words or phrases in a given document,
            which can be useful for tasks like search engine optimization or
            content analysis.
          </p>
          <div className="row2">
            <div className="left2">
              <div className="cardone">
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">Word Counter</Card.Title>
                  <Link to="/Wordcounter">
                    <Button className="cardbutton" variant="primary">
                      Click to Open
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </div>
            <div className="right2">
              <div className="cardone">
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">Age Calculator</Card.Title>
                  <Link to="/Agecalculator">
                    <Button className="cardbutton" variant="primary">
                      Click to Open
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </div>
          </div>

          <div className="row2">
            <div className="left2">
              <div className="cardone">
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">Word Counter</Card.Title>
                  <Link to="/Wordcounter">
                    <Button className="cardbutton" variant="primary">
                      Click to Open
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </div>
            <div className="right2">
              <div className="cardone">
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">Age Calculator</Card.Title>
                  <Link to="/Agecalculator">
                    <Button className="cardbutton" variant="primary">
                      Click to Open
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="maintool-container">
        <h1 className="toolcontainername">Unit Converter</h1>
        <div className="tool-container">
          <p className="abouttextanalysistool">
            Unit converter tool is a versatile and easy-to-use tool that allows
            you to convert measurements between different units of length,
            temperature, time, volume, and more. Whether you need to convert
            miles to kilometers, Fahrenheit to Celsius, or hours to minutes,
            unit converter has you covered.This tool can be especially useful
            for scientists, engineers, or anyone else who needs to work with
            fundamental measurements on a regular basis. Unit converter is a
            valuable tool for anyone who needs to work with different units of
            measurement on a regular basis. With its intuitive interface and
            powerful features, it's the perfect solution for everything from
            simple unit conversions to complex calculations and analysis.
          </p>
          <div className="row2">
            <div className="left2">
              <div className="cardone">
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">
                    Length Converter
                  </Card.Title>
                  <Link to="/Lengthconverter">
                    <Button className="cardbutton" variant="primary">
                      Click to Open
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </div>
            <div className="right2">
              <div className="cardone">
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">
                    Weight Converter
                  </Card.Title>
                  <Link to="/Agecalculator">
                    <Button className="cardbutton" variant="primary">
                      Click to Open
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </div>
          </div>

          <div className="row2">
            <div className="left2">
              <div className="cardone">
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">Time Converter</Card.Title>
                  <Link to="/Wordcounter">
                    <Button className="cardbutton" variant="primary">
                      Click to Open
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </div>
            <div className="right2">
              <div className="cardone">
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">
                    <span className="longtoolname">Temperature</span> Converter
                  </Card.Title>
                  <Link to="/Unitconverter">
                    <Button className="cardbutton" variant="primary">
                      Click to Open
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
