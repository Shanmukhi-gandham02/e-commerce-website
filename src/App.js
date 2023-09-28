import React, {useState} from 'react';
import './App.css';
import products from './data/productsData.json'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';

//import SideBar from './SideBar/SideBar';

function App() {
  const [selectedStyle, setSelectedStyle] = useState(null);

  //input filter
  const [query, setQuery] = useState("");

  const handleInputChange = e =>{
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !==-1
  );

  const handleChange = (event) => {
    setSelectedStyle(event.target.value);
    console.log(selectedStyle)
  };


  function filteredData(products, selected, query){
    let filteredProducts = products

    //filtering items
    if(query){
      filteredProducts = filteredItems
    }

    //selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(({gender, color, type, price, name}) => 
      gender.toLowerCase() === selected ||
      color.toLowerCase() === selected ||
      type.toLowerCase() === selected ||
      (price <= selected && price>=selected-100) ||
      // price <=selected ||
      name.toLowerCase() === selected
      );
    }

    return filteredProducts
    
  }

  const result = filteredData(products, selectedStyle, query);

console.log(query)
console.log(result.length)




  return (
    <div className="App">
      <BrowserRouter>
        
        <Nav sticky="top" />
        <Routes>
          <Route path='/' element={
            <Home 
                handleChange ={handleChange} 
                query={query} 
                handleInputChange={handleInputChange}
                result={result}
            />} 
          />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
