import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { style } from '@themes/index'
import { fontStyles } from '@styles/fonts'
import { IComponents } from 'src/types/IComponents'
import { ButtonOpacity } from '@atoms/ButtonOpacity'

const ButtonAction = ({ children, loading, disabled, style, ...props }: IComponents.IBUTTON) => {
    return (
        <ButtonOpacity style={[styles.container, style]} onPress={props.onPress} disabled={disabled}>
            <Text style={[fontStyles.oppositeFont]}>{children}</Text>
        </ButtonOpacity>
    )
}

export default ButtonAction

const styles = StyleSheet.create({
    container: {
        backgroundColor: style.colors.white.bg,
        borderRadius: style.sizes.borderRadius.br_7,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.211)',
        marginHorizontal: 25,
    },
})