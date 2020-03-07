import React from 'react'
import Customcard from '../commom/CustomCard'
const NewList = (props) => (
    <Customcard containerClass=' new-list-container'
        link="/lista"
    >
        <div onClick={props.newList}>
            <p className="title"> Adicionar Listas!!</p>
        </div>
    </Customcard>
)
export default NewList;