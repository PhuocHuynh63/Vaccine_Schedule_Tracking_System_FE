import React from 'react'
import { StyleSheet, View } from 'react-native'
import { style } from '../../../themes'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Avatar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <FontAwesome name="user" style={styles.icon} />
            </View>
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        height: 52,
        width: 52,
        borderRadius: 52,
        borderWidth: 1,
        borderColor: style.colors.grey.line,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        height: 46,
        width: 46,
        borderRadius: 44,
        backgroundColor: style.colors.grey.bgLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: style.fonts.size.superXLarge,
        color: style.colors.grey.bgDark,
    }
})