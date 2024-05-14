export interface MenuItem {
    id: number;
    name: string;
    image: string;
    price?: string;
    prices?: Prices;
    url?: string;
}

export interface MenuCategory {
    category: string;
    items: MenuItem[];
}

export type Size = 'small' | 'medium' | 'large';

export interface Prices {
    small: string;
    medium: string;
    large: string;
}
