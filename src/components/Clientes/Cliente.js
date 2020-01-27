import React from 'react'



function Cliente(props) {
  const link = '/cliente/' + props.cliente.id
  return (
    <tr>
      <td><a href={link}>{props.cliente.id}</a></td>
      <td><a href={link}>{props.cliente.nome}</a></td>
      <td>Dia {props.cliente.data_pagamento}  </td>
      <td>R$ {props.cliente.saldo}</td>
      <td>Editar | Excluir</td>
    </tr>
  )
}

export default Cliente
