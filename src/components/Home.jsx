import { Button, Popover } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Home = ({setCurrentPage}) => {
  const navigate=useNavigate()
  return (
    <div
      style={{ width: "100%" }}
      className="mx-auto pt-3 d-flex flex-column justify-content-center align-items-center"
    >
      <h5 className="text-center" style={{marginTop:"10rem",color: "darkslategray" }}>
        10 Cool Landing Pages
      </h5>
      <Button
        type="primary"
        shape="round"
        icon={<PlayCircleOutlined />}
        size={"large"}
        onClick={()=>{setCurrentPage(1);navigate(`landing-page-1`)}}
      >
        Begin the Show
      </Button>
      <small className="mt-2">To Change Pages, Use the buttons on the bottom right.</small>
      <div
        className="col-12 w-100 mb-2 d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: "25rem" }}
      >
      <hr style={{width:"70%"}}/>
        <Popover
          content={
            <div>
              <p className="text-center m-0">Software Developer</p>
              <ul className="">
                <li>Github : /fanu-cd</li>
                <li>LinkedIn : /fanucd</li>
              </ul>
            </div>
          }
          title={<p className="m-0 text-center">Fanuel Amare</p>}
        >
          Developed By <u className="">Fanuel Amare</u>
        </Popover>
      </div>
    </div>
  );
};

export default Home;
