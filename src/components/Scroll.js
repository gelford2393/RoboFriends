import React from 'react'

const Scroll = (props) => {
    return (
        <div className="pa3" style={{overflowY: 'scroll', border:'5px solid white', height:'100vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll
