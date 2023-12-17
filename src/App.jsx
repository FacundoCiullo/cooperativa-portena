import './Styles/estilos.scss';
import NavBar from './components/NavBar/NavBar';
import Widget from './components/NavBar/Widget';
import Colors from "./components/Footer/Colors" ;
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Error404 from './components/Error404';
import Creditos from './components/Creditos';
import Obras from './components/Obras';
import Nosotros from './components/Nosotros';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Widget />
        <NavBar />
          <main>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/Obras"} element={<Obras />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route path={"/*"} element={<ItemListContainer />} />
              <Route path={"/Creditos"} element={<Creditos />} />
              <Route path={"/Nosotros"} element={<Nosotros />} />
              <Route path={"/*"} element={<Error404 />} />
            </Routes>
          </main>
        <Colors />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
