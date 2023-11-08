import { Button } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import drink1 from "../assets/pexels-los-muertos-crew-10041265.jpg";
import drink2 from "../assets/pexels-rdne-stock-project-4920898.jpg";
import drink3 from "../assets/pexels-cottonbro-studio-6321925.jpg";
import drink4 from "../assets/tara-evans-QvMen4ChnoI-unsplash.jpg";
import drink5 from "../assets/brenda-godinez-wZz1ZYntWa4-unsplash.jpg";
import drink6 from "../assets/brigitte-tohm-ZoPg1SDXYmg-unsplash.jpg";
import drinking from "../assets/two-business-woman-cafe.jpg";
import cupofcoffee from "../assets/1909.i305.022.P.m005.c20.realistic coffee set-02.jpg";
import cupofcoffee2 from "../assets/2150691273.jpg";
import { BsCup, BsCupHotFill } from "react-icons/bs";
import { SiCoffeescript } from "react-icons/si";
import { GiCoffeeMug } from "react-icons/gi";
const Page2 = () => {
  return (
    <>
      <div className="container-fluid w-100 p-0" style={{ minHeight: "70rem" }}>
        <div
          className="container-fluid w-100 p-0"
          style={{ background: "#8B4513", minHeight: "30rem" }}
        >
          <nav class="navbar container-fluid m-0 p-0 w-100 bg-white navbar-expand-lg">
            <div
              class="container-fluid m-0 p-md-3 px-md-5 p-sm-3 w-100"
              style={{ background: "#800000" }}
            >
              <a
                class="navbar-brand"
                style={{ color: "white" }}
                href="/landing-page-1"
              >
                <BsCup style={{ fontSize: "3rem" }} color="white" /> Coffee Hub
              </a>
              <button
                class="navbar-toggler bg-white"
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
                <ul class="navbar-nav ms-md-3 me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link active text-white"
                      aria-current="page"
                      href="/landing-page-1"
                    >
                      Shop
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="/landing-page-1">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-white"
                      aria-disabled="true"
                      href="/landing-page-1"
                    >
                      Benefits
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-white"
                      aria-disabled="true"
                      href="/landing-page-1"
                    >
                      Blogs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-white"
                      aria-disabled="true"
                      href="/landing-page-1"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div class="d-flex flex-sm-column flex-md-row">
                  <Button
                    className="text-white border-0"
                    style={{ backgroundColor: "inherit" }}
                    icon={<ShoppingCartOutlined />}
                  >
                    Cart
                  </Button>
                  <Button
                    className="text-white border-0"
                    style={{ backgroundColor: "inherit" }}
                    icon={<UserOutlined />}
                  >
                    Log in
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          <div
            className="container-fluid row w-100"
            style={{ minHeight: "35rem", padding: "5rem" }}
          >
            <div className="col-md-6 col-12 d-flex flex-column text-white">
              <h1>
                LIFE_____________
                <br /> BEGINS AFTER COFFEE
              </h1>
              <p className="mt-2">
                A cup of coffee is an artful ritual, a moment of solace that
                awakens the senses, with each sip, it bribg comfort ane a gentle
                push to face day's endeavors.
              </p>
              <div>
                <Button
                  className="text-white"
                  style={{ background: "#362F2A", borderColor: "#362F2A" }}
                >
                  Book Table
                </Button>
                <Button className="ms-3" style={{ color: "brown" }}>
                  About Us
                </Button>
              </div>
            </div>
            <div className="col-md-6 d-sm-none d-md-flex justify-content-center align-items-center">
              <SiCoffeescript
                color="white"
                style={{ width: "12rem", height: "12rem" }}
              />
              <GiCoffeeMug
                color="white"
                style={{ width: "5rem", height: "5rem" }}
              />
              <BsCupHotFill
                color="white"
                style={{
                  width: "5rem",
                  height: "5rem",
                  position: "relative",
                  top: "5rem",
                  right: "7rem",
                }}
              />
            </div>
          </div>

          <div
            className="container-fluid m-0 bg-white p-3 divv1 row w-100"
            style={{ minHeight: "15rem" }}
          >
            <div
              className="container mx-auto mt-5 row"
              style={{ width: "90%" }}
            >
              <div className="col-3 p-0 rounded">
                <img
                  className="rounded"
                  src={drink1}
                  style={{ width: "100%", height: "15rem", objectFit: "cover" }}
                  alt="drink1"
                />
              </div>
              <div className="col-3 ms-auto p-0 rounded">
                <img
                  className="rounded"
                  src={drink2}
                  style={{ width: "100%", height: "15rem", objectFit: "cover" }}
                  alt="drink1"
                />
              </div>
              <div className="col-3 ms-auto p-0 rounded">
                <img
                  className="rounded"
                  src={drink3}
                  style={{ width: "100%", height: "15rem", objectFit: "cover" }}
                  alt="drink1"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid m-0 mt-5 d-flex flex-column justify-content-center align-items-center w-100"
          style={{ minHeight: "20rem" }}
        >
          <h1>Our Coffee Flavours</h1>
          <small className="text-center" style={{ width: "60%" }}>
            coffee flavor is a complex symphony of rich, aromatic notes, ranging
            from nutty antd chocolately to fruity and floral, creating a sensory
            journey with every sip.
          </small>
          <div
            className="container mx-auto mt-5 row"
            style={{ width: "90%", minHeight: "15rem" }}
          >
            <div className="col-3 p-0 d-flex flex-column align-items-center rounded">
              <img
                className="rounded"
                src={drink4}
                style={{ width: "100%", height: "10rem", objectFit: "cover" }}
                alt="drink1"
              />
              <p className="mt-2 fs-5">Fruity</p>
            </div>
            <div className="col-3 ms-auto p-0 d-flex flex-column align-items-center rounded">
              <img
                className="rounded"
                src={drink5}
                style={{ width: "100%", height: "10rem", objectFit: "cover" }}
                alt="drink1"
              />
              <p className="mt-2 fs-5">Chocolatey</p>
            </div>
            <div className="col-3 ms-auto p-0 d-flex flex-column align-items-center rounded">
              <img
                className="rounded"
                src={drink6}
                style={{ width: "100%", height: "10rem", objectFit: "cover" }}
                alt="drink1"
              />
              <p className="mt-2 fs-5">Citrusy</p>
            </div>
          </div>
        </div>

        <div
          className="container mx-auto mb-3 rounded p-0 bg-light mt-5 row"
          style={{ width: "90%", minHeight: "15rem" }}
        >
          <div
            className="col-5 p-2 bg-light d-flex flex-column justify-content-center align-items"
            style={{
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          >
            <h3 className="text-center">Book Your Coffe Table Now & Get 50%</h3>
            <small className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ut.
            </small>
            <Button
              className="text-white mt-3 mx-auto"
              style={{
                background: "#362F2A",
                borderColor: "#362F2A",
                width: "7rem",
              }}
            >
              Book Now
            </Button>
          </div>
          <div
            className="col-6 p-0 ms-auto"
            style={{
              borderRadius: "7rem",
              borderTopRightRadius: "1rem",
              borderBottomRightRadius: "1rem",
            }}
          >
            <img
              src={drinking}
              style={{
                width: "100%",
                height: "15rem",
                objectFit: "cover",
                borderTopLeftRadius: "7rem",
                borderBottomLeftRadius: "7rem",
                borderTopRightRadius: "1rem",
                borderBottomRightRadius: "1rem",
              }}
              alt="drinking"
            />
          </div>
        </div>

        <div
          className="container mx-auto mb-3 rounded p-0 mt-2 d-flex flex-column justify-content-center align-items-center"
          style={{ width: "90%", minHeight: "15rem" }}
        >
          <div
            style={{ width: "15rem", minHeight: "10rem" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img
              style={{ width: "5rem", height: "5rem" }}
              src={cupofcoffee}
              alt="drink1"
            />
            <p className="mt-2 fw-bold">All Flavoured Coffee</p>
          </div>
          <div
            style={{ width: "100%", minHeight: "10rem" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className="text-center" style={{ color: "brown" }}>
              What Makes Our Coffee Special
            </h1>
            <p className="mt-2 text-center" style={{ color: "brown" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              magnam natus culpa obcaecati tempora temporibus unde debitis
              maiores quas quos!
            </p>
          </div>
        </div>

        <div
          className="container mx-auto mb-3 shadow rounded p-0 mt-2 row"
          style={{ width: "90%", minHeight: "15rem" }}
        >
          <div
            style={{ minHeight: "inherit" }}
            className="p-0 rounded d-flex col-4 flex-column justify-content-center align-items-center"
          >
            <img
              style={{
                width: "100%",
                height: "15rem",
                objectFit: "cover",
                borderRadius: "inherit",
              }}
              src={cupofcoffee2}
              alt="coffee"
            />
          </div>
          <div
            style={{ minHeight: "inherit" }}
            className="row g-1 col-7 p-0 ms-auto"
          >
            <div className="col-6 d-flex flex-column">
              <p className="m-0 fw-bold">Quality Beans</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda sed reiciendis, laborum nihil id reprehenderit.
              </small>
            </div>
            <div className="col-6 d-flex flex-column">
              <p className="m-0 fw-bold">Variety Offerings</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda sed reiciendis, laborum nihil id reprehenderit.
              </small>
            </div>
            <div className="col-6 d-flex flex-column">
              <p className="m-0 fw-bold">Skillful Barista</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda sed reiciendis, laborum nihil id reprehenderit.
              </small>
            </div>
            <div className="col-6 d-flex flex-column">
              <p className="m-0 fw-bold">Artisanal Touch</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda sed reiciendis, laborum nihil id reprehenderit.
              </small>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="mt-5 p-3 d-flex justify-content-between align-items-center"
        style={{ background: "#8B4513", minHeight: "7rem" }}
      >
        <div
          style={{ width: "8.5rem" }}
          className="ms-5 d-flex justify-content-between align-items-center"
        >
          <BsCup style={{ fontSize: "3rem" }} color="white" />{" "}
          <small className="text-white">COFFEE HUB</small>
        </div>
        <p className="text-white m-0">
          Lorem ips um dolor sit amet consectetur adipisicing elit. Deserunt,
          esse!
        </p>
      </footer>
    </>
  );
};

export default Page2;
