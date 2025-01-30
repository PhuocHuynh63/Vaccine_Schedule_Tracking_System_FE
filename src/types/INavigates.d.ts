import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ROUTES } from '../routes';

type RootStackParamList = {
    [ROUTES.LIST_VACCINATOR_PROFILE]: undefined;
    [ROUTES.VACCINATOR_PROFILE]: { userId: string };
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}