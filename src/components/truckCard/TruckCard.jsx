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
    <div>
      <img src={original} alt={name} width="200" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        Rating: {rating} ({reviews.length} Reviews)
      </p>
      <p>Location: {location}</p>
      <p>{description}</p>
      <button>Show more</button>
    </div>
  );
}
