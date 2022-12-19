
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/NavBar/nav-bar";
import SignIn from "./routes/SignIn/sign-in";

const Shop = () => { 
  return (
    <h1>Shop page</h1>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={ <Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
