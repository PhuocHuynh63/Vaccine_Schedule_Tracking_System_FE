import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { style } from '@themes/index'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import SelectVaccinationSite from './components/Select';
import { fontStyles } from '@styles/fonts';
import ButtonAction from './components/Button';
import { blockStyles } from '@styles/block';
import { flexBoxStyles } from '@styles/flexBox';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/types/INavigates';
import { ROUTES } from '@routes/index';
import { Button } from '@atoms/Button';
import BottomSheet from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const VaccinationInfoBox = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList, ROUTES.VACCINATOR_PROFILE>>();
    const { userId: user } = route.params;
    const insets = useSafeAreaInsets();

    // State for bottom sheet
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    
    /**
     * close or open detail user info
     */
    const [showDetail, setShowDetail] = useState(false);
    const heightAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(heightAnim, {
            toValue: showDetail ? 200 : 0,
            duration: 300,
            useNativeDriver: false
        }).start();
    }, [showDetail]);

    const toggleDetail = () => {
        setShowDetail(prevState => !prevState);
    };

    // Ref to control Bottom Sheet
    const bottomSheetRef = useRef<BottomSheet>(null);

    // Bottom Sheet height points
    const snapPoints = useMemo(() => ['50%'], []);

    // Open Bottom Sheet
    const openSheet = useCallback(() => {
        console.log('Opening Bottom Sheet...');
        setIsBottomSheetVisible(true);
        bottomSheetRef.current?.expand();
    }, []);

    // Close Bottom Sheet
    const closeSheet = useCallback(() => {
        console.log('Closing Bottom Sheet...');
        bottomSheetRef.current?.close();
        setTimeout(() => {
            setIsBottomSheetVisible(false);
        }, 300);
    }, []);

    // Handle navigation from bottom sheet
    const handleAddNewVaccine = () => {
        closeSheet();
        setTimeout(() => {
            navigation.navigate(ROUTES.ADD_NEW_VACCINE, { userId: user });
        }, 300);
    };

    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={styles.boxHeader}>
                    <Text style={styles.fullname}>HUỲNH MINH PHƯỚC</Text>
                    <View style={styles.boxAction}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <MaterialIcons name="edit" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Ionicons name="trash" size={24} color={style.colors.red.bg} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.detailUserContainer}>
                    <TouchableOpacity style={styles.titleDetail} activeOpacity={0.8} onPress={toggleDetail}>
                        <Text style={styles.textTitle}>Details of the person vaccinated</Text>
                        {
                            showDetail ?
                                <FontAwesome5 name="chevron-up" size={18} color={style.colors.blue.bg} /> :
                                <FontAwesome5 name="chevron-down" size={18} color={style.colors.blue.bg} />
                        }
                    </TouchableOpacity>
                    {
                        showDetail &&
                        <Animated.View style={[{ gap: 5, marginTop: style.sizes.margin.m_12, marginBottom: style.sizes.margin.m_16 }, { height: heightAnim }]}>
                            <View style={styles.detailUserInfo}>
                                <Text style={styles.textTitleDetail}>Fullname </Text>
                                <Text style={styles.textContentDetail}>HUỲNH MINH PHƯỚC</Text>
                            </View>
                            <View style={styles.detailUserInfo}>
                                <Text style={styles.textTitleDetail}>Phone </Text>
                                <Text style={styles.textContentDetail}>0123456789</Text>
                            </View>
                            <View style={styles.detailUserInfo}>
                                <Text style={styles.textTitleDetail}>Birthday </Text>
                                <Text style={styles.textContentDetail}>06/03/1999</Text>
                            </View>
                            <View style={styles.detailUserInfo}>
                                <Text style={styles.textTitleDetail}>Relationship </Text>
                                <Text style={styles.textContentDetail}>Me</Text>
                            </View>
                            <View style={styles.detailUserInfo}>
                                <Text style={styles.textTitleDetail}>Sex </Text>
                                <Text style={styles.textContentDetail}>Male</Text>
                            </View>
                            <View style={styles.detailUserInfo}>
                                <Text style={styles.textTitleDetail}>Email </Text>
                                <Text style={styles.textContentDetail}>Updating</Text>
                            </View>
                            <View style={styles.detailUserInfo}>
                                <Text style={styles.textTitleDetail}>Address </Text>
                                <Text style={styles.textContentDetail}>10 Lê Văn Việt, Phường 2, Thành Phố Thủ Đức, Tỉnh Tiền Giang</Text>
                            </View>
                        </Animated.View>
                    }
                </View>

                <View>
                    <View>
                        <Text style={styles.vaccineInfo}>
                            Select the desired vaccination center <Text style={[styles.vaccineInfo, { color: style.colors.red.bg, fontWeight: 'bold' }]}>*</Text>
                        </Text>

                        <SelectVaccinationSite>
                            <Text style={styles.textSelect}>Select Vaccination Site</Text>
                            <Entypo name="chevron-small-right" size={24} color="black" />
                        </SelectVaccinationSite>
                    </View>

                    <View>
                        <Text style={styles.vaccineInfo}>
                            Select vaccination date <Text style={[styles.vaccineInfo, { color: style.colors.red.bg, fontWeight: 'bold' }]}>*</Text>
                        </Text>

                        <SelectVaccinationSite>
                            <Text style={styles.textSelect}>Select Date</Text>
                            <FontAwesome name="calendar" size={18} color="black" />
                        </SelectVaccinationSite>
                    </View>

                    <View>
                        <Text style={styles.vaccineInfo}>
                            Select vaccination <Text style={[styles.vaccineInfo, { color: style.colors.red.bg, fontWeight: 'bold' }]}>*</Text>
                        </Text>

                        <View style={styles.cartEmpty}>
                            <FontAwesome5 name="list-alt" size={100} color="rgba(106,107,187,0.2)" />
                            <Text style={styles.textCartEmpty}>List of vaccines to buy is empty</Text>
                        </View>
                    </View>

                    <View style={styles.actionButton}>
                        <Button style={styles.buttonaction} onPress={openSheet}>
                            <FontAwesome5 name="shopping-cart" size={18} color="white" style={{ marginRight: 7 }} />
                            <Text style={[fontStyles.fontButton]}>Add from cart</Text>
                        </Button>

                        <Button
                            onPress={() => navigation.navigate(ROUTES.ADD_NEW_VACCINE, { userId: user })}
                            style={[styles.buttonaction, blockStyles.oppositeBlock]} // Combine both styles
                        >
                            <Text style={[fontStyles.fontButton, fontStyles.oppositeFont]}>
                                Add new vaccine
                            </Text>
                        </Button>
                    </View>

                    <View style={[flexBoxStyles.centerColumn]}>
                        <Feather name="chevrons-up" size={24} color="black" />
                    </View>
                </View>
            </View>
            
            {/* Bottom Sheet - Only render when visible */}
            {isBottomSheetVisible && (
                <BottomSheet 
                    ref={bottomSheetRef} 
                    index={0}
                    snapPoints={snapPoints} 
                    enablePanDownToClose
                    onClose={() => setIsBottomSheetVisible(false)}
                    handleComponent={() => (
                        <View style={styles.handleComponent}>
                            <View style={styles.handle} />
                        </View>
                    )}
                >
                    <View style={[styles.sheetContent, {paddingBottom: insets.bottom}]}>
                        <View style={styles.sheetHeader}>
                            <Text style={styles.sheetTitle}>Select from cart</Text>
                            <TouchableOpacity onPress={closeSheet}>
                                <Text style={styles.closeText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.sectionTitle}>Selected vaccines</Text>
                        
                        <View style={styles.emptyContainer}>
                            <View style={styles.placeholderIcon}>
                                <FontAwesome5 name="list-alt" size={50} color="rgba(106,107,187,0.2)" />
                            </View>
                            <Text style={styles.emptyText}>You have not selected any Vaccines yet.</Text>
                            
                            <TouchableOpacity style={styles.addNewButton} onPress={handleAddNewVaccine}>
                                <Text style={styles.addNewButtonText}>Add new vaccine</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity style={styles.confirmButton} onPress={closeSheet}>
                            <Text style={styles.confirmButtonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            )}
        </View>
    )
}

