import { Outlet, useParams, Link } from "react-router-dom";
import { getById } from "../API";

export default function TruckDetails() {
  const { id } = useParams();
  const truck = getById(id);
  return (
    <>
      <img src="" alt="" />
      <h3> {truck.name}</h3>
      <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
