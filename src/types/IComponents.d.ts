import { TouchableOpacityProps, ViewProps } from "react-native";

declare namespace IComponents {
    export interface IBUTTON extends TouchableOpacityProps {
        children: React.ReactNode;
        loading?: boolean;
        disabled?: boolean;
    }

    export interface ISEARCH extends ViewProps {
        placeholder?: string;
    }
}