import React from 'react';
import useInput from './useInput';

const CustomHooksDemo = () => {

    const [firstName, setFirstName] = useInput("chetan");
    const [lastname, setLastname] = useInput("virani");

    return (
        <div>
            <div className="an-18 bluecolor--text bold-text text-center py10">
                CustomHooksDemo 
            </div>
            <input 
                className="an-16 demi-bold-text pa10" 
                type="text"  
                value={firstName} 
                onChange={setFirstName}
            />
            <input   
                className="an-16 demi-bold-text pa10" 
                type="text"  
                value={lastname} 
                onChange={setLastname}
            />
            <div className="an-15 dmei-bold-text">
                {firstName}+ {lastname}
            </div>
        </div>
    )
}

export default CustomHooksDemo;