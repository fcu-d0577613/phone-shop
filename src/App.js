import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/products/Product";
import AbericTable from "./components/allclass/AbericTable";
import MyTicket from "./components/myticket/MyTicket";
import TrainList from "./components/trainList/TrainList";
import Regieter from "./components/member/Register";
import Login from "./components/member/Login";
import TodoList from "./components/trainList/TodoList";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/products" element={ <Products /> } />
          <Route exact path="/products/:id" element={ <Product /> } />
          <Route exact path="/myclass" element={ <AbericTable  /> } />
          <Route exact path="/trainMySelf" element={ <TrainList /> } />
          <Route exact path="/myticket" element={ <MyTicket /> } />

          <Route exact path="/register" element={ <Regieter /> } />
          <Route exact path="/login" element={ <Login /> } />
      </Routes>
    </>
  );
}

export default App;
