import React,{ useEffect, useState } from 'react'
import todoActions from 'redux/todo/actions'
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const { getTodo, requestAddTodo, requestDeleteTodo } = todoActions

const ReduxSagaDemo = (props) => {

    const [input, setInput] = useState("")

    const { todos, getTodo } = props;

    useEffect(() => {
        getTodo();
    }, [getTodo]);

    const handleAddTodo = () => {
        if(input !== "") {
            props.requestAddTodo(input);
        }
    }

    return (
        <div>
            <div className="an-20 bold-text bluecolor--text text-center py20">
                TODO List
            </div>
            {
                todos && 
                todos.map((e,i) => {
                    return (
                        <div key={i} className="an-20 dark light--text text-center py10 ma10 flex-x">
                           <div className="flex-1">
                            {e.name}
                           </div>
                           <div className="an-14 redcolor--text mr10 cursor-pointer" onClick={() => props.requestDeleteTodo(e.id)}>
                               Delete
                           </div>
                        </div>
                    )
                })
            }
            <div className="text-center">
                <input 
                    type="text" 
                    placeholder="Enter Todo Name"  
                    className="an-16 pa10 ma10 demi-bold-text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div>
                    <button className="pa10 cursor-pointer" onClick={handleAddTodo}>ADD TODO</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos
    }
}

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        {
            getTodo,
            requestAddTodo,
            requestDeleteTodo
        }
    )
)(ReduxSagaDemo);