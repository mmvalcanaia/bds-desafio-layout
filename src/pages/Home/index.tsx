import Navbar from '../../components/Navbar';
import CarImage from '../../assets/images/car-header.png';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
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
          <button className="btn btn-secundary">Ver catálogo</button>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};
export default Home;
