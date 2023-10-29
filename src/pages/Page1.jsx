import { Button, Card } from "antd";
import buyHouse from "../assets/undraw_buy_house_re_8xq7.svg";
import { MdOutlinePayment } from "react-icons/md";
import {Ri24HoursFill} from 'react-icons/ri'
import {PiTargetDuotone} from 'react-icons/pi'

const Page1 = () => {
  return (
    <div
      className="container-fluid mx-auto mt-3"
      style={{ minHeight: "50rem", width: "90%" }}
    >
      <nav class="navbar bg-white navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" style={{ color: "#00BFFF" }} href="/landing-page-1">
            BJORN
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/landing-page-1">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/landing-page-1">
                  Rates
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true" href="/landing-page-1">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true" href="/landing-page-1">
                  Contact
                </a>
              </li>
            </ul>
            <div class="d-flex flex-sm-column flex-md-row">
              <Button
                className="text-white"
                shape="round"
                style={{ backgroundColor: "#00BFFF" }}
              >
                Log in
              </Button>
              <Button className="border ms-2" shape="round" type="success">Register</Button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="mx-auto row"
        style={{ marginTop: "6rem", width: "90%", minHeight: "23rem" }}
      >
        <div className="col-12 d-flex flex-column col-md-5">
          <p className="fw-bold text-dark">BJORN</p>
          <h1 style={{ color: "darkslategray" }}>
            Get Your Dream House for Life
          </h1>
          <small className="text-wrap">
            All this about a comfortable bouse, strategic, cheap, easy,
            comfortable, guranteed security
          </small>
          <div className="mt-3">
            <Button
              className="text-white"
              shape="round"
              style={{ background: "#00BFFF", width: "5rem" }}
            >
              Explore
            </Button>
            <Button className="ms-3 fw-bold" shape="round">
              Watch Video
            </Button>
          </div>
        </div>
        <div className="d-sm-none ms-auto d-md-inline col-md-6">
          <img
            src={buyHouse}
            alt="Buy house"
            style={{ width: "100%", height: "20rem" }}
          />
        </div>
      </div>
      <div className="mx-auto mt-0 row" style={{ width: "85%", minHeight: "15rem" }}>
        <Card className="col-3 me-auto d-flex flex-column align-items-center justify-content-center">
          <p className="fw-bold text-center">Easy Payment</p>
          <MdOutlinePayment
            className="mx-auto d-block"
            style={{ width: "3rem", height: "3rem", color: "#007BFF" }}
          />
          <small className="d-block text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            libero?
          </small>
        </Card>
        <Card className="col-4 shadow d-flex flex-column align-items-center justify-content-center">
          <p className="fw-bold text-center">Strategic Location</p>
          <PiTargetDuotone
            className="mx-auto d-block"
            style={{ width: "3rem", height: "3rem", color: "#FFDF00" }}
          />
          <small className="d-block text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sapiente!
          </small>
        </Card>
        <Card className="col-3 ms-auto d-flex flex-column align-items-center justify-content-center">
          <p className="fw-bold text-center">24 Hours Security</p>
          <Ri24HoursFill
            className="mx-auto d-block"
            style={{ width: "3rem", height: "3rem", color: "#32CD32" }}
          />
          <small className="d-block text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quae?
          </small>
        </Card>
      </div>
    </div>
  );
};

export default Page1;
