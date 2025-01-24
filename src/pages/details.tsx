import { useParams } from "react-router";

export function Details() {
  const { id } = useParams();

  return (
    <div>
      <h1>Details</h1>

      <span>
        Product ID: <strong>{id}</strong>
      </span>
    </div>
  );
}
