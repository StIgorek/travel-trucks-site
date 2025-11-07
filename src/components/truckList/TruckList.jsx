import TruckCard from "../../components/truckCard/truckCard";
import css from "./TruckList.module.css";

export default function TruckList({ campers }) {
  return (
    <ul className={css.container}>
      {campers.items.map(camper => {
        return (
          <li key={camper.id} className={css.card}>
            <TruckCard trucks={camper} />
          </li>
        );
      })}{" "}
    </ul>
  );
}
