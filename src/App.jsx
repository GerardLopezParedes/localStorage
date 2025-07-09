import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Carga inicial desde localStorage o array de false
  const [coloreado, setColoreado] = useState(() => {
    const saved = localStorage.getItem('estadoGrid')
    return saved ? JSON.parse(saved) : Array(16).fill(false)
  })

  function alternarColor(i) {
    const nuevoEstado = [...coloreado]
    nuevoEstado[i] = !nuevoEstado[i]
    setColoreado(nuevoEstado)
  }

  function netejar() {
    setColoreado(Array(16).fill(false))
  }

  function desar() {
    localStorage.setItem('estadoGrid', JSON.stringify(coloreado))
    alert('Estado guardado')
  }

  function carregar() {
    const saved = localStorage.getItem('estadoGrid')
    if (saved) {
      setColoreado(JSON.parse(saved))
    } else {
      alert('No hay estado guardado')
    }
  }

  return (
    <>
      <h1 className="title">Hello world!</h1>

      <div className="grid">
        {coloreado.map((actiu, i) => (
          <div
            key={i}
            onClick={() => alternarColor(i)}
            className={`celda ${actiu ? 'activo' : ''}`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className="botones">
        <button onClick={desar} type="button">
          Desar
        </button>
        <button onClick={netejar} type="button">
          Netejar
        </button>
        <button onClick={carregar} type="button">
          Carregar
        </button>
      </div>
    </>
  )
}

export default App
