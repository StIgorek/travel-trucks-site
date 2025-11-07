import TruckCard from '../../components/truckCard/truckCard';

export default function TruckList({ campers }) {
  return (
    <ul>
      {campers.items.map(camper => {
        return (
          <li key={camper.id}>
            <TruckCard trucks={camper} />
          </li>
        );
      })}{' '}
    </ul>
  );
}
