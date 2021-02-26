import { yupResolver } from "@hookform/resolvers/yup"
import React, { useCallback } from "react"
import { Controller, useForm } from "react-hook-form"
import { StyleSheet, View, Keyboard } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import Button from "../../../components/Button"
import TextInput from "../../../components/TextInput"
import { useTodoFunction, useTodoState } from "../../../navigation/Stacks/TodoContext"
import { valid } from "./valid"

const AddTaskForm = () => {
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(valid)
        , defaultValues: { task: "" }
    })
    const { onSaveItem } = useTodoFunction()
    const { list } = useTodoState();

    const AddTask = useCallback(({ task }: { task: string }) => {
        let id = list.length === 0 ? 0 : list[list.length - 1].id + 1
        Keyboard.dismiss();
        onSaveItem({ id: id, title: task })
        reset()
    }, [onSaveItem, list])
    return (
        <View style={styles.container}>
            <Controller
                name="task"
                control={control}
                render={({ onChange, value }) =>
                    <TextInput
                        placeholderText="Thêm công việc"
                        onChange={onChange}
                        value={value}
                        isLine
                    />
                }
            />
            <Button
                onPress={handleSubmit(AddTask)}
            >
                <Icon name="add-box" style={styles.iconStyle} />
            </Button>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 10
    },
    iconStyle: { fontSize: 24, color: "brown" },


})
export default AddTaskForm