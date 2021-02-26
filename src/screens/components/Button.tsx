import React from "react"
import { TouchableOpacity } from "react-native"

interface GlobalProps {
    onPress: () => void;
    children: React.ReactNode
}
const Button = ({ onPress, children }: GlobalProps) => {
    return (
        <TouchableOpacity
            style={{ marginLeft: 10 }}
            activeOpacity={0.5}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}
export default Button