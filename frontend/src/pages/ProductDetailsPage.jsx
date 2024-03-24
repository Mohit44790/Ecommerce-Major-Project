import React, { useEffect, useState } from "react";
import { useParams, useSearchParams,  useLocation, Link, useNavigate } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const eventData = allEvents && allEvents.find((i) => i._id === id);
      setData(eventData);
    } else {
      const productData = allProducts && allProducts.find((i) => i._id === id);
      setData(productData);
    }
  }, [allProducts, allEvents, id, eventData]);

  // Function to handle new data selection
  const handleNewDataClick = (newId, isEvent) => {
    const newPath = `/product/${newId}${isEvent ? "?isEvent=true" : ""}`;
    navigate(newPath);
  };

  // Function to handle search bar change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter products based on search term
    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);

    // Open search results if search term is not empty
    setSearchOpen(term !== "");
  };

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {searchOpen && searchData && (
        <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
          {searchData.map((item, index) => (
            <Link to={`/product/${item._id}`} key={index}>
              <div className="w-full flex items-center py-3">
                <img
                  src={item.images[0]?.url}
                  alt=""
                  className="w-[40px] h-[40px] mr-[10px] rounded"
                />
                <h1>{item.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      )}
      {!eventData && data && <SuggestedProduct data={data} onNewDataClick={handleNewDataClick} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
