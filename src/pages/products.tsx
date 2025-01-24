import { useSearchParams } from "react-router";

export function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  return (
    <div>
      <a href="/">Back</a>

      <h1>Products</h1>

      {category && (
        <span>
          Category <strong>{category}</strong>
        </span>
      )}
    </div>
  );
}
