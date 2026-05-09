import { NextResponse } from "next/server";
import { MOCK_PRODUCTS } from "./data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const isFeatured = searchParams.get("isFeatured");

  let filteredProducts = MOCK_PRODUCTS;
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }
  if (isFeatured === "true") {
    filteredProducts = filteredProducts.filter(p => p.isFeatured);
  }
  
  return NextResponse.json({ success: true, data: filteredProducts });
}
