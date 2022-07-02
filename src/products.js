import { useContext } from "react";
import { ObjContext } from "./App";

import ProductCategory from "./productCategory";

import './products.scss'; 
function Products (props) {
    const data =useContext(ObjContext);


    return (
        <div className='row'>
            <h3>All Products</h3>
            <div className="product">{data.length} Products</div>
            {props.categories.map((category, index) => {
                return (
                    <div className="col-md-3" key={index}>
                        <ProductCategory   category={category} ></ProductCategory>
                    </div>
                );
            })}
        </div>
    )
}

export default Products;