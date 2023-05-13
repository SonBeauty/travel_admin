import "./guide.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Guide from "../../components/guides/Guide";

const Guides = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Guide />
      </div>
    </div>
  );
};

export default Guides;
