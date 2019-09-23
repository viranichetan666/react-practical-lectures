import React, { useState } from 'react';

const Forms = () => {

    const [firstname, setFirstname] = useState("");

    return (
        <div className="center-of-screen">
            <div>
                <input 
                    className="an-16 demi-bold-text pa10" 
                    type="text" 
                    value={ firstname } 
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <div className="an-16 demi-bold-text redcolor--text pt20">
                    Your FirstName is:  { firstname }
                </div>
            </div>
        </div>
    )
}

export default Forms;