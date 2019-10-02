// HOC.js

import React, { useState, useEffect } from 'react';

const HigherOrder = (HocComponent, data) => {
    
    return  function WrappedComponent() {
        const [state, setState] = useState(null)
        
        useEffect(() => {
            console.log('HocComponent', data)
            setState(data);
        }, []);
        return (
            <div>
                {
                    state &&
                    <HocComponent data={ state }></HocComponent>
                }
            </div>

        );
    } 
}

export default HigherOrder;