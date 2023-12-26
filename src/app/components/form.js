

'use client';
import "../../../public/css/styles.css"
import "../../../public/css/bootstrap.css";
import "../../../public/css/main.css";
import "../../../public/css/util.css";
import "../../../public/css/magnific-popup.css";
import "../../../public/css/platform.css";
import "../../../public/css/fontawesome-all.css";
import React from 'react';
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import { Link } from 'next/link';
import { useState } from "react";

const ApiRequestForm = () => {
  const [formData, setFormData] = useState({
    originId: '',
    destinationId: '',
    depTime: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return (
      <Link
        href={{
          pathname: '/finalpage',
          query: formData,
        }}
      >
        <a>Go to Final Page</a>
      </Link>
    );
  };
  return (
    <>
      <div id="apiRequest" className="form-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title">CROWDING API</div>
                <h2>GET request to know transit crowding on your route.</h2>
                <p>Crowding API is developed to present results of occupancy of public transits in future trips along with the stations to board and alight on with time and route information. It also provides metadata such as transit agency and popular route names. It takes 3 parameters as input-</p>
                <ul className="list-unstyled li-space-lg">
                  <li className="address"><i className="fas fa-square"></i>Origin Place Id (Eg. - NT_r7S30BX2BShcxnDS.AVfED)</li>
                  <li className="address"><i className="fas fa-square"></i>Destination Place Id (Eg. - NT_D-vyu7jQQcFLqJbVVCyxxD)</li>
                  <li className="address"><i className="fas fa-square"></i>Departure Time (Please select a time in between 1 month ago from now and 2 weeks ahead of now)</li>
                </ul>
                <p>Unique place Id is given to every landmark of CRUT and those place Ids are taken as input for the crowding API. The output of the API is a json object which gives 6 alternatives for any origin destination pair and provides information about each alternative related to ‘arrival’, ‘transport mode’, ‘departure’, ‘transport’, ‘sequence of stops’.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <form target="_blank" action="/finalpage">
                <div className="form-group">
                  <input type="text"
                    name="originId"
                    value={formData.originId}
                    onChange={handleChange}
                    className="form-control-input"
                    id="cname"
                    required />
                  <label className="label-control" htmlFor="cname">Origin Place Id</label>

                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input type="text"
                    name="destinationId"
                    value={formData.destinationId}
                    onChange={handleChange}
                    className="form-control-input"
                    id="cphone"
                    required />
                  <label className="label-control" htmlFor="cphone">Destination Place Id</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input type="datetime-local"
                    step="1"
                    name="depTime"
                    value={formData.depTime}
                    onChange={handleChange}
                    className="form-control-input"
                    id="cemail"
                    required />
                  <label className="label-control" htmlFor="cemail">Departure Time</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <button type="submit" value="submit" className="form-control-submit-button">GET REQUEST</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <Helmet>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.easing.min.js"></script>
        <script src="/js/swiper.min.js"></script>
        <script src="/js/jquery.magnific-popup.js"></script>
        <script src="/js/morphext.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/validator.min.js"></script>
        <script src="/js/scripts.js"></script>
        {/* Bootstrap 5 script */}
      {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossorigin="anonymous"
        ></script> */}
      {/* </Helmet> */}
    </>
  );
};

export default ApiRequestForm;
