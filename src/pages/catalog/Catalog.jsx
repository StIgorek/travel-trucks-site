import SideBar from '../../components/sideBar/sideBar';
import TruckList from '../../components/truckList/TruckList';
import trucks from '../../truckList.json';

export default function Catalog() {
  return (
    <div>
      <SideBar />
      <TruckList campers={trucks} />
    </div>
  );
}
