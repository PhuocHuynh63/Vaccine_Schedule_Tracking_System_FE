import React from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
import { style } from '../../../../themes';
import AntDesign from '@expo/vector-icons/AntDesign';
import { IComponents } from '../../../../types/IComponents';
import { useNavigation } from '@react-navigation/core';

const HeaderBooking = ({ children }: IComponents.IHEADERBOOKING) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <AntDesign name="arrowleft" style={styles.icon} onPress={() => navigation.goBack()} />
            <Text style={styles.title}>{children}</Text>
            <AntDesign name="plus" style={styles.icon} />
        </View>
    )
}

export default HeaderBooking

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: style.colors.blue.bg,
        marginTop: style.sizes.margin.m_20,
        padding: style.sizes.padding.p_20,
    },
    icon: {
        fontSize: style.fonts.size.superLarge,
        color: style.colors.white.bg,
    },
    title: {
        color: style.colors.white.bg,
        fontSize: style.fonts.size.xlarge,
        fontWeight: 600,
    }
})