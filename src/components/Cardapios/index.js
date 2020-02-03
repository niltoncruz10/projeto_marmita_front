import React, { Component } from 'react'

import Cardapio from './Cardapio'


function Cardapios(props) {
  return (
    <div className="cardapio-home">
      <p>
        <b>{props.produto.nome}</b>
      </p>
      <p>
        {props.produto.descricao}  
      </p>    
      <hr/>
    </div>
  )
}


export default Cardapios

