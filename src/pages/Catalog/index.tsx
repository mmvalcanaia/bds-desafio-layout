import Filter from 'components/Filter';
import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';

import './styles.css';

function Catalog() {
  return (
    <>
      <Navbar />
      <div className="catalog-container">
        <Filter />
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
