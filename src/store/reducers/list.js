import { Types } from '../actions/list'

import {createSelector} from 'reselect'
import uuidv1 from 'uuid/v1'
import { ListItemSecondaryAction } from '@material-ui/core';
import { getAllByPlaceholderText } from '@testing-library/react';

const initialState = {
    list: null,
    items: []
}
export default function list(state = initialState, action) {
    switch (action.type) {
        case Types.NEW_LIST:
            return{
                ...initialState, date: getDate()
            }
        case Types.ADD_PRODUCT:
            return {
                ...state,
                list: action.list,
                items: [
                    ...state.items,
                    { ...action.product, total: getItemTotal(action.product), id: uuidv1(), checked:false}
                ]
            };
            case Types.DELETE_PRODUCT:
                return{
                    ...state,
                    items: state.items.filter(item => item.id !== action.productId)
                }
            case Types.TOGGLE_PRODUCT:
                return{
                    ...state,
                    items: toggleItem(state.items, action.productId)
                }
                case Types.UPDATE_PRODUCT:
                    return{
                        ...state,
                        list: action.list,
                        items:updateProduct(state.items, action.product)
                    }

        default:
            return state;
    }
}

function getItemTotal(product) {
    return product.price * product.quantity
}

function updateProduct(items, product) {
    const index = items.findIndex(item => item.id === product.id);
    return [
      ...items.slice(0, index),
      { ...product, total: getItemTotal(product) },
      ...items.slice(index + 1),
    ];  
  }
function toggleItem(items, productId){
    const index = items.findIndex(item => item.id === productId);
    return[
        ...items.slice(0, index), // tods os items antes do item ser modificado
        {...items[index], checked: !items[index].checked }, // item atualizado
       ...items.slice(index + 1) //todos os items do item ser modificado
    ];
}

function getDate(){
    const date = new date();
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'}
    return date.toLocaleDateString('pt-br', options)
}
// Essas funçoes vão fazer os items do hoem funcionar items restantes, items comprados, e total
// obs todas foram criadas ultilizando o componente creatorSelect do reselect

//essa faz o total funcionar
export  const getListTotal = createSelector(
    state => state.list.items, 
    items => {
        /* este console serve para saber como o selector do redux funciona */
        console.log('get items total')
        return items.reduce((total, item) => total + item.total, 0);
    }
);

// Essa faz os items abertos funcionar
export const getOpenedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => !item.checked).length
)

//Essa função faz o s items que estão fechados funcionar
export const getClosedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => item.checked).length
)
