const ProductCard = ({ product, wishlist, toggleWishlist }) => {
  const isLiked = wishlist.includes(product.id);

  return (
    <div className="card">
      <div className="wishlist" onClick={() => toggleWishlist(product.id)}>
        {isLiked ? "❤️" : "🤍"}
      </div>

      <img src={product.image} alt={product.title} />
      <h4>{product.title.slice(0, 40)}...</h4>
      <p className="price">${product.price}</p>
    </div>
  );
};

export default ProductCard;