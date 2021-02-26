import React from "react"
import {  SafeAreaView, View } from "react-native"
import AddTaskForm from "./components/addTask/AddTaskForm"
import TodoList from "./components/todolist/TodoList"

const TodoForm =()=>{

    return (
        <SafeAreaView style={{flex:1, marginHorizontal: 20}}>
            <AddTaskForm/>
            <TodoList/>
        </SafeAreaView>
    )
}
export  default TodoForm