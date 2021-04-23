import { TextInputProps } from "react-native";

export interface IComponentInput extends TextInputProps{
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}