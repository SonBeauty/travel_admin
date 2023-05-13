import "./trip.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Trip from "../../components/trip/Trip";

const Trips = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Trip />
      </div>
    </div>
  );
};

export default Trips;
