// Auth utilities — check login status from sessionStorage

export function getLoggedInUser(): { id: string; name: string; email: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("user");
    if (!raw) return null;
    const user = JSON.parse(raw);
    return user?.id ? user : null;
  } catch {
    return null;
  }
}

export function isLoggedIn(): boolean {
  return getLoggedInUser() !== null;
}

// ── Pending Cart Item System ──
// Saves the product a user tried to add before being redirected to login.
// After login, the product is automatically added to their cart.

export interface PendingCartItem {
  product: any;       // IProduct
  quantity: number;
  goToCheckout: boolean;  // if true, redirect to /checkout after adding
}

const PENDING_KEY = "aesthete_pending_cart";

export function savePendingCartItem(item: PendingCartItem): void {
  try {
    sessionStorage.setItem(PENDING_KEY, JSON.stringify(item));
  } catch {}
}

export function getPendingCartItem(): PendingCartItem | null {
  try {
    const raw = sessionStorage.getItem(PENDING_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearPendingCartItem(): void {
  try {
    sessionStorage.removeItem(PENDING_KEY);
  } catch {}
}
