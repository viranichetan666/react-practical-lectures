import React, { useState, useEffect } from 'react';

const allbooks = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'Eng' },
    { id: 3, name: 'Hindi' },
    { id: 4, name: 'ADM' },
]

const Hooks = () => {

    const [books, setBooks] = useState([]);
    const [bookInput, setBookInput] = useState("");

    useEffect(() => {
        // This is called only first time when component did Mount
        setBooks(allbooks)
    }, []);
    
    // useEffect(() => {
    //     console.log('this is called when any state change in this component');
    // });

    // useEffect(() => {
    //     console.log('this is only called when books will be changes');
    // }, [books]);

    // useEffect(() => {
    //     console.log('this is only called when bookInput will be changes');
    // }, [bookInput]);

    const addBookHandler = () => {
        const data = {
            id: Math.random,
            name: bookInput
        }
        setBooks((oldBooks) => [...oldBooks, data]);
        setBookInput("");
    }

    return (
        <div className="center-of-screen">
            <div>
                <div className="an-20 bold-text pb10">
                    Book list
                </div>
                <div>
                    {
                        books &&
                        books.map(e => {
                            return(
                                <div key={e.id} className="an-16 medium-text bluecolor light--text py10 px20 my10">
                                    { e.name }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt15">
                    <input 
                        className="an-16 demi-bold-text pa10" 
                        type="text" 
                        placeholder="Enter Bookname"
                        value={bookInput}
                        onChange={(e) => setBookInput(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button onClick={ addBookHandler } className="demo-button an-14 demi-bold-text mt20">
                        Add Book
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hooks;
