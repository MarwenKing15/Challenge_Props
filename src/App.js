import './App.css';
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cars from "./Components/Cars";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Cars cars={[{ name: "Ferrari LaFerrari Aperta", price: "4.8M $", imgSrc:"https://images7.alphacoders.com/877/thumb-1920-877623.jpg"}, 
    { name: "Porsche 911 Turbo S", price: "275K $ ", imgSrc:"https://wallpapercave.com/wp/wp3843018.jpg"}, 
    { name: "Lamborghini Veneno Roadster ", price: "8.3M $", imgSrc:"https://www.alainclass.com/wp-content/uploads/2019/07/1170-desi-VENENO-47-copy.jpg"},
    { name: "Bugatti La Voiture Noire", price: "18.7M $", imgSrc:"https://www.teahub.io/photos/full/86-865738_bugatti-la-voiture-noire.jpg"},
    { name: "Koenigsegg Jesko", price: "3M $", imgSrc:"https://cdn.motor1.com/images/mgl/GJxjx/s1/koenigsegg-jesko-in-lucerne.jpg"},
    { name: "McLaren 720S Spider", price: "583K $", imgSrc:"https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1920&hei=1080"}]}/>
    <Footer/>
    </div>
  );
}

export default App;
