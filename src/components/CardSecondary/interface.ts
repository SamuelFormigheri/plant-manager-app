import { RectButtonProperties } from "react-native-gesture-handler";

export interface IComponentCardSecondary extends RectButtonProperties {
   data: {
       name: string;
       photo: string;
       hour: string;
   };
   handleRemove: () => void;
}