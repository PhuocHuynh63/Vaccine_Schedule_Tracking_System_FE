import { StyleSheet } from "react-native";
import { style } from "@themes/index";

export const fontStyles = StyleSheet.create({
    fontButton: {
        color: style.colors.white.bg,
        fontWeight: "600",
        fontSize: style.fonts.size.large,
    },
    oppositeFont: {
        color: style.colors.blue.bg,
        fontWeight: "600",
        fontSize: style.fonts.size.large,
    }
});