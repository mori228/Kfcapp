import { groupBy } from "../../utils";
import BasketItem from "../BasketItem/BasketItem";
import "./Basket.scss";

const Basket = (props) => {
  const { orderedProducts, onProductRemove } = props;
  const totalCost = orderedProducts.reduce(
    (acc, orderedProduct) => acc + orderedProduct.price,
    0
  );
  const groupedOrderedProducts = groupBy(
    orderedProducts,
    (product) => product.name
  );
  console.log(groupedOrderedProducts);
  const handleProductRemove = (orderedProduct) => {
    onProductRemove(orderedProduct);
  };
  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderedProducts.length} products)</span>
        </h5>
        <button>X</button>
      </header>
      <div>
        <ul>
          {orderedProducts.map((orderedProduct) => (
            <BasketItem
              orderedProduct={orderedProduct}
              onProductRemove={handleProductRemove}
            />
          ))}
        </ul>
      </div>
      <footer>
        <button>Order and Pay ({totalCost.toFixed(2)})</button>
      </footer>
    </div>
  );
};

export default Basket;
