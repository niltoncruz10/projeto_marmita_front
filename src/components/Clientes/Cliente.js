import React from 'react'



function Cliente(props) {
  return (
    <tr>
      <td>{props.cliente.id}</td>
      <td>{props.cliente.nome}</td>
      <td>{props.cliente.email}  </td>
      <td>Editar | Excluir</td>
    </tr>
  )
}

export default Cliente
