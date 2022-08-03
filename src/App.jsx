import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPaciente } from "./components/ListadoPaciente"

function App() {

   return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 flex">
        <Formulario />
        <ListadoPaciente />
      </div>
      
    </div>
  )
}

export default App

//los hook no pueden ir dentro de condicionales 
//los hook no puedes ir despues de un return