import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { IComponents } from "../../../types/IComponents";
import { style } from "../../../themes";


export const Button = ({ children, loading, disabled, style: customStyle, ...props }: IComponents.IBUTTON) => {
    return (
        <TouchableOpacity
            style={[styles.container, disabled && styles.disabled, customStyle]}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? <ActivityIndicator color="white" /> : <Text style={styles.text}>{children}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: style.colors.blue.bg,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: style.sizes.margin.m_5,
        borderRadius: style.sizes.borderRadius.br_3,
    },
    disabled: {
        backgroundColor: "#ccc",
    },
    text: {
        color: style.colors.white.bg,
        fontWeight: "600",
        fontSize: style.fonts.size.large,
    },
});
