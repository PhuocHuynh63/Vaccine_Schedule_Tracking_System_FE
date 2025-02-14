import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { style } from '@themes/index'
import { fontStyles } from '@styles/fonts'
import { ButtonHighlight } from '@atoms/ButtonHighlight'

const ButtonAction = ({ children }: { children: React.ReactNode }) => {
    return (
        <ButtonHighlight style={styles.container}>
            <Text style={[fontStyles.oppositeFont]}>{children}</Text>
        </ButtonHighlight>
    )
}

export default ButtonAction

const styles = StyleSheet.create({
    container: {
        backgroundColor: style.colors.white.bg,
        borderRadius: style.sizes.borderRadius.br_20,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.211)',
    },
})