import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Card from "./components/Card";
import intro_data from "./db/Intro";
import Intro from "./components/Intro";
import "./index.css";
import Slider1 from "./Slider/Slider1";
import Slider2 from "./Slider/slider2";
import "./new-component.css"
import Footer from "./components/Footer";
import Up from "./components/Up";
import Duda from "./components/Duda";
import Slider3 from "./Slider/slider3";
import Slider4 from "./Slider/slider4";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );


  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ company,title }) =>
          company === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, newPrice,description,Talla,rojo, negro, azul, blanco }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          Talla={Talla}
          description={description}
          newPrice={newPrice}
          rojo =  {rojo}
          negro= {negro}
          azul= {azul}
          blanco= {blanco}
        />
      )
    );
  }

  

  const result = filteredData(products, selectedCategory, query);
  
  return (
    <>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Duda/>
      {intro_data.map((el) =>{ return(<Intro img={el.img} text={el.text} key={el.id}/>)})}
      <Slider1 />
      <Slider2/>
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      <Up/>
      <Slider3/>
      <Slider4/>
      <Footer/>
    </>
  );
}

export default App;
