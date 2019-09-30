import React, { useReducer, useEffect, useMemo } from 'react';
import { initialState, reducers } from './todoReducers';

const data = [
    {
        id: 1,
        text: 'design changed'
    },
    {
        id: 2,
        text: 'Metting'
    },
    {
        id: 3,
        text: 'Developing API'
    },
    {
        id: 4,
        text: 'Client Call'
    }
]

const UseReducerDemo = () => {

    const [state, dispatch] = useReducer(reducers, initialState);
    const { todos, todoInput, searchText } = state;

    const filterTodos = useMemo(() => {
        return todos.filter(a => a.text.toLowerCase().includes(searchText.toLowerCase()))
    }, [searchText, todos])

    useEffect(() => {
        dispatch({
            type: 'setMyTodos',
            todos: data
        })
    }, []);

    const deleteTodo = (id) => {
        dispatch({
            type: 'deleteTodod',
            id
        })
    }

    const addTodo = (text) => {
        if(text !== "") {
            dispatch({
                type: 'addTodo',
                text
            })
        }
        dispatch({
            type: 'setTodoInput',
            text:""
        }) 
    }

    const settodoText = (e) => {
        dispatch({
            type: 'setTodoInput',
            text: e.target.value
        }) 
    }

    const setSearchInput = (e) => {
        dispatch({
            type: 'setSearchInput',
            text: e.target.value
        }) 
    }


    return (
        <div>
            <div className="an-18 bold-text redcolor--text py15 text-center">
                UseReducer Demo
            </div>
            <input 
                className="an-16 demi-bold-text fill-width" 
                type="text"  
                value={searchText} 
                onChange={setSearchInput}
                placeholder="search todo"
            />

            <div>
                {
                    filterTodos &&
                    filterTodos.map((todo,i) => {
                        return (
                            <div key={i} className="an-12 py5 my5 dark light--text text-center flex-x">
                                <div className="flex-1">
                                    { todo.text } 
                                </div>
                                <div onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="text-center">
                <input 
                    className="an-16 demi-bold-text fill-width" 
                    type="text"  
                    value={todoInput} 
                    onChange={settodoText}
                />
                <div>
                    <button 
                        className="demo-button an-14 demi-bold-text px20 my20" 
                        onClick={() => addTodo(todoInput)}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducerDemo;







// function useReducer(reducer, initialState) {
//     const [state, setState] = useState(initialState);
  
//     function dispatch(action) {
//       const nextState = reducer(state, action);
//       setState(nextState);
//     }
  
//     return [state, dispatch];
//   }