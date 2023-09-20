"use client";

import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionStores from "./components/SectionStores/SectionStores";
import SectionShelf from "./components/SectionShelf/SectionShelf";
import SectionJussi from "./components/SectionJussi/SectionJussi";
import SectionComercial from "./components/SectionComercial/SectionComercial";
import SectionForm from "./components/SectionForm/SectionForm";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products.products);
    };

    getProducts();
  }, []);

  return (
    <>
      <Header />
      <main>
        <SectionOne products={products} />
        <SectionStores />
        <SectionShelf products={products} />
        <SectionJussi />
        <SectionComercial />
        <SectionForm />
        <Footer />
      </main>
    </>
  );
}
