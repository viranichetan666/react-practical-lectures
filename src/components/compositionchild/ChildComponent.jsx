import React,{ Fragment } from 'react'

const ChildComponent = (props) => {
    return (
        <Fragment>
            <div>
                { props.children }
            </div>

            <div>
                { props.child2 }
            </div>

            <div>
                { props.child3 }
            </div>
        </Fragment>
    )
}

export default ChildComponent