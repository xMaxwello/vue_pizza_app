import {Size} from "./foodItem.ts";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    size?: Size;
}
