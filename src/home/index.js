import React from 'react'
import Customcard from '../commom/CustomCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import './Home.css'
const Home = (props) => (
    <div className='page-container'>
        <Customcard containerClass='new-list-container'>
        
            <div>
                <p className="title">Adicionar Novas Listas</p>
            </div>
        </Customcard>
        <Customcard containerClass='list-container'
        footer={
            <div className='list-footer'>
                <p>01/01/2019</p>
                <p>100.00</p>
            </div>
        }
        >
            <div>
                <p className="title">Mês</p>
                <div className="list-card-body">
                    <div className="list-card-item">
                        <FontAwesomeIcon icon={faShoppingBasket} size='sm' />
                        <p>1 Item(s) Restante</p>
                    </div>
                    <div className="list-card-item">
                        <FontAwesomeIcon icon={faCheck} size='sm' />
                        <p>2 Item(s) Comprados</p>
                    </div>
                </div>
            </div>
        </Customcard>

    </div>
)

export default Home;