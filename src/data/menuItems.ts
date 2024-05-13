import type { MenuCategory } from '../objects/foodItem';

export const menuItems: MenuCategory[] = [
    { category: "Pizza", items: [
            { id: 1, name: "Pizza Margherita Gouda", image: "src/assets/food/Margherita.svg", price: "7,50", url: "margherita-gouda" },
            { id: 2, name: "Pizza Salami", image: "src/assets/food/Salami.svg", price: "9,50", url: "salami" }
        ]},
    { category: "Antipasti", items: [
            { id: 3, name: "Bruschetta", image: "src/assets/food/Bruschetta.svg", price: "3,00", url: "bruschetta" },
            { id: 4, name: "Antipasti all’Italiana", image: "src/assets/food/Antipasti.svg", price: "5,90", url: "all-italiana" },
            { id: 5, name: "Crostone di Pane", image: "src/assets/food/Crostone.svg", price: "3,20", url: "crostone-di-pane" }
        ]},
    { category: "Salat", items: [
            { id: 6, name: "Salate speziale", image: "src/assets/food/Speziale.svg", price: "2,80", url: "salate-speciale" },
            { id: 7, name: "Salate Mundo", image: "src/assets/food/Mundo.svg", price: "7,50", url: "salate-mundo" },
            { id: 8, name: "Salate Tomatolix", image: "src/assets/food/Tomatolix.svg", price: "11,90", url: "salate-tomatolix" }
        ]},
    { category: "Drinks", items: [
            { id: 9, name: "Cola", image: "src/assets/food/Cola.svg", price: "1,90", url: "" },
            { id: 10, name: "Fanta", image: "src/assets/food/Fanta.svg", price: "1,90", url: "" },
            { id: 11, name: "Sprite", image: "src/assets/food/Sprite.svg", price: "1,90", url: "" }
        ]},
];

///TODO: Preise dynamisch einfügen, da es verschiedene Größen für die Produkte gäben könnte