import React, { useEffect, useState } from "react";
import productService from "../../services/productServices";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
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
      <div className="container py-5">
        <h2 className="text-danger">Available Products</h2>
        <div className="row mt-4">
          {products &&
            products?.data.map((product) => {
              const productPic = `http://localhost:4000${product.photos[0]}`;

              return (
                <div className="col-md-4" key={product._id}>
                  <div className="card shadow-lg mb-4 bg-body rounded border-dark">
                    <img
                      src={productPic}
                      className="card-img-top img-fluid"
                      alt="Product"
                      style={{ maxHeight: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-primary fw-bold">{product.name}</h5>
                      <p className="card-text text-muted fs-6 mb-2">Price: Rs {product.price}</p>
                      <p className="card-text text-muted fs-6">Address: {product.address}</p>
                    </div>
                    <div className="card-footer">
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
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Products;
