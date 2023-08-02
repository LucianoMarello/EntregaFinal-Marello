import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ producto, onAdd, initial }) => {
  return (
    <div>
      <h2>{producto.name}</h2>
      <div className="detalles">
        <h3>Precio por Unidad: {producto.price}</h3>
        <img src={producto.img} alt={producto.name} />
        <h3>Descripcion: {producto.description}</h3>
        <CounterContainer
          stock={producto.stock}
          onAdd={onAdd}
          initial={initial}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
