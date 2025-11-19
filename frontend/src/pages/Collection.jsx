import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState('relevent');

  // Handle Category Filter
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((i) => i !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Handle SubCategory Filter
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((i) => i !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Apply Filters
  const applyFilter = () => {
    let productsCopy = [...products];

    // Category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // SubCategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilteredProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice(); //create a copy of filter products
    switch (sortType) {
      case 'low-high': 
        setFilteredProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low': 
        setFilteredProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  // Re-apply filter whenever category or subCategory changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* LEFT FILTER SECTION */}
      <div className="min-w-60">
        {/* Filter dropdown */}
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filter
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden transition-all ${
              showFilter ? "rotate-180" : ""
            }`}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-4"
                value="Men"
                onChange={toggleCategory}
              />
              Men
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-4"
                value="Women"
                onChange={toggleCategory}
              />
              Women
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-4"
                value="Kids"
                onChange={toggleCategory}
              />
              Kids
            </label>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-4"
                value="Topwear"
                onChange={toggleSubCategory}
              />
              Topware
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-4"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />
              Bottomware
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-4"
                value="Winterwear"
                onChange={toggleSubCategory}
              />
              Winterware
            </label>
          </div>
        </div>
      </div>

      {/* RIGHT PRODUCT GRID */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTION" />

          {/* Sort Dropdown (optional) */}
          <select className="border-2 border-gray-300 text-sm p-2" onChange={(e)=>setSortType(e.target.value)}>
            <option value="relevant" >Sort by: Relevant</option>
            <option value="low-high" >Sort by: Low to High</option>
            <option value="high-low" >Sort by: High to Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
