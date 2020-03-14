import React from 'react'

const ListFooter = (props) => (
    <div className='list-footer'>
        <p>DEV JP</p>
        <p>{props.total}</p>
    </div>
)

export default ListFooter;