import React from 'react'


const Searchbox = (props) => {
        return (
            <div className="pa2">
                <input
                 className="pa3 ba b--green bg-lightest-blue"
                type="search"
                name="search"
                placeholder="search"
                value={props.search}
                onChange={props.handleChange}
                />
            </div>
        )
}

export default Searchbox
