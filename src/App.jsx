import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Container } from "@mui/material"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from "./contex/cartContext"
import Carrito from "./components/Carrito"
import Checkout from "./components/Checkout"
import Novedades from "./components/Novedades"
import Ofertas from "./components/Ofertas"


function App() {

  


  return (
    <CartProvider>

      <BrowserRouter>
        <Container sx={{ boxShadow: 3, backgroundColor: '#673ab7', textAlign: 'center'}}>
          <NavBar/>
        </Container>

        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route exact path='/producto/:id' element={<ItemDetailContainer/>} />
          <Route exact path='/carrito' element={<Carrito/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
          <Route exact path='/novedades' element={<Novedades/>} />
          <Route exact path='/ofertas' element={<Ofertas/>} />
          
        </Routes>

    



      </BrowserRouter>
    </CartProvider>      
    
  )
}

export default App
