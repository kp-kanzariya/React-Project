import React from 'react'
import Box from './DomScrollTrigger';

function ListItems() {

    const arr = [];
    for (let i = 1; i <= 50; i++) {
        arr.push(<li key={i}>{i}ListItems</li>)
    }
    return (
        <div>
            <ul>

               {arr}

            </ul>
            <Box />
            <ul>

                {arr}

            </ul>
        </div>
    )
}

export default ListItems