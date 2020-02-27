import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ListItem from './listItem'
import Form from './form'
import { Creators as ListAction } from '../store/actions/list'
import './List.css'

class CreateList extends Component {
    addProduct =(product, list)=>[
        this.props.addProduct(product, list)
    ]
    render() {
        return (
            <div className="page-container">
                <Form addProduct={this.addProduct} />
                <div className="list-items-container">
                    <ListItem />
                </div>
            </div>
        )
    }
}


const mapSateteToProps = state => ({
    list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(ListAction, dispatch)

export default connect(mapSateteToProps, mapDispatchToProps)(CreateList);