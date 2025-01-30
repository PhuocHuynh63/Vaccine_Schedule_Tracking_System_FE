import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { style } from '../../../themes';
import { IComponents } from '../../../types/IComponents';

export const Search = ({ placeholder }: IComponents.ISEARCH) => {
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.icon_search} />
            <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: style.colors.grey.line,
        borderRadius: style.sizes.borderRadius.br_3,
        height: 50,
        marginHorizontal: style.sizes.margin.m_4,
        marginVertical: style.sizes.margin.m_4,
    },
    input: {
        height: 50,
        flex: 1,
        fontSize: style.fonts.size.large,
    },
    icon_search: {
        marginHorizontal: style.sizes.margin.m_2,
        color: style.colors.grey.bg,
        fontSize: style.fonts.size.superLarge,
    }
})