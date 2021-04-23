import { RectButtonProperties } from "react-native-gesture-handler";

export interface IComponentCard extends RectButtonProperties {
   data: {
       name: string;
       photo: string;
   } 
}