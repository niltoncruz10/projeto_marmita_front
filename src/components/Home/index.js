import React, {Component} from 'react'
import axios from 'axios'
import { Row, Col, Card, Container } from 'reactstrap'


import User from '../User'
import Main from '../Main'

import './style.css'
import Cardapios from '../Cardapios'

class Home extends Component {

  state = {
    cardapio: []
  }

  componentDidMount() {
    axios.get('/produto').then(
      response => {
        this.setState({cardapio: response.data})
      }      
      
    )
  }

  render() {
    console.log(this.state.cardapio);    
    const cardapios = this.state.cardapio.map(produto => <Cardapios key={produto.id} produto={produto} />)

    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h4 className="subtitle">Cardápio do dia</h4>        
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <User />
          </Col>
          <Col md={8}>
            <Card>
                {cardapios}
                
               
            </Card>
            <h5 className="subtitle">Experiences</h5>
           
          </Col>
        </Row>
      </Container>
  
    )
  }
}

export default Home

