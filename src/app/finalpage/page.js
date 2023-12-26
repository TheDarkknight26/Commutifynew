// FinalPage.js
'use client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './result.module.css';
import Spinner from '../Spinner/Spinner';
import cogoToast from 'cogo-toast';
import { useRouter } from 'next/navigation';

// import '../../../public/'

import "../../../public/css/styles.css";
import "../../../public/css/bootstrap.css";
import "../../../public/css/main.css";
import "../../../public/css/util.css";
import "../../../public/css/magnific-popup.css";
import "../../../public/css/platform.css";
import "../../../public//css/fontawesome-all.css";
const FinalPage = () => {
  const router = useRouter()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams()
  const originId = searchParams.get('originId');
  const destinationId = searchParams.get('destinationId');
  const depTime = searchParams.get('depTime');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://10.61.36.237:8080/api', {
          params: {
            originId,
            destinationId,
            depTime,
          },
        });

        const filteredRoutes = response.data.routes.filter(
          (route) => route.transitTravelTime !== null && route.transitTravelTime > 0
        );

        // Update data with the filtered routes
        setData({ ...response.data, routes: filteredRoutes });
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setTimeout(() => {
          cogoToast.warn('enter the valid details');

          router.push("/")
          console.error('Error fetching data:', error);
        }, 2000);


      }
    };

    fetchData();
  }, [originId, destinationId, depTime]);



  return (

    <div className={styles.main}>
      {loading ? (

        <Spinner />
      ) : (
        <div>
          {data && data.routes.length > 0 ? (
            <>

              <div>
                <nav className="navbar navbar-expand-md navbar-dark navbar-custom" style={{ background: "black" }}>
                  <a className="navbar-brand logo-image" href="/">
                    <img src="images/logo1.jpg" alt="alternative" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-awesome fas fa-bars"></span>
                    <span className="navbar-toggler-awesome fas fa-times"></span>
                  </button>
                  <div className="navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link page-scroll" href="#header" style={{ color: "white" }}>
                          HOME<span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link page-scroll" href="#intro" style={{ color: "white" }}>
                          INTRO
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link page-scroll" href="#services" style={{ color: "white" }}>
                          PRODUCTS
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link page-scroll" href="#apiRequest" style={{ color: "white" }}>
                          API REQUEST
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link page-scroll" href="#digitalBoard" style={{ color: "white" }}>
                          DIGITAL BOARD
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link page-scroll" href="#highlights" style={{ color: "white" }}>
                          HIGHLIGHTS
                        </a>
                      </li>
                    </ul>

                  </div>
                </nav>
              </div>
              <h2 className={styles.normal}>Route Information</h2>
              <div className={styles.tableContainer} style={{ width: "100%" }}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Route ID</th>
                      <th>Crowding Index</th>
                      <th>Transit Travel Time (min)</th>
                      <th>Total Travel Time (min)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.routes.map((route) => (
                      <tr key={route.id}>
                        <td>{route.id}</td>
                        <td>{route.crowdingIndex}</td>
                        <td>{route.transitTravelTime}</td>
                        <td>{route.totalTravelTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Transit Information Table */}
              <h2 className={styles.normal}>Transit Information</h2>
              <div className={styles.tableContainer} style={{ width: "100%" }}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Route ID</th>
                      <th>Type</th>
                      <th>Arrival Place</th>
                      <th>Departure Place</th>
                      <th>Arrival Time</th>
                      <th>Departure Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.routes.map((route) =>
                      route.sections.map((section) => {
                        // for checking if it is transit route only
                        const sectionIdPattern = /^R\d+-S1$/;
                        if (sectionIdPattern.test(section.id)) {
                          return (
                            <tr key={`${route.id}-${section.id}`}>
                              <td>{route.id}</td>
                              <td>{section.type}</td>
                              <td>{section.arrival.place.name}</td>
                              <td>{section.departure.place.name}</td>
                              <td>{section.arrival.time}</td>
                              <td>{section.departure.time}</td>
                            </tr>
                          );
                        }
                        return null;
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p>No data available</p>
          )}
        </div>
      )};
    </div>
  );
};

export default FinalPage;
