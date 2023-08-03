import "./Cart.css";

export const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <h2>
              {element.name} - {element.quantity} unidad/es
            </h2>
          </div>
        );
      })}
    </div>
  );
};
