import { createContext } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './products';
import Home from './Home';
import Navbar from './navbar';
import {data} from './data/products';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [products, setProducts] = useState([...data]);
  // const [productCategories, setCategories] = useState([]);

  // useEffect(() => {
  //   filterCategories();
  // }, []);

  const filterCategories = () => {
    const _tempCategories = [...new Set(data.map(product => product.secondary_category.name))];
    return _tempCategories;
  }

  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <div className="products">
          <ObjContext.Provider value={[...data]}>
            <Routes>
              <Route path='/' element={<Home />} exact/>
              <Route path='/products' element={<Products categories={filterCategories()}/>} exact/>
            </Routes>
          {/* <Products ></Products> */}
          </ObjContext.Provider>
        </div> 
        
      </BrowserRouter>          
    </div>
  );
}
export const  ObjContext = createContext();
export default App;
