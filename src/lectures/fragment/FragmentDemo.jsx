import React, { Fragment } from 'react';

const FragmentDemo = props => {
    return (
        <Fragment>
            <div className="an-20 bold-text text-center pt50">
                Fragment Demo
            </div>
            <div className="an-18 bold-text text-center bluecolor--text pt20">
                Using Fragment you can return multiple root element. Fragment will not make element in the DOM.
            </div>
            <div className="an-20 medium-text text-center pt50">
                Root1
            </div>
            <div className="an-20 medium-text text-center pt50">
                Root2
            </div>
        </Fragment>
    );
};

export default FragmentDemo;