import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IComponents } from 'src/types/IComponents'
import { style } from '@themes/index'


const BlockInfo = ({ title, content, style }: IComponents.IBLOCKINFO) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.containerBlock}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>
                    {title === 'Fullname' ? content.toUpperCase() : content}
                </Text>
            </View>
        </View>
    )
}

export default BlockInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBlock: {
        height: 75,
        gap: 2,
        borderBottomWidth: 1,
        borderBottomColor: style.colors.grey.line,
        paddingVertical: style.sizes.padding.p_12,
        paddingLeft: style.sizes.padding.p_18,
    },
    title: {
        color: style.colors.grey.text,
        fontSize: style.fonts.size.large,
    },
    content: {
        fontWeight: '500',
        fontSize: style.fonts.size.xlarge,
    }
})