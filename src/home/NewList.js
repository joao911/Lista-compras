import React from 'react'
import Customcard from '../commom/CustomCard'
const NewList = () => (
    <Customcard containerClass=' new-list-container'
        link="/lista"
    >
        <div>
            <p className="title"> Adicionar Listas!!</p>
        </div>
    </Customcard>
)
export default NewList;