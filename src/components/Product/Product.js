import React, { useEffect, useState } from "react";
import productService from "../../services/productServices";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Hostels = () => {
    const navigate = useNavigate()
  const [products, setProducts] = useState("");
  useEffect(() => {
    productService
      .getAll()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/* {{!-- Available Hostels sections --}} --> */}

      <div class="container py-5">
        <h2 className="text-danger">Available Hostels </h2>
        {/* {
                        products && products?.data.map([product] => )
                        } */}
        <div class="row mt-2">
        {products &&
                  products?.data.map((product) => {
                    return (
          <div class="col-md-4">
            <div class="card shadow-lg mb-5 bg-body rounded mt-3 border-dark">
              <div class="card-body">
                <div class="container text-center py-3">
                  <img
                    src={product.photos}
                    class="card-img-top"
                    alt="..."
                  />
                </div>
               
                      <div>
                        <h5 class="card-title">{product.name}</h5>
                        <h5>Description:{product.desc}</h5>
                        <h5>Fees.{product.cheapestPrice}| per month</h5>
                        <h5>Address: {product.address}</h5>
                      </div>
                   
                <div class="card-footer">
                <Link to={`/HostelDetail/${product.id}`} state={{ productId: product._id, product }}>
  <button className="btn btn-success fw-bold fs-5" type="submit">
    View Hostel
  </button>
</Link>
                </div>
              </div>
            </div>
          </div>
 );
})}
 
        </div>
      </div>
      {/* <!-- 
{{!-- Available hostels sections section ends --}} */}
    </>
  );
};

export default Hostels;
