import { RectButtonProperties } from 'react-native-gesture-handler';

export interface IEnvironmentButtonProps extends RectButtonProperties {
    title: string;
    active?: boolean;
}