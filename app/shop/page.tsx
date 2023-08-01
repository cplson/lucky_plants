import CartCleaner from "@/components/CartCleaner";
import ProductList from "@/components/ProductList";

export default function Shop() {
  return (
    <>
      <div className="mx-auto w-full">
        <ProductList />
      </div>
      <CartCleaner />
    </>
  );
}
