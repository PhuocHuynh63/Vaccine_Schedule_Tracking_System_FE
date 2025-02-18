import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ROUTES } from '@routes/index';

type RootStackParamList = {
    [ROUTES.CHOOSE_AUTHEN]: undefined;
    [ROUTES.REGISTER]: undefined;
    [ROUTES.LIST_VACCINATOR_PROFILE]: undefined;
    [ROUTES.ADD_NEW_VACCINE]: { userId: string };
    [ROUTES.VACCINATOR_PROFILE]: { userId: string };
    [ROUTES.VACCINATION_INFO]: {
         users: [{ userId: string }];
         selectedVaccines?: string[];
        };
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}