import React, { useEffect, useState } from "react";
import productService from "../../services/productServices";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Products = () => {
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
      <div class="container py-5">
        <h2 className="text-danger">Available Hostels</h2>
        <div class="row mt-2">
          {products &&
            products?.data.map((product) => {
              const productPic = `http://localhost:4000${product.photos[0]}`;

              return (
                <div class="col-md-4" key={product._id}>
                  <div class="card shadow-lg mb-5 bg-body rounded mt-3 border-dark">
                    <div class="card-body">
                      <div class="container text-center py-3">
                        <img
                          src={productPic}
                          class="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div>
                        <h5 class="card-title">{product.name}</h5>
                        <h5>Description: {product.desc}</h5>
                        <h5>Rs {product.price}</h5>
                        <h5>Address: {product.address}</h5>
                      </div>
                      <div class="card-footer">
                        <Link
                          to={`/productDetail/${product._id}`}
                          state={{ productId: product._id, product }}
                        >
                          <button className="btn btn-success fw-bold fs-5" type="submit">
                            View Product
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
    </>
  );
};

export default Products;
