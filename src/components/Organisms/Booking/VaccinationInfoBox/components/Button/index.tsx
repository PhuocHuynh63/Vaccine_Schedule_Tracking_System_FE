import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@atoms/Button'
import { style } from '@themes/index'

const SelectVaccinationSite = () => {
    return (
        <Button style={styles.container}>
            <Text style={styles.text}>Select Vaccination Site</Text>
        </Button>
    )
}

export default SelectVaccinationSite

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: style.colors.grey.line,
        padding: 10,
        marginHorizontal: style.sizes.margin.m_12,
        marginTop: style.sizes.margin.m_8,
        marginBottom: style.sizes.margin.m_20,
        borderRadius: style.sizes.borderRadius.br_7,
    },
    text: {
        color: style.colors.blue.bg,
        fontWeight: '600',
        fontSize: style.fonts.size.large,
    },
})