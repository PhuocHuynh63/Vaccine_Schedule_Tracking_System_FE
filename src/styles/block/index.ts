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
})