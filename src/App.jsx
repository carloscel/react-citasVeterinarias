import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPaciente } from "./components/ListadoPaciente"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  //Al parecer en las ultimas versiones de REACT ya no es necesario crear un useEffect para obtener el valor del localStorage. Sino que defrente ponerlo en el useState.

  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App

//los hook no pueden ir dentro de condicionales 
//los hook no puedes ir despues de un return