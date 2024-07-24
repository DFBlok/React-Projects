import sampleData from "@/lib/sample-data";
import ProductList from "@/components/shared/product/product-list";
export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList />
    </div>
  );
}
