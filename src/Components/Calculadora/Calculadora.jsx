import React, { useState } from 'react'
import './Calculadora.css'
import Boton from '../Botones/Botones'
import {
  add, subtract, multiply, divide, modules,
} from '../../utils/aritmeticos'
import comas from '../../utils/comas'

function Calculadora() {
  const [texto, setTexto] = useState('0')
  const [primerNumero, setPrimerNumero] = useState(null)
  const [operacion, setOperacion] = useState(null)

  const botones = [
    { titulo: 'AC', tipo: 'funcion' },
    { titulo: '±', tipo: 'funcion' },
    { titulo: 'mod', tipo: 'operacion' },
    { titulo: '÷', tipo: 'operacion' },
    { titulo: '7', tipo: 'numero' },
    { titulo: '8', tipo: 'numero' },
    { titulo: '9', tipo: 'numero' },
    { titulo: '×', tipo: 'operacion' },
    { titulo: '4', tipo: 'numero' },
    { titulo: '5', tipo: 'numero' },
    { titulo: '6', tipo: 'numero' },
    { titulo: '−', tipo: 'operacion' },
    { titulo: '1', tipo: 'numero' },
    { titulo: '2', tipo: 'numero' },
    { titulo: '3', tipo: 'numero' },
    { titulo: '+', tipo: 'operacion' },
    { titulo: '0' },
    { titulo: '.' },
    { titulo: '=' },
  ]

  const handleClickBotones = (titulo) => () => {
    let sePuede = true
    if (texto.length >= 9) {
      sePuede = false
    }

    const numero = parseFloat(texto)

    if (titulo === 'AC') {
      setTexto(0)
      setPrimerNumero(null)
      setOperacion(null)
      return
    }

    if (titulo === '=') {
      if (!operacion) return

      if (operacion === '+') {
        const sumar = add(primerNumero, parseFloat(texto)).toString()
        if (sumar > 999999999) {
          setTexto('ERROR!')
        } else {
          setTexto(sumar)
        }
      } else if (operacion === '−') {
        const restar = subtract(primerNumero, parseFloat(texto)).toString()
        if (restar < 0) {
          setTexto('ERROR!')
        } else {
          setTexto(restar)
        }
      } else if (operacion === '×') {
        let multiplicar = multiply(primerNumero, parseFloat(texto)).toString()
        if (multiplicar > 999999999) {
          setTexto('ERROR!')
        }
        const multLen = multiplicar.length
        if (multLen > 9) {
          const nuevoL = multLen - 9
          multiplicar = multiplicar.substring(0, multiplicar.length - nuevoL)
          setTexto(multiplicar)
        } else {
          setTexto(multiplicar)
        }
      } else if (operacion === '÷') {
        let dividir = divide(primerNumero, parseFloat(texto)).toString()
        const divLenght = dividir.length
        if (divLenght > 9) {
          const nuevoL = divLenght - 9
          dividir = dividir.substring(0, dividir.length - nuevoL)
          setTexto(dividir)
        } else {
          setTexto(dividir)
        }
      } else if (operacion === 'mod') {
        const mod = modules(primerNumero, parseFloat(texto)).toString()
        setTexto(mod)
      }

      setPrimerNumero(null)
      setOperacion(null)
      return
    }

    if (titulo === '+') {
      if (operacion != null) {
        if (operacion === '+') {
          setPrimerNumero(add(primerNumero, parseFloat(texto)))
        } else if (operacion === '−') {
          setPrimerNumero(subtract(primerNumero, parseFloat(texto)))
        } else if (operacion === '×') {
          setPrimerNumero(multiply(primerNumero, parseFloat(texto)))
        } else if (operacion === '÷') {
          setPrimerNumero(divide(primerNumero, parseFloat(texto)))
        } else if (operacion === 'mod') {
          setPrimerNumero(modules(primerNumero, parseFloat(texto)))
        }
      } else {
        setPrimerNumero(parseFloat(texto))
      }
      setTexto('0')
      setOperacion('+')
      return
    }

    if (titulo === '−') {
      if (operacion != null) {
        if (operacion === '+') {
          setPrimerNumero(add(primerNumero, parseFloat(texto)))
        } else if (operacion === '−') {
          setPrimerNumero(subtract(primerNumero, parseFloat(texto)))
        } else if (operacion === '×') {
          setPrimerNumero(multiply(primerNumero, parseFloat(texto)))
        } else if (operacion === '÷') {
          setPrimerNumero(divide(primerNumero, parseFloat(texto)))
        } else if (operacion === 'mod') {
          setPrimerNumero(modules(primerNumero, parseFloat(texto)))
        }
      } else {
        setPrimerNumero(parseFloat(texto))
      }
      setTexto('0')
      setOperacion('−')
      return
    }

    if (titulo === '×') {
      if (operacion != null) {
        if (operacion === '+') {
          setPrimerNumero(add(primerNumero, parseFloat(texto)))
        } else if (operacion === '−') {
          setPrimerNumero(subtract(primerNumero, parseFloat(texto)))
        } else if (operacion === '×') {
          setPrimerNumero(multiply(primerNumero, parseFloat(texto)))
        } else if (operacion === '÷') {
          setPrimerNumero(divide(primerNumero, parseFloat(texto)))
        } else if (operacion === 'mod') {
          setPrimerNumero(modules(primerNumero, parseFloat(texto)))
        }
      } else {
        setPrimerNumero(parseFloat(texto))
      }
      setTexto('0')
      setOperacion('×')
      return
    }

    if (titulo === '÷') {
      if (operacion != null) {
        if (operacion === '+') {
          setPrimerNumero(add(primerNumero, parseFloat(texto)))
        } else if (operacion === '−') {
          setPrimerNumero(subtract(primerNumero, parseFloat(texto)))
        } else if (operacion === '×') {
          setPrimerNumero(multiply(primerNumero, parseFloat(texto)))
        } else if (operacion === '÷') {
          setPrimerNumero(divide(primerNumero, parseFloat(texto)))
        } else if (operacion === 'mod') {
          setPrimerNumero(modules(primerNumero, parseFloat(texto)))
        }
      } else if (operacion === null) {
        setPrimerNumero(parseFloat(texto))
      }
      setTexto('0')
      setOperacion('÷')
      return
    }

    if (titulo === 'mod') {
      if (operacion != null) {
        if (operacion === '+') {
          setPrimerNumero(add(primerNumero, parseFloat(texto)))
        } else if (operacion === '−') {
          setPrimerNumero(subtract(primerNumero, parseFloat(texto)))
        } else if (operacion === '×') {
          setPrimerNumero(multiply(primerNumero, parseFloat(texto)))
        } else if (operacion === '÷') {
          setPrimerNumero(divide(primerNumero, parseFloat(texto)))
        } else if (operacion === 'mod') {
          setPrimerNumero(modules(primerNumero, parseFloat(texto)))
        }
      } else {
        setPrimerNumero(parseFloat(texto))
      }
      setTexto('0')
      setOperacion('mod')
      return
    }

    if (titulo === '±' && texto.length < 9) {
      setTexto((numero * -1).toString())
      return
    }

    if (texto[texto.length - 1] === '.') {
      setTexto(texto + titulo)
    } else if (sePuede) {
      setTexto(parseFloat(numero + titulo).toString())
    }

    if (titulo === '.') {
      if (texto.includes('.')) return

      setTexto(`${texto}.`)
    }
  }

  return (
    <div className="CalculadoraContainer">
      <div className="ContenedorParteSuperior">
        <p className="tituloLab" id="txtArriba">Laboratorio 8: Calculadora React</p>
        <p className="nombreLab" id="txtArriba">Javier Mombiela</p>
      </div>
      <div className="ContenedorPantalla">
        {comas(texto)}
      </div>
      <div className="Contenedorbotones">
        {
          botones.map((boton) => (
            <Boton onButtonClick={handleClickBotones} titulo={boton.titulo} tipo={boton.tipo} />
          ))
        }
      </div>
      <div className="ContenedorInferior" />
    </div>
  )
}

export default Calculadora
