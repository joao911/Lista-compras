import React from 'react'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import ListFooter from './ListFooter'
import CustomCard from '../commom/CustomCard'
import ListItem from './ListItem'
import './List.css'
import { checkPropTypes } from 'prop-types'
const List = (props) => (
    <CustomCard link="/lista" containerClass='list-container'
        link="/lista"
        footer={<ListFooter total={props.total} />
        }
    >
        <div>
            <p className="title">{props.list}</p>
            <div className="list-card-body">
                <ListItem icon={faShoppingBasket} text={`${props.openedItems} Item(s) Restante`} />
                <ListItem icon={faCheck} text={`${props.closedItems} Item (s) comprados`} />

            </div>
        </div>
    </CustomCard>
)
export default List;