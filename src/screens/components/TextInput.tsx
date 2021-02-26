import React from "react"
import { StyleSheet, TextInput as TextInputMask, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const TextInput = (props: any) => {
    const { onChange, value, placeholderText, isLine}= props
    return (
           
            <TextInputMask
                style={[{...styles.inputStyles, },isLine? {borderBottomWidth:1}: {borderBottomWidth:0}]}
                placeholder={placeholderText}
                placeholderTextColor="darkgrey"
                onChangeText={onChange}
                value={value}
            />
            
    )
}
const styles = StyleSheet.create({
    
    inputStyles: {
        borderBottomColor: "black",
        flex:1
    },
    
})
export default TextInput