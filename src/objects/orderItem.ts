interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    size: string;
    image: string;
}

interface Order {
    id: number;
    items: OrderItem[];
    total: number;
    timestamp: Date;
}