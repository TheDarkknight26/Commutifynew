import "../../public/css/styles.css";
import "../../public/css/bootstrap.css";
import "../../public/css/main.css";
import "../../public/css/util.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/platform.css";
import "../../public/css/fontawesome-all.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Head from "next/head";
import { HydrationProvider } from "react-hydration-provider";
import ApiRequestForm from './components/form.js';
import DigitalBoardForm from "./components/digitalboard.js";


export default function Home() {

  return (
    <>
      <HydrationProvider>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
          />

        </Head>
        <body data-spy="scroll" data-target=".fixed-top">
          <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
            <a className="navbar-brand logo-image" href="/">
              <img src="images/logo.png" alt="alternative" />
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
                  <a className="nav-link page-scroll" href="#header">
                    HOME<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#intro">
                    INTRO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#services">
                    PRODUCTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#apiRequest">
                    API REQUEST
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#digitalBoard">
                    DIGITAL BOARD
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#highlights">
                    HIGHLIGHTS
                  </a>
                </li>
              </ul>

            </div>
          </nav>

          <header id="header" className="header">
            <div className="header-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-container">
                      <h1>
                        <span id="js-rotating">
                          TRIP PLANNING, CROWDING PREDICTION, COVID SAFETY
                        </span>
                      </h1>
                      <p className="p-heading p-large">
                        Commutify empowers decision making of the transit users
                        providing predicted crowding, real time transit
                        information and a disutility index to choose among
                        possible alternatives.
                      </p>
                      <a className="btn-solid-lg page-scroll" href="#intro">
                        DISCOVER
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div id="intro" className="basic-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="text-container">
                    <div className="section-title">INTRO</div>
                    <h2>
                      A pre trip planner ensuring covid safety and mobility for
                      all
                    </h2>
                    <p>
                      The PT ridership is significantly affected during COVID-19,
                      however, we plan to take this opportunity to not only
                      restore the ridership but also attract more newer passengers
                      to PT. The need of the dynamic vehicle occupancy levels is
                      more than ever which is to be used for the trip planning to
                      reduce the chances of getting infection in a crowded
                      vehicle.
                    </p>
                    <div className="testimonial-text">
                      <ul>
                        <li>
                          embeds a multi-modal routing algorithm in it to suggest
                          the various alternatives to the users
                        </li>
                        <li>
                          provides real-time location of a public transport
                          vehicle, the expected arrival time at a transit station
                        </li>
                        <li>
                          dynamic vehicle load information i.e. dynamic occupancy
                          for each vehicle
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="images/intro-office.png"
                      alt="alternative"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="services" className="cards-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">PRODUCTS</div>
                  <h2>
                    Choose The Product
                    <br /> That Suits Your Needs
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid1"
                        src="images/services-1.png"
                        alt="alternative"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">CROWDING API</h3>
                      <p align="center">GET request on Commutify API gives</p>
                      <ul className="list-unstyled li-space-lg">
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            6 alternatives for any OD pair, with intermediate
                            stations in between.
                          </div>
                        </li>
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            Predicted Occupancy with granularity up to each
                            intermediate station. Calculated crowding index for
                            each alternative.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button-container">
                      <a className="btn-solid-reg page-scroll" href="#apiRequest">
                        TEST API
                      </a>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid1"
                        src="images/services-2.png"
                        alt="alternative"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">MOBILE APPLICATION</h3>
                      <p align="center">
                        Download mobile application for Android
                      </p>
                      <ul className="list-unstyled li-space-lg">
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            Plan trips with updated and reliable information on
                            transit occupancy, delays, and traveling time.
                          </div>
                        </li>
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            Visualize predicted crowding on maps with route
                            information.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button-container">
                      <a
                        className="btn-solid-reg page-scroll"
                        href="https://drive.google.com/file/d/1sCPONHE1R5yt8XrG9oXieiFzSfUvfRx1/view?usp=sharing"
                        download
                      >
                        DOWNLOAD APP
                      </a>
                    </div>
                  </div>
                  {/* End of Card 1 */}

                  {/* Card 2 */}
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="img-fluid1"
                        src="images/services-3.png"
                        alt="alternative"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">DIGITAL BOARD</h3>
                      <p align="center">
                        How much occupied your next bus will be?
                      </p>
                      <ul className="list-unstyled li-space-lg">
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            Current occupancy and predicted occupancy of all
                            upcoming vehicles in the next 24 hours.
                          </div>
                        </li>
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            Predicted Occupancy at the station on which the
                            traveler is waiting for his transit, to decide whether
                            to board a particular bus before it arrives.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button-container">
                      <a
                        className="btn-solid-reg page-scroll"
                        href="#digitalBoard"
                      >
                        DETAILS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ApiRequestForm />
          <DigitalBoardForm />

          <div className="basic-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Founding Team</h2>
                  <p className="p-heading"></p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {/* Team Member */}
                  <div className="team-member">
                    <div className="image-wrapper">
                      <img
                        className="img-fluid-team"
                        src="images/team-1.png"
                        alt="alternative"
                      />
                    </div>
                    {/* end of image-wrapper */}
                    <p className="p-large">Dr. Amit Agarwal</p>
                    <p className="job-title">Technical Supervisor</p>
                    <span className="social-icons">
                      <span className="fa-stack">
                        <a href="#">
                          <span className="hexagon"></span>
                          <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                      </span>
                      <span className="fa-stack">
                        <a href="https://www.linkedin.com/in/amit-agarwal-99a20232/">
                          <span className="hexagon"></span>
                          <i className="fab fa-linkedin-in fa-stack-1x"></i>
                        </a>
                      </span>
                    </span>
                  </div>
                  {/* end of team-member */}
                  {/* end of team member */}

                  {/* Team Member */}
                  <div className="team-member">
                    <div className="image-wrapper">
                      <img
                        className="img-fluid-team"
                        src="images/team-2.png"
                        alt="alternative"
                      />
                    </div>
                    {/* end of image-wrapper */}
                    <p className="p-large">Arpit Shrivastava</p>
                    <p className="job-title">Developer/ Data Scientist</p>
                    <span className="social-icons">
                      <span className="fa-stack">
                        <a href="https://www.facebook.com/arpit.shrivastava.92">
                          <span className="hexagon"></span>
                          <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                      </span>
                      <span className="fa-stack">
                        <a href="https://www.linkedin.com/in/arpit-shrivastava-0b11b4194/">
                          <span className="hexagon"></span>
                          <i className="fab fa-linkedin-in fa-stack-1x"></i>
                        </a>
                      </span>
                    </span>
                  </div>
                  {/* end of team-member */}
                  {/* end of team member */}

                  {/* Team Member */}
                  <div className="team-member">
                    <div className="image-wrapper">
                      <img
                        className="img-fluid-team"
                        src="images/team-3.png"
                        alt="alternative"
                      />
                    </div>
                    {/* end of image wrapper */}
                    <p className="p-large">Devesh Pratap Singh</p>
                    <p className="job-title">App Developer</p>
                    <span className="social-icons">
                      <span className="fa-stack">
                        <a href="https://www.facebook.com/deveshpratap05">
                          <span className="hexagon"></span>
                          <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                      </span>
                      <span className="fa-stack">
                        <a href="https://www.linkedin.com/in/deveshpratapsingh0505/">
                          <span className="hexagon"></span>
                          <i className="fab fa-linkedin-in fa-stack-1x"></i>
                        </a>
                      </span>
                    </span>
                  </div>
                  {/* end of team-member */}
                  {/* end of team member */}

                  {/* Team Member */}
                  <div className="team-member">
                    <div className="image-wrapper">
                      <img
                        className="img-fluid-team"
                        src="images/team-4.png"
                        alt="alternative"
                      />
                    </div>
                    {/* end of image-wrapper */}
                    <p className="p-large">Itisha Jain</p>
                    <p className="job-title">Data Scientist</p>
                    <span className="social-icons">
                      <span className="fa-stack">
                        <a href="https://www.facebook.com/itisha.jain.9400/">
                          <span className="hexagon"></span>
                          <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                      </span>
                      <span className="fa-stack">
                        <a href="https://www.linkedin.com/in/itisha-jain-25b801173/">
                          <span className="hexagon"></span>
                          <i className="fab fa-linkedin-in fa-stack-1x"></i>
                        </a>
                      </span>
                    </span>
                  </div>
                  {/* end of team-member */}
                  {/* end of team member */}
                </div>
              </div>
            </div>
          </div>

          <div className="slider" id="highlights">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Read Our Highlights and Mentions</h2>
                  <p className="p-heading">
                    In year 2021, Commutify earned recognization, support and was
                    mentioned by many Indian government authorities.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {/* Card Slider */}
                  <div className="slider-container">
                    <div className="swiper-container card-slider">
                      <div className="swiper-wrapper">
                        {/* Slide */}
                        <div className="swiper-slide">
                          <div className="card">
                            <img
                              className="card-image"
                              src="images/testimonial-1.png"
                              alt="alternative"
                            />
                            <div className="card-body">
                              <div className="testimonial-text">
                                Commutify has been selected to present their idea
                                in annual Urban Mobility Conference by MoHUA
                              </div>
                              <div className="testimonial-author">
                                Urban Mobility India - Conference
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end of slide */}

                        {/* Slide */}
                        <div className="swiper-slide">
                          <div className="card">
                            <img
                              className="card-image"
                              src="images/testimonial-2.png"
                              alt="alternative"
                            />
                            <div className="card-body">
                              <div className="testimonial-text">
                                Commutify is among top 10 teams in the first Smart
                                Move- Urban Mobility Challenge powered by GIZ.
                              </div>
                              <div className="testimonial-author">Smart Move</div>
                            </div>
                          </div>
                        </div>
                        {/* end of slide */}

                        {/* Slide */}
                        <div className="swiper-slide">
                          <div className="card">
                            <img
                              className="card-image"
                              src="images/testimonial-3.png"
                              alt="alternative"
                            />
                            <div className="card-body">
                              <div className="testimonial-text">
                                National Institute of Urban Affairs has requested
                                to Delhi and Bhubaneshwar Smart City to support
                                Commutify in their data collection and idea
                                implementation.
                              </div>
                              <div className="testimonial-author">
                                Support from Delhi and Bhubaneshwar Smart City
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end of slide */}
                      </div>
                      {/* end of swiper-wrapper */}

                      {/* Add Arrows */}
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                      {/* end of add arrows */}
                    </div>
                    {/* end of swiper-container */}
                  </div>
                  {/* end of slider-container */}
                </div>
              </div>
            </div>
          </div>

          <div class="footer">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="text-container about">
                    <h4>Few Words About Commutify</h4>
                    <p class="white">
                      Commuitify was founded in december 2020 considering the need
                      to restore the public transit ridership in Indian cities.
                      Commutify is provides an umbrella solution for the problems
                      faced by transit riders in Indian cities. Though it was
                      founded back in 2020 considering the need of safe transit
                      rides in post covid scenarios but it is considers people are
                      finding its utility in covid recovered socity also.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="copyright">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <p class="p-small">
                    Copyright © 2021{" "}
                    <a href="https://commuteiitr.herokuapp.com/">Commutify</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </HydrationProvider>
    </>
  );
}
