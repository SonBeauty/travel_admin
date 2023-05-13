import "./tour.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Tour from "../../components/tour/Tour";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Tour />
      </div>
    </div>
  );
};

export default List;
