import { useContext } from "react";
import { ObjContext } from "./App";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {urlPrefix} from './data/constant';
 
import './productCategory.scss';

function ProductCategory (props) {
    const data =useContext(ObjContext).filter(_data => _data.secondary_category?.name === props.category);

    const getImageData = () => {
        const directiveId = [];
        console.log(urlPrefix);
        for (let i =0; i < 3 && i < data.length; i++) {
            if(data[i].product_images && data[i].product_images.length > 0){
                directiveId.push(data[i].product_images[0].directus_files_id);
            }
        }
        return directiveId;
    }
    
    return (
        <div className="category">
            <div className="categoryTitle">
                {props.category}
                <ChevronRightIcon className='chevRight'></ChevronRightIcon>
            </div>
            <div className="product">
                {data.length} Products
            </div>
            <div className="row imgRow">
                {getImageData().map(directiveId => {
                    return (<div className="prodImg col-md-4"><img className="thumbnail" src={`${urlPrefix}${directiveId}`} alt="" key={directiveId}></img></div>)
                })}
            </div>
            {/* {props.category} Products :: {data.length} */}
        </div>
    )
}

export default ProductCategory;