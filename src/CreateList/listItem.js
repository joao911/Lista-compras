import React from 'react'
import CustomCard from '../commom/CustomCard'
import Checkbox from '@material-ui/core/Checkbox'
import Typografy from '@material-ui/core/Typography'

import ListItemFooter from './listItemFooter'

const listItem = ({ item, deleteProduct,  toggleProduct, list}) => (
    <CustomCard
        Link="#"
        image="data:image/jpeg;base64,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"
        containerClass="list-item"
        footer={<ListItemFooter 
            list={list}
            deleteProduct={deleteProduct}
             item={item} />}
        action ={() => toggleProduct(item.id)}
    >
        <div>
            <div className="list-item-header">
                <Typografy variant="subtitle1" component="h2">
                    {item.product}
                </Typografy>
                <Checkbox checked={item.checked}/>
            </div>
            <Typografy component="p">{item.quantity} {item.unit}</Typografy>
            <Typografy>R$ {item.price}</Typografy>
        </div>
    </CustomCard>
)
export default listItem;