import './App.css'
import Navbar from './components/navbar/navbar'
import { ItemListContainer } from './components/itemlistcontainer/itemListContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx/ItemDetailContainer'


function App() {

  return (


    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>

          <Route path='/' element={<ItemListContainer greeting='HOLA' />} />
          <Route path='/categoria/:cid' element={<ItemListContainer greeting='HOLA' />} />

          <Route path='/detail/:pid' element={<ItemDetailContainer />} />


          <Route path='*' element={<Navigate to='/' />} />



        </Routes>


        <ItemListContainer saludar=", es el inicio del ecommerce" />
      </div>

    </BrowserRouter>
  )
}

export default App
