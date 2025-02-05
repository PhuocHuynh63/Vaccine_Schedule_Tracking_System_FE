import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';
import { IComponents } from 'src/types/IComponents';
import { style } from '@themes/index';

const HeaderBooking = ({ children, icon }: IComponents.IHEADERBOOKING) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <AntDesign name="arrowleft" style={styles.icon} onPress={() => navigation.goBack()} />
            <Text style={styles.title}>{children}</Text>
            {icon}
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
        paddingVertical: style.sizes.padding.p_20,
        paddingHorizontal: style.sizes.padding.p_12,
    },
    icon: {
        fontSize: style.fonts.size.superLarge,
        color: style.colors.white.bg,
    },
    title: {
        flex: 1,
        flexWrap: 'wrap',
        color: style.colors.white.bg,
        fontSize: style.fonts.size.xlarge,
        fontWeight: 600,
        textAlign: 'center',
    }
})