import React from 'react'



function Cliente(props) {
  return (
    <tr>
      <td>{props.cliente.id}</td>
      <td>{props.cliente.login}</td>
      <td>{props.cliente.url}  </td>
      <td>Editar | Excluir</td>
    </tr>
  )
}

export default Cliente
