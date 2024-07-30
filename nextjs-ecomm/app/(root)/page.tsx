import sampleData from "@/lib/sample-data";
import ProductList from "@/components/shared/product/product-list";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();
  return (
    <div className="space-y-8">
      {JSON.stringify(session)}
      <ProductList />
    </div>
  );
}