export default VaccinationInfoBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxContainer: {
        borderWidth: 1,
        borderColor: style.colors.grey.line,
        borderRadius: style.sizes.borderRadius.br_5,
        marginHorizontal: style.sizes.margin.m_20,
        marginVertical: style.sizes.margin.m_20,
    },
    boxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: style.colors.grey.bgLight,
        borderRadius: style.sizes.borderRadius.br_5,
        padding: style.sizes.padding.p_14,
    },
    fullname: {
        fontSize: style.fonts.size.xlarge,
        fontWeight: '600',
    },
    boxAction: {
        flexDirection: 'row',
    },
    detailUserContainer: {
        padding: style.sizes.padding.p_14,
    },
    titleDetail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: style.fonts.size.large,
        fontWeight: '600',
        color: style.colors.blue.bg,
        marginRight: style.sizes.margin.m_12,
    },
    detailUserInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    textTitleDetail: {
        fontWeight: '600',
        color: style.colors.grey.bg,
    },
    textContentDetail: {
        fontWeight: '600',
    },
    vaccineInfo: {
        fontSize: style.fonts.size.large,
        marginLeft: style.sizes.margin.m_12,
    },
    textSelect: {
        color: style.colors.grey.textLight,
        fontSize: style.fonts.size.large,
        textAlign: 'left',
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
    actionButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: style.sizes.margin.m_8,
        marginBottom: style.sizes.margin.m_20,
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
    handleComponent: {
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    handle: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#DDDDDD',
        alignSelf: 'center',
    },
    sheetContent: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    sheetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    sheetTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeText: {
        fontSize: 16,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 20,
        marginBottom: 10,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderIcon: {
        marginBottom: 12,
    },
    emptyText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 24,
        textAlign: 'center',
    },
    addNewButton: {
        borderWidth: 1,
        borderColor: style.colors.blue.bg,
        borderRadius: 8,
        paddingHorizontal: 24,
        paddingVertical: 10,
    },
    addNewButtonText: {
        color: style.colors.blue.bg,
        fontWeight: '500',
    },
    confirmButton: {
        backgroundColor: style.colors.blue.bg,
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 16,
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
});