import type { MenuCategory } from '../objects/foodItem';

export const menuItems: MenuCategory[] = [
    { category: "Pizza", items: [
            { id: 1, name: "Pizza Margherita Gouda", image: "src/assets/food/Margherita.svg", prices: { small: "6,50", medium: "7,50", large: "8,50" }, url: "margherita-gouda" },
            { id: 2, name: "Pizza Salami", image: "src/assets/food/Salami.svg", prices: { small: "8,50", medium: "9,50", large: "10,50" }, url: "salami" }
        ]},
    { category: "Antipasti", items: [
            { id: 3, name: "Bruschetta", image: "src/assets/food/Bruschetta.svg", prices: { small: "2,00", medium: "3,00", large: "4,00" }, url: "bruschetta" },
            { id: 4, name: "Antipasti all’Italiana", image: "src/assets/food/Antipasti.svg", prices: { small: "4,90", medium: "5,90", large: "6,90" }, url: "all-italiana" },
            { id: 5, name: "Crostone di Pane", image: "src/assets/food/Crostone.svg", prices: { small: "2,20", medium: "3,20", large: "4,20" }, url: "crostone-di-pane" }
        ]},
    { category: "Salat", items: [
            { id: 6, name: "Salate speziale", image: "src/assets/food/Speziale.svg", prices: { small: "1,80", medium: "2,80", large: "3,80" }, url: "salate-speciale" },
            { id: 7, name: "Salate Mundo", image: "src/assets/food/Mundo.svg", prices: { small: "6,50", medium: "7,50", large: "8,50" }, url: "salate-mundo" },
            { id: 8, name: "Salate Tomatolix", image: "src/assets/food/Tomatolix.svg", prices: { small: "10,90", medium: "11,90", large: "12,90" }, url: "salate-tomatolix" }
        ]},
    { category: "Drinks", items: [
            { id: 9, name: "Cola", image: "src/assets/food/Cola.svg", price: "1,90"},
            { id: 10, name: "Fanta", image: "src/assets/food/Fanta.svg", price: "1,90"},
            { id: 11, name: "Sprite", image: "src/assets/food/Sprite.svg", price: "1,90"}
        ]},
];