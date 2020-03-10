import React from 'react'
import Customcard from '../commom/CustomCard'
const NewList = (props) => (
    <Customcard containerClass=' new-list-container'
        link="/lista/novo"
        action={props.NewList}
    >
        <div>
            <p className="title"> Adicionar Listas!!</p>
        </div>
    </Customcard>
)
export default NewList;