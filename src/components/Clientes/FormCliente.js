import React from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import './style.css'

function FormCliente() {
  return (    
    <Container>
      <h1>Cadastrar novo cliente</h1>    
      <Form>
        <FormGroup>
          <Label for="nome">Nome: </Label>
          <Input type="text" name="nome" id="nome" placeholder="Nome do cliente" />
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail: </Label>
          <Input type="email" name="email" id="email" placeholder="E-mail do cliente" />
        </FormGroup>
        <FormGroup className="botoes">
          <Button>Cancelar</Button>
          <Button color="primary">Salvar</Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default FormCliente
