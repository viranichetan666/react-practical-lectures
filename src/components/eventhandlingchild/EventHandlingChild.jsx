import React from 'react';
import PropTypes from 'prop-types';

const EventHandlingChild = (props) => {
    const { 
        state1, 
        state2, 
        state3, 
        changeState1, 
        changeState2, 
        changeState3 
    } = props;

    return (
        <div className="an-16 medium-text pt20">
            <div>
                State 1 Value: <span className="redcolor--text">{ state1 }</span>
            </div>

            <div>
                <button onClick={ changeState1 } className="demo-button an-14 demi-bold-text mb20">
                    State1 Change
                </button>
            </div>

            <div>
                State 2 Value: <span  className="redcolor--text">{ state2 }</span>
            </div>

            <div>
                <button onClick={ changeState2 } className="demo-button an-14 demi-bold-text mb20">
                    State2 Change
                </button>
            </div>
            
            {
                state3 &&
                <div>
                    State 3 Value: <span  className="redcolor--text">{ String(state3) }</span>
                </div>
            }

            <div>
                <button onClick={ changeState3 } className="demo-button an-14 demi-bold-text mb20">
                    State3 Change
                </button>
            </div>
        </div>
    );
};

EventHandlingChild.propTypes = {
    state1: PropTypes.number.isRequired,
    state2: PropTypes.string.isRequired ,
    state3: PropTypes.bool.isRequired 
}

export default EventHandlingChild;