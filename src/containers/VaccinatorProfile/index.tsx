import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';
import { ROUTES } from '@routes/index';
import BlockInfo from '@components/Molecules/BlockInfo';
import { formatDate } from '@utils/helper/date';
import { RootStackParamList } from 'src/types/INavigates';

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
            <View>
                {data.map((item, index) => (
                    <BlockInfo key={index} title={item.title} content={item.content} style={styles.blockInfo} />
                ))}
            </View>
        </View>
    )
}

export default VaccinatorProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blockInfo: {
        marginBottom: 75,
    },
})