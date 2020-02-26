import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

import Form from './form'
import CustomCard from '../commom/CustomCard'



import './List.css'



const CreateList = () => (
    <div className="page-container">
        <Form />
        <div className="list-items-container">
            <CustomCard
            Link =""
            containerClass="list-item"
            >
                
                <div className="list-item-header">

                </div>
            </CustomCard>
        </div>
    </div>
)
export default CreateList;