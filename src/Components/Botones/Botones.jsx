/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import './Botones.css'

function Botones({ titulo, tipo, onButtonClick }) {
  return (
    <div className={`BotonesContainer ${titulo === '0' ? 'cero' : titulo}`} id={tipo} onClick={onButtonClick(titulo)}>{titulo}</div>
  )
}

export default Botones
