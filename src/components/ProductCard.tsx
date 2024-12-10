import React, { useState } from "react";

const ProductCard = ({ product, onAdd, onRemove }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    onAdd(product.price);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onRemove(product.price);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-right">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <p className="text-orange-600 font-bold mb-4">{product.price} تومان</p>
      <div className="flex items-center">
        <button
          onClick={handleRemove}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="mx-4">{quantity}</span>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
