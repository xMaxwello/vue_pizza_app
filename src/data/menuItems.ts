import type { MenuCategory } from '../objects/foodItem';

export const menuItems: MenuCategory[] = [
    { category: "Pizza", items: [
            { id: 1, name: "Pizza Margherita Gouda", price: "7,50", url: "/pizza/margherita-gouda" },
            { id: 2, name: "Pizza Salami", price: "9,50", url: "/pizza/salami" }
        ]},
    { category: "Antipasti", items: [
            { id: 3, name: "Bruschetta", price: "3,00", url: "/antipasti/bruschetta" },
            { id: 4, name: "Antipasti all’Italiana", price: "5,90", url: "/antipasti/all-italiana" },
            { id: 5, name: "Crostone di Pane", price: "3,20", url: "/antipasti/crostone-di-pane" }
        ]},
    { category: "Salat", items: [
            { id: 6, name: "Salate speziale", price: "2,80", url: "/salat/salate-speciale" },
            { id: 7, name: "Salate Mundo", price: "7,50", url: "/antipasti/salate-mundo" },
            { id: 8, name: "Salate Tomatolix", price: "11,90", url: "/antipasti/salate-tomatolix" }
        ]},
    { category: "Drinks", items: [
            { id: 9, name: "Cola", price: "1,90", url: "" },
            { id: 10, name: "Fanta", price: "1,90", url: "" },
            { id: 11, name: "Sprite", price: "1,90", url: "" }
        ]},
];
