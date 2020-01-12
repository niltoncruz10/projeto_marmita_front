import React from 'react'
import { Row, Col, Card } from 'reactstrap'

import User from '../User'

function Home() {
  return (
    <div>
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
            <div>
              <p><b>Lorem</b></p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <br/>
              <p><b>Ipsum</b></p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </Card>
          <h5 className="subtitle">Experiences</h5>
          {/* <Experience />
          <Experience /> */}
        </Col>
      </Row>
    </div>
  )
}

export default Home

