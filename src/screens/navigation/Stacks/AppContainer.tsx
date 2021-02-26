import React from "react"
import TodoForm from "../../todo/TodoForm"
import { RegisterFunctionContext, RegisterTodoContext, useRegisterTodoContext } from "./TodoContext"

const AppContainer = () => {
    const { currentState, onActionTodo } = useRegisterTodoContext()
    return (<RegisterTodoContext.Provider value={currentState}>
        <RegisterFunctionContext.Provider value={onActionTodo}>
            <TodoForm />
        </RegisterFunctionContext.Provider>

    </RegisterTodoContext.Provider>)
}
export default AppContainer