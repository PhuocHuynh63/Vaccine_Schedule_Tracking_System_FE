import { StyleSheet } from 'react-native'
import React from 'react'
import { style } from '@themes/index'
import { ButtonOpacity } from '@atoms/ButtonOpacity'

const ButtonAction = ({ children, style }: { children: React.ReactNode, style?: object }) => {
    return (
        <ButtonOpacity style={[styles.container, style]}>
            {children}
        </ButtonOpacity>

    )
}

export default ButtonAction

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 47,
        paddingHorizontal: style.sizes.padding.p_20,
        marginHorizontal: 0,
        borderRadius: style.sizes.borderRadius.br_13,
    }
})