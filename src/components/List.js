import React from 'react'

const List = ({id,text,dltitems}) => {
    return (
        <>
            <div className='items'>
                <li>{text}</li>
                    <button className='dltbtn' onClick={()=>dltitems(id)}>
                       Delete -
                    </button>
                
            </div>
        </>
    )
}

export default List