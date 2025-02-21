import React from 'react'
import { ROUTES } from '@routes/index';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from '@atoms/Button';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { fontStyles } from '@styles/fonts';
import { RootStackParamList } from 'src/types/INavigates';
import { style } from '@themes/index';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { blockStyles } from '@styles/block';

const SelectFromCart = () => {
    const route = useRoute<RouteProp<RootStackParamList, ROUTES.VACCINATOR_PROFILE>>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const { userId: user } = route.params;

    return (
        <View>
            <View style={{marginTop: 20}}>
                <Text style={styles.vaccineInfo}>
                    Select vaccination
                </Text>

                <View style={styles.cartEmpty}>
                    <FontAwesome5 name="list-alt" size={100} color="rgba(106,107,187,0.2)" />
                    <Text style={styles.textCartEmpty}>List of vaccines to buy is empty</Text>
                </View>
            </View>

            <View style={{margin: 50}}>
                <Button style={[styles.buttonaction, blockStyles.oppositeBlock]} onPress={() => navigation.navigate(ROUTES.ADD_NEW_VACCINE, { userId: user })}>
                    <Text style={[fontStyles.fontButton, fontStyles.oppositeFont]}>Add new vaccine</Text>
                </Button>
            </View>
        </View>
    )
}

export default SelectFromCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blockInfoContainer: {
    },
    vaccineInfo: {
        fontSize: style.fonts.size.large,
        marginLeft: style.sizes.margin.m_12,
        fontWeight: 600,
    },
    cartEmpty: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    textCartEmpty: {
        fontSize: style.fonts.size.large,
        color: style.colors.grey.textLight,
        marginTop: style.sizes.margin.m_8,
    },
    buttonaction: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 47,
        paddingHorizontal: style.sizes.padding.p_20,
        marginHorizontal: 0,
        borderRadius: style.sizes.borderRadius.br_13,
    },
})
