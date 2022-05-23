const comas = (texto) => {
  if (texto === 0) return texto
  let final = ''
  let despues = ''
  let negativo = false

  if (texto.includes('.')) {
    final = texto.substring(0, texto.indexOf('.'))
    despues = texto.substring(texto.indexOf('.'))
  } else {
    final = texto
  }

  if (parseFloat(texto) < 0) {
    negativo = true
    final = final.substring(1)
  }

  return negativo ? `−${parseFloat(final).toLocaleString()}${despues}` : parseFloat(final).toLocaleString() + despues
}

export default comas
