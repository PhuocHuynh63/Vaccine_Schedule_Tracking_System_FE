import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { IComponents } from 'src/types/IComponents';
import Avatar from '@components/Atoms/Avatar/indext';
import { style } from '@themes/index';


const CardProfile = ({ onPress }: IComponents.ICARDPROFILE) => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
                <View style={styles.right}>
                    <Avatar />
                </View>
                <View style={styles.left}>
                    <View>
                        <Text style={styles.name}>Dr. John Doe</Text>
                        <Text style={styles.description}>General Practitioner</Text>
                        <Text style={styles.description}>4.5</Text>
                    </View>
                    <FontAwesome6 name="angle-right" size={18} color="black" />
                </View>
            </TouchableOpacity>
        </ScrollView >
    )
}

export default CardProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        marginHorizontal: style.sizes.margin.m_16,
        marginBottom: style.sizes.margin.m_16,
        paddingBottom: style.sizes.padding.p_8,
        borderBottomWidth: 1,
        borderBottomColor: style.colors.grey.bgLight,
        backgroundColor: style.colors.white.bg,
    },
    right: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: style.sizes.margin.m_16,
        marginRight: style.sizes.margin.m_8,
    },
    info: {
        flexDirection: 'column',
    },
    name: {
        fontWeight: 700,
        fontSize: style.fonts.size.large,
    },
    description: {
        color: style.colors.grey.text,
    },
})