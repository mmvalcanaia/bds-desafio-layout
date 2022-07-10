import './styles.css';

function Filter() {
  return (
    <div className="base-card filter-container">
      <div className="filter-input">
        <input type="text" placeholder="Digite sua busca" />
      </div>
      <div className="filter-button">
        <button className="btn btn-secondary">Buscar</button>
      </div>
    </div>
  );
}

export default Filter;
