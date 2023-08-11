
import { Toaster, toast } from 'sonner'
import './App.css'
import Color from './components/Color'
import Draw from './components/Draw'

function App() {

  return (
    <>
    <Toaster position="top-center" />
    <button onClick={() => toast('Haz click para empezar a dibujar. Solo dibujaras mientras mantengas pulsado el botón')} style={{position: 'relative', zIndex:'2'}}>
        Instrucciones de uso
      </button>
    <Color  style={{position: "absolute", top:0}}/>
      <h3 >Drawer by <a href="https://mariocanales.es" target="_blank" rel="noreferrer" style={{position: 'relative', zIndex: '2'}}> Mario Canales </a></h3>
      <Draw />
    </>
  )
}

export default App
