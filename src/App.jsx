import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'

function App() {

  const site = useLocation().pathname.slice(1).split("/")[0]
  
  
  return (
    <div className='App'>
      <Header />
      <main className={site ? site : "home"}>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default App
