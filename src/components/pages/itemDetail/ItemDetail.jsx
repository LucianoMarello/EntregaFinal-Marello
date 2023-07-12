import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <h2>{producto.name}</h2>
      <div className="detalles">
        <h3>Precio por Unidad: {producto.price}</h3>
        <img src={producto.img} alt={producto.name} />
        <h3>Descripcion: {producto.description}</h3>
      </div>
    </div>
  );
};

export default ItemDetail;
