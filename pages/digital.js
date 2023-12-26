import React, { useEffect, useState } from "react";

import { useRouter } from 'next/navigation';
import axios from "axios";
import { useSelector } from "react-redux";
import { useSearchParams } from 'next/navigation';

import "../public/css/styles.css";
import "../public/css/bootstrap.css";
import "../public/css/main.css";
import "../public/css/util.css";
import "../public/css/magnific-popup.css";
import "../public/css/platform.css";
import "../public/css/fontawesome-all.css";
import { addDetails } from "../store/slices/digitalBoardDetailsSlice";
import Spinner from '../src/app/Spinner/Spinner';
const digitalBoard = () => {


    const [stationName, setStationName] = useState('')
    const [apiResponse, setApiResponse] = useState([])
    const searchParams = useSearchParams()
    const [loading, setLoading] = useState(true);
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        fontSize: '16px',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
    };

    const headerCellStyle = {
        backgroundColor: '#f8f8f8',
        color: '#333',
        fontWeight: 'bold',
        padding: '12px 15px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
    };

    const cellStyle = {
        padding: '12px 15px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
    };

    const hoverRowStyle = {
        backgroundColor: '#f5f5f5',
    };

    const originId = searchParams.get('route');
    const destinationId = searchParams.get('station');

    console.log(originId, 'this is the value of the origin id')
    console.log(destinationId, 'this is the value of the destination id')
    useEffect(() => {
        setLoading(true)
        if (originId && destinationId != null) {
            const fetchresult = () => {
                const data =
                {
                    "route": originId,
                    "station": destinationId
                }
                axios.post('http://10.61.36.237:8080/platform', data).then((res) => {
                    console.log(res.data.data, 'this is the result')
                    setStationName(res.data.data.stationName)
                    setApiResponse(res.data.data.array)
                    setLoading(false)
                }).catch((err) => {
                    console.log(err)
                })
            }

            fetchresult()
        }
    }, [originId])

    return (
        loading ? (<Spinner />) :
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


                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={headerCellStyle}>Route</th>
                            <th style={headerCellStyle}>Bus No.</th>
                            <th style={headerCellStyle}>Arrival Time</th>
                            <th style={headerCellStyle}>Towards</th>
                            <th style={headerCellStyle}>Current Occupancy</th>
                            <th style={headerCellStyle}>Expected Occupancy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiResponse.map((res) => {
                                console.log(res, 'this is the value of the response')
                                return (
                                    <tr style={hoverRowStyle}>
                                        <td style={cellStyle}>{res['route_name']}-{res['route_no']}</td>
                                        <td style={cellStyle}>{res['vehicle_no']}</td>
                                        <td style={cellStyle}>{res['trip_start_time']}</td>
                                        <td style={cellStyle}>{res['trip_headsign']}</td>
                                        <td style={cellStyle}>{res['current_occupancy']}</td>
                                        <td style={cellStyle}>{res['expected_occupancy']}</td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>
            </div>






    )
}


export default digitalBoard