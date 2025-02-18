import { StyleSheet, ActivityIndicator, TouchableHighlight } from "react-native";
import { style } from "@themes/index";
import { IComponents } from "src/types/IComponents";

export const ButtonHighlight = ({ children, loading, disabled, style, ...props }: IComponents.IBUTTON) => {
    return (
        <TouchableHighlight
            style={[styles.container, style, disabled && styles.disabled]}
            disabled={disabled || loading}
            underlayColor="#f2f2f2"
            {...props}
        >
            {loading ? <ActivityIndicator color="white" /> : children}
        </TouchableHighlight>
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
        backgroundColor: style.colors.blue.disabled,
    },
});
