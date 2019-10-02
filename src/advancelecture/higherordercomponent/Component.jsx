import React from 'react';
import HigherOrder from './HigherOrder';

const tempData = [
    {
        id: 1,
        name: 'Chetan'
          
    },
    {
        id: 2,
        name: 'Dhruvesh'
    },
    {
        id: 3,
        name: 'Harsh'
    }
  ];

const Component = ({ data }) => {
    
    return (
        <div>
            <div className="an-18 bluecolor--text bold-text text-center pt100">
                Example Of Higher Order Component
            </div>
            <div>
                {
                    data && 
                    data.map(e => {
                        return (
                            <div key={e.id} className="pa10 ma10 text-center dark light--text">
                                {e.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
const WrappedComponent = HigherOrder(Component, tempData);
export default WrappedComponent;