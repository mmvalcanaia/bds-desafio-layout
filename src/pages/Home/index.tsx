import CarImage from '../../assets/images/car-header.png';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="card-container blue-card">
          <div className="card-container-image">
            <img src={CarImage} alt="Nome do carro" />
          </div>
          <div className="card-container-content">
            <h5>O carro perfeito para você</h5>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="secondary-card base-card">
          <div >
            <button className="btn btn-secondary">
              <Link to="/products">Ver catálogo</Link>
            </button>
          </div>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};
export default Home;
