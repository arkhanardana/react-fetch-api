import { useEffect, useState } from "react";

const Products = () => {
  const apiUrl = "https://fakestoreapi.com/products"; // URL API dengan nama variabel yang lebih deskriptif
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data); // Menyimpan data dalam state products
    } catch (error) {
      console.error("Error fetching data:", error); // Menangani error jika terjadi
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // useEffect dijalankan hanya sekali saat komponen di-mount

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
