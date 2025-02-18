import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { style } from '@themes/index'
import { fontStyles } from '@styles/fonts'
import { ButtonHighlight } from '@atoms/ButtonHighlight'
import { IComponents } from 'src/types/IComponents'

const ButtonAction = ({ children, loading, disabled, style, ...props }: IComponents.IBUTTON) => {
    console.log('Button disabled:', disabled); // Thêm log để kiểm tra giá trị của disabled

    
    return (
        <ButtonHighlight style={[styles.container, style]} onPress={props.onPress} disabled={disabled}>
            <Text style={[fontStyles.oppositeFont]}>{children}</Text>
        </ButtonHighlight>
    )
}

export default ButtonAction

const styles = StyleSheet.create({
    container: {
        backgroundColor: style.colors.white.bg,
        borderRadius: style.sizes.borderRadius.br_7,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.211)',
    },
})