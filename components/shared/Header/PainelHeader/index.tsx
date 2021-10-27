import React from 'react';
import styles from './styles.module.css';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Logo';

const PainelHeader: React.FC = () => {
  return (
    <Row className={styles.background}>
      <Col md={8} className="mt-2">
        <Logo />
      </Col>

      <Col md={4} className="mt-2 text-center">
        <Row>
          <Col md={8} className="mb-4 mb-md-0">
            <InputGroup>
                <FormControl placeholder="Search game" className={styles.input} />
            </InputGroup>
          </Col>

          <Col md={4}>
            <Row>
              <Col md={6} xs={6}>
                <FontAwesomeIcon icon={faSearch} color="var(--color-gray-light)"/>
              </Col>
              <Col md={6} xs={6}>
                <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default PainelHeader;