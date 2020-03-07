import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ListItem from './listItem'
import Form from './form'
import { Creators as ListActions } from '../store/actions/list'
import './List.css'

class CreateList extends Component {

    addProduct = (product, list) => {
        this.props.addProduct(product, list)
    }
    render() {
        return (
            <div className="page-container">
                <Form addProduct={this.addProduct}
                    updateProduct={this.props.updateProduct}
                />

                <div className="list-items-container">
                    {this.props.list.items.map(item =>
                        <ListItem item={item}
                            toggleProduct={this.props.toggleProduct}
                            deleteProduct={this.props.deleteProduct}
                            key={item.id}
                        />)}
                </div>
            </div>
        )
    }
}


const mapSateteToProps = state => ({
    list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapSateteToProps, mapDispatchToProps)(CreateList);