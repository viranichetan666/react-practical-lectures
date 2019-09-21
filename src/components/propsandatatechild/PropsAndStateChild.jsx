import React from 'react';
import PropTypes from 'prop-types';

const PropsAndStateChild = ({ state1, state2, state3 }) => {
    return (
        <div className="an-16 medium-text pt20">
            <div>
                State 1 Value: <span className="redcolor--text">{ state1 }</span>
            </div>

            <div>
                State 2 Value: <span  className="redcolor--text">{ state2 }</span>
            </div>
            {
                state3 &&
                <div>
                    State 3 Value: <span  className="redcolor--text">{ String(state3) }</span>
                </div>
            }
        </div>
    );
};

PropsAndStateChild.propTypes = {
    state1: PropTypes.number.isRequired,
    state2: PropTypes.string.isRequired ,
    state3: PropTypes.bool.isRequired 
}

export default PropsAndStateChild;