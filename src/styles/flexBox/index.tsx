import { StyleSheet } from "react-native";

export const flexBoxStyles = StyleSheet.create({
    centerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    centerRowSpaceAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    centerColumnSpaceAround: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    centerColumnSpaceEvenly: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    centerColumn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerColumnSpaceBetween: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});