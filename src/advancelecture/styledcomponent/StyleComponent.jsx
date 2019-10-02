import React from 'react';
import StyleComponentWrapper from './component.style'

const StyleComponent = () => {
    return (
        <StyleComponentWrapper>
            <div className="pt100">
                <div className="an-18 bluecolor--text bold-text text-center py10">
                    Style Component demo
                </div>
                <div className="myclass">
                    My class content
                </div>
            </div>
        </StyleComponentWrapper>
    );
};

export default StyleComponent;

// Document: https://www.styled-components.com/docs/basics#coming-from-css