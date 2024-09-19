import { Outlet } from "react-router-dom"
import Header from "./components/Header"


function App() {

  return (
    <>
     <Header/>
     <div className="text-white h-full">
        <Outlet/>
     </div>
    </>
  )
}

export default App
