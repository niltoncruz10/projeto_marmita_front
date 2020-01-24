import React from 'react'



function Cliente(props) {
  const link = '/cliente/' + props.cliente.login
  return (
    <tr>
      <td><a href={link}>{props.cliente.id}</a></td>
      <td><a href={link}>{props.cliente.login}</a></td>
      <td>{props.cliente.url}  </td>
      <td>Editar | Excluir</td>
    </tr>
  )
}

export default Cliente
