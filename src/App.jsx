import './App.css'
import Navbar from './components/navbar/navbar'
import { ItemListContainer } from './components/itemlistcontainer/itemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { CartContainer } from './components/cartcontainer/CartContainer'

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='HOLA' />} />
          <Route path='/categoria/:cid' element={<ItemListContainer greeting='HOLA' />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer/>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>        
      </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}
export default App
