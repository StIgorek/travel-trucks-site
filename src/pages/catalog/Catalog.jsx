import SideBar from "../../components/sideBar/sideBar";
import TruckList from "../../components/truckList/TruckList";
import trucks from "../../truckList.json";
import { BsCupHot } from "react-icons/bs";

export default function Catalog() {
  return (
    <div>
      <SideBar />
      <BsCupHot size={40} />
      <TruckList campers={trucks} />
    </div>
  );
}
