import "./traveler.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Traveler from "../../components/traveler/Traveler";

const Travelers = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Traveler />
      </div>
    </div>
  );
};

export default Travelers;
