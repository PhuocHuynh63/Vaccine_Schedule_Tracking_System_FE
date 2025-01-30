import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { style } from '../../themes';

const Search = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}>
                <Feather name="search" size={24} color="black" />
            </TextInput>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderColor: style.colors.grey.line,
        borderRadius: style.sizes.borderRadius.br_3,
    }
})