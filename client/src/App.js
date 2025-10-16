import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const [Brand, setBrand] = useState("");
  const [Price, setPrice] = useState(0);
  const [Kind, setKind] = useState("");
  const [Gender, setGender] = useState("");
  const [brandList, setBrandList] = useState([]);
  const addBrand = () => {
    Axios.post("http://localhost:3001/create", {
      Brand: Brand,
      Price: Price,
      Kind: Kind,
      Gender: Gender,
    }).then(() => {
      console.log("success");
    });
  };

  const getBrands = () => {
    Axios.get("http://localhost:3001/get").then((response)=> {
      console.log(response);
    });
      

  }

  return (
    <div className="App">
      <div className="information">
        <label>Brand:</label>
        <input
          type="text"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <label>Price:</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <label>Kind:</label>
        <input
          type="text"
          onChange={(event) => {
            setKind(event.target.value);
          }}
        />

        <label>Gender:</label>
        <input
          type="text"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />

        <button onClick={addBrand}>Add Cloth</button>
      </div>
      
      <div className="getB">
        <button onClick = {getBrands}>Show Brands</button>
      </div>
    </div>
  );
}

export default App;
