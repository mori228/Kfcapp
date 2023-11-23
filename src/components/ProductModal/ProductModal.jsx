import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import productsData from "../mocks/products.json"; // Import danych produktów

const ProductModal = () => {
  // Tutaj umieść logikę i zawartość modalną

  // Dane przykładowych produktów (lub użyj danych z pliku products.json)
  const products = productsData || [
    { id: 1, name: "Produkt 1", image: "url_do_obrazka" },
    { id: 2, name: "Produkt 2", image: "url_do_obrazka" },
    // Dodaj więcej produktów według potrzeb
  ];

  // Konfiguracja karuzeli
  const carouselResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="product-modal">
      {/* Sekcja "Dodaj to co lubisz" */}
      <h2>Dodaj to co lubisz</h2>
      <Carousel
        responsive={carouselResponsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {/* Mapowanie produktów do slajdów w karuzeli */}
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </Carousel>

      {/* Inna zawartość okna modalnego */}
    </div>
  );
};

export default ProductModal;
