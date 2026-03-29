import ProductCard from "./ProductCard";

const ProductGrid = ({ products, wishlist, toggleWishlist }) => {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      ))}
    </div>
  );
};

export default ProductGrid;