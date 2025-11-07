import Button from "../button/Button.jsx";
import css from "./TruckCard.module.css";

export default function TruckCard({
  trucks: {
    name,
    price,
    rating,
    reviews,
    location,
    description,
    gallery: [{ original }],
  },
}) {
  return (
    <div className={css.container}>
      <img src={original} alt={name} width="292" className={css.img} />
      <div className={css.details}>
        <div className={css.title}>
          <h2>{name}</h2>
          <h2 className={css.price}> €{price}</h2>
        </div>

        <p>
          Rating: {rating} ({reviews.length} Reviews)
        </p>
        <p>Location: {location}</p>
        <p>{description}</p>
        <Button type="button">Show more</Button>
      </div>
    </div>
  );
}
