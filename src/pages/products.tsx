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

      <div className="cards">
        {Array.from({ length: 5 }).map((_, i) => (
          <a href={`/details/${i + 1}`}>Product {i + 1}</a>
        ))}
      </div>
    </div>
  );
}
