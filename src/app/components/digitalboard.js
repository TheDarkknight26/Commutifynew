

'use client';
import React, { useEffect, useState } from 'react';
import "../../../public/css/styles.css"
import "../../../public/css/bootstrap.css";
import "../../../public/css/main.css";
import "../../../public/css/util.css";
import "../../../public/css/magnific-popup.css";
import "../../../public/css/platform.css";
import "../../../public/css/fontawesome-all.css";
import { Helmet } from 'react-helmet';
import { Link } from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';


const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '10px',
  width: '300px',
};


const DigitalBoardForm = () => {



  const router = useRouter();

  const dispatch = useDispatch()

  const [routeid, setRouteid] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [formData, setFormData] = useState({
    route: '',
    station: '',
  });


  const [listOfDetailsStation, setlistOfDetailsStation] = useState([])
  const [listofDtailsofRoute, setListOfDetailsRoute] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const populateStations = (selectedRoute) => {
    const selectedSequence = sequence.find(
      (route) => route.route_no === parseInt(selectedRoute)
    );

    if (selectedSequence) {
      setStations(selectedSequence.stop_sequence.map((stop) => stop[1]));
    }
  };

  useEffect(() => {

    axios.get(`http://10.61.36.237:8080/listOfAllStops/?name=${inputValue}`).then((res) => {
      console.log(res.data.data)
      setlistOfDetailsStation(res.data.data)
      // setlistOfDetailsStation(re)
    }).catch((err) => {
      console.log(err)
    })

    ///routeList

    axios.get(`http://10.61.36.237:8080/routeList`).then((res) => {
      console.log(res.data.data.routes)
      setListOfDetailsRoute(res.data.data.routes)

    }).catch((err) => {
      console.log(err)
    })

  }, [])


  const destinationFunction = (e) => {
    setInputValue(e.target.value)


  }

  const data = {
    route: routeid,
    station: inputValue
  }


  const submitFrom = () => {
    // dispatch(addDetails(data))


    router.push(
      '/digital', data
    );
  }



  let result = {
    route: routeid,
    station: inputValue
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    <Link
      href={{
        pathname: '/digital',
        query: formData,
      }}
    >
      <a>Go to Final Page New</a>
    </Link>

  };

  return (
    <>
      <div id="digitalBoard" className="form-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <div className="section-title">DIGITAL BOARD</div>
                <h2 className="white">How much occupied will the next bus be?</h2>
                <p className="white">The Digital Board available at each platform of metro/ bus stations providing current occupancy and predicted occupancy at the current station of all upcoming vehicles in next 24 hours. It takes following inputs</p>
                <ul className="list-unstyled li-space-lg white">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Route Name</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Station Name</div>
                  </li>
                </ul>
                <p className="white">After one time installation of the board, feeding station number and date, the system will fetch information from our crowding API. The existing digital board systems are easily pluggable with the new information, given the authorization.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <form action='/digital'>
                <div className="form-group">
                  <input
                    className="form-control-input"
                    type="text"
                    id="myInput"
                    name='route'
                    onChange={handleChange}
                    // style={inputStyle}
                    placeholder="Enter the route number"
                  />

                </div>
                <div className="form-group">
                  <select
                    id="station"

                    className="form-control-input"
                    name="station"
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled selected>Select your station</option>

                    {
                      listOfDetailsStation?.map((data) => {
                        return (
                          <>
                            <option value={data['Stop name']}>{data['Stop name']}</option>
                          </>
                        )
                      })

                    }


                  </select>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button"

                  // onClick={() => {
                  //   submitFrom()
                  // }}
                  >
                    GET CROWDING STATUS
                  </button>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-message">
                  <div id="lmsgSubmit" className="h3 text-center hidden"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );

};

export default DigitalBoardForm;