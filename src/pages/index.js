import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";

export default function Home({ products }) {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // wishlist toggle
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  // Handle search with loading effect
  const handleSearchChange = (value) => {
    setLoading(true);
    setSearch(value);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };
  
  // Handle category filter
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  // Sorting
  let finalProducts = [...filteredProducts];

  if (sort === "low") {
    finalProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    finalProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Head>
        <title>Shop - Products</title>
        <meta name="description" content="Buy best products online" />
      </Head>

      <Header search={search} setSearch={handleSearchChange} />

      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Explore our curated collection of premium products crafted with quality and style.
          Designed to elevate your everyday experience with timeless elegance.
        </p>
      </section>

      <main className="container">
        <aside className="sidebar">
          <Filters onCategoryChange={handleCategoryChange} />
        </aside>

        <section className="products">
          <h1>All Products</h1>

          {/* Sorting */}
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="">Recommended</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>

          {/* Loading */}
          {loading ? (
            <p>Loading...</p>
          ) : finalProducts.length === 0 ? (
            <p>No products found 😢</p>
          ) : (
            <ProductGrid
              products={finalProducts}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

// SSR (Server Side Rendering)
export async function getStaticProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const contentType = res.headers.get("content-type") || "";

    if (!res.ok || !contentType.includes("application/json")) {
      throw new Error("Invalid API response");
    }

    const products = await res.json();

    return {
      props: { products },
    };
  } catch (error) {
    console.error("Fetch failed:", error);

    return {
      props: { products: [] }, // fallback
    };
  }
}