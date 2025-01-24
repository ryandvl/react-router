import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  function handleProductsOpen() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <a href="/products">Products</a>
        <a href="/products?category=tvs">Categories</a>

        <button type="button" onClick={handleProductsOpen}>
          View Products
        </button>
      </nav>
    </div>
  );
}
