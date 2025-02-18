import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { IComponents } from 'src/types/IComponents'


const CustomLinearGradient = ({ children, style, colors = ['#5583da', '#2365e0', '#1751be'] }: IComponents.ILINEARGRADIENT) => {
    return (
        <LinearGradient
            style={[{ flex: 1 }, style]}
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 2 }}
        >
            {children}
        </LinearGradient>
    )
}

export default CustomLinearGradient