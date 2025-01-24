import { useNavigate, useParams } from "react-router";

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1>Details</h1>

      <span>
        Product ID: <strong>{id}</strong>
      </span>
    </div>
  );
}
