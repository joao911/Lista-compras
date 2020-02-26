import React from 'react'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import ListFooter from './ListFooter'
import CustomCard from '../commom/CustomCard'
import ListItem from './ListItem'
import './List.css'
const List = () => (
    <CustomCard  link="/lista"containerClass='list-container'
    link="/lista"
        footer={ <ListFooter/>
        }
    >
        <div>
            <p className="title">Mês</p>
            <div className="list-card-body">
                 <ListItem icon={faShoppingBasket} text="1 Item(s) Reatante"/>
                 <ListItem icon={faCheck} text="2 Item(s) Comprados"/>
              
            </div>
        </div>
    </CustomCard>
)
export default List;