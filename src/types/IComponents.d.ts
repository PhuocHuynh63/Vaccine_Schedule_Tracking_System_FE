import { TouchableOpacityProps, ViewProps } from "react-native";

declare namespace IComponents {
    export interface IHEADERBOOKING extends ViewProps {
        children: string;
        icon?: React.ReactNode;
        onPress?: () => void;
    }

    export interface IBUTTON extends TouchableOpacityProps {
        chilrent?: React.ReactNode;
        loading?: boolean;
        disabled?: boolean;
        icon?: React.ReactNode;
    }

    export interface ISEARCH extends ViewProps {
        placeholder?: string;
    }

    export interface ICARDPROFILE extends TouchableOpacityProps {
        onPress: () => void;
    }

    export interface IBLOCKINFO extends ViewProps {
        title: string;
        content: string;
    }
}