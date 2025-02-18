import { style } from "@themes/index";
import { StyleSheet } from "react-native";

export const blockStyles = StyleSheet.create({
    main: {
        backgroundColor: style.colors.blue.bg,
    },
    oppositeBlock: {
        backgroundColor: style.colors.white.bg,
        borderWidth: 1,
        borderColor: style.colors.blue.bg,
    },
    input: {
        borderWidth: 1,
        backgroundColor: style.colors.white.bg,
        borderColor: style.colors.grey.line,
        marginHorizontal: 25,
        borderRadius: 5,
        paddingHorizontal: style.sizes.padding.p_12,
        height: 50,
    },
    label: {
        marginHorizontal: 25,
        marginBottom: 5,
    }
})