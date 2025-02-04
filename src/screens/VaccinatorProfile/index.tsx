import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';
import { ROUTES } from '@routes/index';
import { formatDate } from '@utils/helper/date';
import { RootStackParamList } from 'src/types/INavigates';
import BlockInfo from '@molecules/BlockInfo';
import { Button } from '@atoms/Button';
import { style } from '@themes/index';

const VaccinatorProfile = () => {
    const route = useRoute<RouteProp<RootStackParamList, ROUTES.VACCINATOR_PROFILE>>();

    const data = [
        { title: 'Fullname', content: 'Huynh Minh Phuoc' },
        { title: 'Phone', content: '0123 456 789' },
        { title: 'Birthday', content: formatDate('2025-02-03T00:00:00Z') },
        { title: 'Relationship', content: 'Me' },
        { title: 'Sex', content: 'Male' },
        { title: 'Address', content: 'Ho Chi Minh City' },
    ];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.blockInfoContainer}>
                {data.map((item, index) => (
                    <BlockInfo key={index} title={item.title} content={item.content} />
                ))}
            </ScrollView>

            <View style={styles.buttonContainer}>
                <Button title='Choose the person to vaccinate' />
            </View>
        </View>
    )
}

export default VaccinatorProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blockInfoContainer: {
    },
    buttonContainer: {
        boxShadow: '0px -1px 4px rgba(0, 0, 0, 0.25)',
        paddingVertical: style.sizes.padding.p_10,
    }
})