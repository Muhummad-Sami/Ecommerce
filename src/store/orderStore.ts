// Order store — persists real checkout orders in localStorage for admin dashboard
import { IProduct } from "@/lib/types";

export interface OrderItem {
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  items: OrderItem[];
  totalAmount: number;
  status: "Processing" | "Shipped" | "Delivered";
  createdAt: string;
}

const ORDERS_KEY = "aesthete_orders";

export function saveOrder(order: Order): void {
  try {
    const existing = getOrders();
    existing.unshift(order); // newest first
    localStorage.setItem(ORDERS_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error("Failed to save order:", err);
  }
}

export function getOrders(): Order[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function updateOrderStatus(orderId: string, newStatus: Order["status"]): void {
  try {
    const orders = getOrders();
    const updated = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to update order status:", err);
  }
}

export function generateOrderId(): string {
  const num = Math.floor(10000 + Math.random() * 90000);
  return `#ORD-${num}`;
}
