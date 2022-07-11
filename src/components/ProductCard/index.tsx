import CatalogImage from '../../assets/images/car-card.png';
import './styles.css';

function ProductCard() {
  return (
    <div className="base-card product-container">
      <div className="card-container-image">
        <img src={CatalogImage} alt="Nome do produto" />
      </div>
      <div className="card-container-info">
        <h5>Audi Supra TT</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi */
        </p>
        <button className="btn btn-secondary">Comprar</button>
      </div>
    </div>
  );
}

export default ProductCard;
