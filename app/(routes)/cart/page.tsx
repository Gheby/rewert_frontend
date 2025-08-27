"use client";

import useCart from "../../../hooks/use-cart";
import Container from "../../../ui/container";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="lg:col-span-7">
            <div>
              {cart.items.length === 0 && (
                <p className="text-neutral-500">
                  No items were added to the cart
                </p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
              
            </div>
           <Summary />
          </div>
           
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
