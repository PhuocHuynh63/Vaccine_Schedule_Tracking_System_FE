import { TouchableOpacityProps, ViewProps } from "react-native";

declare namespace IComponents {
    export interface IHEADERBOOKING extends ViewProps {
        children: string;
        onPress?: () => void;
    }

    export interface IBUTTON extends TouchableOpacityProps {
        children: React.ReactNode;
        loading?: boolean;
        disabled?: boolean;
    }

    export interface ISEARCH extends ViewProps {
        placeholder?: string;
    }

    export interface ICARDPROFILE extends TouchableOpacityProps {
        onPress: () => void;
    }
}