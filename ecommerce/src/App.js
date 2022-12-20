
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/NavBar/nav-bar";
import Authentication from "./routes/Authentication/authentication";
import Shop from "./components/Shop/shop";


const App = () => {

  return (
    <Routes>
      <Route path='/' element={ <Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
