export interface MenuItem {
    id: number;
    name: string;
    price: string;
    url: string;
}

export interface MenuCategory {
    category: string;
    items: MenuItem[];
}
