import { useState } from "react";
import Counter from "./Counter";
import { ToastContainer, toast } from "react-toastify";

const CounterContainer = ({ stock, onAdd, initial }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : toast.info("Cantidad maxima del producto alcanzada!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: false,
          theme: "light",
        });
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };
  return (
    <div>
      <Counter
        contador={contador}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
      <ToastContainer />
    </div>
  );
};

export default CounterContainer;
