import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { style } from "@themes/index";
import { IComponents } from "src/types/IComponents";



export const Button = ({ children, loading, disabled, style, icon, ...props }: IComponents.IBUTTON) => {
    return (
        <TouchableOpacity
            style={[styles.container, disabled && styles.disabled, style]}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? <ActivityIndicator color="white" /> : children}
            {icon}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: style.colors.blue.bg,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: style.sizes.margin.m_20,
        borderRadius: style.sizes.borderRadius.br_3,
    },
    disabled: {
        backgroundColor: "#ccc",
    },
});
