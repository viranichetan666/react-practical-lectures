import React from 'react';
import ChildComponent from 'components/compositionchild/ChildComponent';
// import Child2 from 'components/compositionchild/Child2';
// import Child3 from 'components/compositionchild/Child3';

const Composition = () => {
    return (
        <div className="center-of-screen">
            <div>
                <ChildComponent>
                    <div className="an-20 demi-bold-text redcolor--text">
                        Hello Child
                    </div>
                </ChildComponent>

                {/* <ChildComponent
                    child2={ <Child2 /> }
                    child3={ <Child3 /> } 
                /> */}
            </div>
        </div>
    );
}

export default Composition;
