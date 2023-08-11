
import { Toaster, toast } from 'sonner'
import './App.css'
import Draw from './components/Draw'
import { SketchPicker } from 'react-color'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#037A68');
  const [hidden, setHidden] = useState(false);
  const pickerStyle = {
    default: {
      picker: {
        position: "absolute",
        top: "30px",
        left: "100px",
        zIndex: 6
      }
    }
  };
  return (
    <>
      <h3>
        Drawer by{" "}
        <a
          href="https://mariocanales.es"
          target="_blank"
          rel="noreferrer"
          style={{ position: "relative", zIndex: "0" }}
        >
          {" "}
          Mario Canales{" "}
        </a>
      </h3>
      <Toaster position="top-center" />
      <button
        onClick={() =>
          toast(
            "Aplicación no soportada para dispositivos móviles. Haz click para empezar a dibujar. Solo dibujaras mientras mantengas pulsado el botón"
          )
        }
        style={{ position: "relative", zIndex: "2" }}
      >
        Instrucciones de uso
      </button>
      <button
        onClick={() => setHidden(!hidden)}
        style={{ position: "relative", zIndex: "2" }}
      >
        {hidden ? "Cerrar paleta de colores" : "Abrir paleta de colores"}
      </button>
      {hidden && (
        <SketchPicker
          styles={pickerStyle}
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}

      <Draw strokeColor={color} />
    </>
  );
}

export default App
