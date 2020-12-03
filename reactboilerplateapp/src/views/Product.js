import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useAxiosGet } from "../hooks/HttpRequests";

function Product(){
    const { id } = useParams()
    const url = `https://5fbb1da1cc6c9d001624a89c.mockapi.io/api/v1/products/${id}`;
    
    let product = useAxiosGet(url)

    let content = null;

    

    if(product.error){
        content= <p>
            There be an error 
        </p>
    }

    if(product.loading){
        content= <Loader></Loader>
    }
    
    if(product.data){
        content = 
        <div>
          <h1 className="text-2xl font-bold mb-3">
              {product.data.name}
          </h1>
          <div>
              <img 
                src={product.data.image[0].imageUrl}
                alt={product.data.name}
              />
          </div>
          <div className="font-bold text-xl mb-3">
            $ {product.data.price}
          </div>
          <div>
              {product.data.description}
          </div>
        </div>
    }

    return (
       <div>
           {content}
       </div>
    )
}

export default Product;