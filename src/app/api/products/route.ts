import { NextResponse } from "next/server";

async function fetchProducts() {
  const response = await fetch(`https://dummyjson.com/products?limit=100`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();
  return products;
}

export async function GET(request: Request) {
  const products = await fetchProducts();
  return NextResponse.json(products);
}
