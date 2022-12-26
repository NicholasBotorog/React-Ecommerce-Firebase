import { Outlet } from "react-router-dom";
import "../categories.style.scss"
import Directory from "../components/directory/directory";

const Home = () => {

  return (
    <div>
        <Directory />
        <Outlet />
    </div>
  );
}

export default Home;
