import './App.scss'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Globalcontext from './components/context/Globalcontext'
import i18n from './components/i18n';
import Home from './pages/home/Home'


function App() {

  return (
    <>
    <Globalcontext>
       <Navbar />
       <Router>
        <Routes>
          <Route path='/' element={<Home /> } />
        </Routes>
       </Router>
       </Globalcontext>
    </>
  )
}

export default App
