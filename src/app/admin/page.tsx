"use client";

import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Settings, TrendingUp, Minus, TrendingDown, Menu, X, LogOut, Home } from "lucide-react";
import { getOrders, Order, updateOrderStatus } from "@/store/orderStore";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [mounted, setMounted] = useState(false);
  const [userName, setUserName] = useState("Admin");
  const [userEmail, setUserEmail] = useState("admin@aesthete.com");

  useEffect(() => {
    setMounted(true);
    // Load real orders
    const realOrders = getOrders();
    setOrders(realOrders);

    // Load logged-in user info
    try {
      const userStr = sessionStorage.getItem("user");
      if (userStr) {
        const user = JSON.parse(userStr);
        if (user.name) setUserName(user.name);
        if (user.email) setUserEmail(user.email);
      }
    } catch {}
  }, []);

  // Lock body scroll when sidebar open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  // Compute stats from real orders
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalOrderCount = orders.length;
  const processingCount = orders.filter(o => o.status === "Processing").length;

  const stats = [
    { label: "Gross Revenue", value: totalOrderCount > 0 ? `$${totalRevenue.toLocaleString()}` : "$0", trend: totalOrderCount > 0 ? `${totalOrderCount} orders` : "No orders yet", status: totalOrderCount > 0 ? "up" : "stable" as const, color: totalOrderCount > 0 ? "text-green-600" : "text-on-surface-variant" },
    { label: "Active Orders", value: String(processingCount), trend: processingCount > 0 ? "Needs attention" : "All clear", status: processingCount > 0 ? "up" : "stable" as const, color: processingCount > 0 ? "text-blue-600" : "text-on-surface-variant" },
    { label: "Total Orders", value: String(totalOrderCount), trend: "All time", status: "stable" as const, color: "text-on-surface-variant" },
    { label: "Avg. Order Value", value: totalOrderCount > 0 ? `$${Math.round(totalRevenue / totalOrderCount).toLocaleString()}` : "$0", trend: "Per transaction", status: totalOrderCount > 0 ? "up" : "stable" as const, color: totalOrderCount > 0 ? "text-green-600" : "text-on-surface-variant" },
  ];

  if (!mounted) return null;

  return (
    <>
      <div className="min-h-screen bg-background">

        {/* Mobile top bar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-b border-primary/10 h-14 flex items-center justify-between px-4">
          <button onClick={() => setSidebarOpen(true)} className="p-1" aria-label="Open menu">
            <Menu size={22} />
          </button>
          <span className="font-headline-md text-xl tracking-tighter">AESTHETE</span>
          <Link href="/" className="p-1" aria-label="Home">
            <Home size={20} />
          </Link>
        </div>

        {/* Sidebar overlay (mobile) */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside className={`admin-sidebar h-screen w-64 fixed left-0 top-0 bg-surface border-r border-primary/10 flex flex-col py-6 md:py-8 z-50 ${sidebarOpen ? "open" : ""}`}>
          <div className="px-6 md:px-8 mb-8 md:mb-12 flex items-center justify-between">
            <div>
              <h1 className="font-headline-md text-2xl md:text-3xl text-primary tracking-tighter">AESTHETE</h1>
              <p className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] mt-1 uppercase">Management</p>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1" aria-label="Close sidebar">
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 space-y-1 md:space-y-2">
            <a className="flex items-center gap-4 text-primary font-bold border-l-2 border-primary pl-6 h-11 md:h-12 bg-surface-container-low transition-all text-[11px]" href="#">
              <LayoutDashboard size={18} />
              <span className="font-label-caps uppercase tracking-widest">Overview</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-11 md:h-12 hover:bg-surface-container-low transition-all text-[11px]" href="#">
              <Package size={18} />
              <span className="font-label-caps uppercase tracking-widest">Inventory</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-11 md:h-12 hover:bg-surface-container-low transition-all text-[11px]" href="#">
              <ShoppingCart size={18} />
              <span className="font-label-caps uppercase tracking-widest">Orders</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-11 md:h-12 hover:bg-surface-container-low transition-all text-[11px]" href="#">
              <Users size={18} />
              <span className="font-label-caps uppercase tracking-widest">Customers</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-11 md:h-12 hover:bg-surface-container-low transition-all text-[11px]" href="#">
              <BarChart3 size={18} />
              <span className="font-label-caps uppercase tracking-widest">Analytics</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-11 md:h-12 hover:bg-surface-container-low transition-all text-[11px]" href="#">
              <Settings size={18} />
              <span className="font-label-caps uppercase tracking-widest">Settings</span>
            </a>
          </nav>

          {/* Admin Profile — connected to logged-in user */}
          <div className="px-6 md:px-8 mt-auto">
            <div className="border-t border-primary/10 pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-sm">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-caps text-[10px] uppercase font-bold truncate">{userName}</p>
                  <p className="text-[11px] text-on-surface-variant truncate">{userEmail}</p>
                </div>
              </div>
              <Link href="/" className="flex items-center gap-2 text-on-surface-variant hover:text-primary text-[10px] font-label-caps uppercase tracking-widest transition-colors mt-2">
                <LogOut size={14} />
                <span>Back to Store</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="admin-main lg:ml-64 p-4 pt-18 md:p-8 lg:p-12 xl:p-20 min-h-screen">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4">
            <div>
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-2 block tracking-widest">System Status: Active</span>
              <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl">Dashboard Overview</h2>
            </div>
            <div className="flex gap-3 md:gap-6 flex-wrap">
              <Link href="/collections" className="px-4 md:px-8 py-3 md:py-4 border border-primary text-primary font-button text-[11px] md:text-[12px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500">
                View Store
              </Link>
              <Link href="/collections" className="px-4 md:px-8 py-3 md:py-4 bg-primary text-on-primary font-button text-[11px] md:text-[12px] uppercase tracking-widest relative group overflow-hidden">
                <span className="relative z-10">Add New Product</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </div>
          </header>

          {/* Stats Grid */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 md:p-10 bg-surface border border-outline-variant/10 hover:shadow-xl transition-shadow duration-700">
                <p className="font-label-caps text-[10px] md:text-[11px] text-on-surface-variant uppercase mb-3 md:mb-4 tracking-widest">{stat.label}</p>
                <h3 className="font-headline-md text-xl md:text-3xl mb-3 md:mb-4">{stat.value}</h3>
                <div className={`flex items-center gap-2 ${stat.color}`}>
                  {stat.status === "up" && <TrendingUp size={14} />}
                  {stat.status === "down" && <TrendingDown size={14} />}
                  {stat.status === "stable" && <Minus size={14} />}
                  <span className="font-label-caps text-[9px] md:text-[10px] tracking-wider uppercase">{stat.trend}</span>
                </div>
              </div>
            ))}
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Orders Table */}
            <section className="col-span-12 lg:col-span-8 bg-surface border border-outline-variant/10 p-6 md:p-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
                <h4 className="font-headline-md text-2xl md:text-3xl">Recent Orders</h4>
                <span className="font-label-caps text-[10px] md:text-[11px] text-on-surface-variant uppercase tracking-widest">
                  {orders.length} Total
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-20 border border-primary/5 bg-surface-container-low">
                  <ShoppingCart size={40} className="mx-auto mb-6 text-outline opacity-20" />
                  <p className="font-body-md text-on-surface-variant mb-4">No orders yet</p>
                  <p className="text-[12px] text-on-surface-variant opacity-60 max-w-sm mx-auto">
                    Orders will appear here when customers complete checkout. Try placing an order from the store to see it here.
                  </p>
                  <Link href="/collections" className="inline-block mt-8 font-label-caps text-[10px] border-b border-primary pb-1 uppercase tracking-widest hover:text-secondary transition-colors">
                    Go to Store
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto -mx-6 md:mx-0">
                  <table className="w-full text-left min-w-[600px]">
                    <thead>
                      <tr className="border-b border-outline-variant/20">
                        <th className="pb-4 md:pb-6 font-label-caps text-[9px] md:text-[10px] uppercase text-on-surface-variant tracking-widest pl-6 md:pl-0">Reference</th>
                        <th className="pb-4 md:pb-6 font-label-caps text-[9px] md:text-[10px] uppercase text-on-surface-variant tracking-widest">Customer</th>
                        <th className="pb-4 md:pb-6 font-label-caps text-[9px] md:text-[10px] uppercase text-on-surface-variant tracking-widest hidden md:table-cell">Items</th>
                        <th className="pb-4 md:pb-6 font-label-caps text-[9px] md:text-[10px] uppercase text-on-surface-variant tracking-widest">Status</th>
                        <th className="pb-4 md:pb-6 font-label-caps text-[9px] md:text-[10px] uppercase text-on-surface-variant tracking-widest text-right pr-6 md:pr-0">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                      {orders.slice(0, 10).map((order, idx) => (
                        <tr key={idx} className="group hover:bg-surface-container-low transition-colors">
                          <td className="py-6 md:py-8 font-body-md font-medium text-[13px] md:text-[15px] pl-6 md:pl-0">{order.id}</td>
                          <td className="py-6 md:py-8">
                            <div>
                              <p className="font-body-md text-[13px] md:text-[15px]">{order.customerName}</p>
                              <p className="text-[11px] text-on-surface-variant hidden sm:block">{order.email}</p>
                            </div>
                          </td>
                          <td className="py-6 md:py-8 text-on-surface-variant font-body-md text-[13px] md:text-[15px] hidden md:table-cell">
                            {order.items.map(i => i.productName).join(", ")}
                          </td>
                          <td className="py-6 md:py-8">
                            {userEmail === "Sami12@gmail.com" ? (
                              <select
                                value={order.status}
                                onChange={(e) => {
                                  updateOrderStatus(order.id, e.target.value as any);
                                  setOrders(getOrders());
                                }}
                                className={`appearance-none px-3 md:px-4 py-1 md:py-1.5 border font-label-caps text-[8px] md:text-[9px] uppercase tracking-widest cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary ${
                                  order.status === 'Delivered' 
                                    ? 'text-green-600 bg-green-50 border-green-200' 
                                    : order.status === 'Shipped' 
                                    ? 'text-blue-600 bg-blue-50 border-blue-200' 
                                    : 'text-amber-600 bg-amber-50 border-amber-200'
                                }`}
                              >
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            ) : (
                              <span className={`px-3 md:px-4 py-1 md:py-1.5 border border-primary/10 font-label-caps text-[8px] md:text-[9px] uppercase tracking-widest ${order.status === 'Delivered' ? 'text-green-600 bg-green-50' : order.status === 'Shipped' ? 'text-blue-600 bg-blue-50' : 'text-amber-600 bg-amber-50'}`}>
                                {order.status}
                              </span>
                            )}
                          </td>
                          <td className="py-6 md:py-8 text-right font-body-md text-[13px] md:text-[15px] font-medium pr-6 md:pr-0">
                            ${order.totalAmount.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {/* Side Column */}
            <section className="col-span-12 lg:col-span-4 flex flex-col gap-6 md:gap-8">
              {/* Latest order details */}
              <div className="bg-surface border border-outline-variant/10 p-8 md:p-12 flex-1">
                <h4 className="font-headline-md text-xl md:text-2xl mb-8 md:mb-10">Order Details</h4>
                {orders.length > 0 ? (
                  <div className="space-y-6 md:space-y-8">
                    {orders.slice(0, 2).map((order, idx) => (
                      <div key={idx} className="relative pl-6 md:pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-secondary-container">
                        <p className="font-label-caps text-[9px] md:text-[10px] uppercase text-on-surface-variant mb-2 tracking-widest">
                          {order.id} • {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                        <p className="font-body-md font-medium text-[13px] md:text-[15px] leading-relaxed mb-2">
                          {order.items.map(i => `${i.productName} ×${i.quantity}`).join(", ")}
                        </p>
                        <p className="text-[11px] md:text-[12px] text-on-surface-variant">
                          — {order.customerName}, {order.city}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-on-surface-variant text-sm">No recent orders to display.</p>
                )}
              </div>

              {/* CTA */}
              <div className="bg-primary text-on-primary p-8 md:p-12 relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="font-label-caps text-[10px] text-on-primary/60 uppercase mb-4 tracking-[0.2em]">Quick Access</p>
                  <h4 className="font-headline-md text-xl md:text-2xl mb-6 md:mb-8 leading-tight">Manage your store from anywhere.</h4>
                  <Link href="/collections" className="font-label-caps text-[10px] border-b border-on-primary/30 pb-1 group-hover:border-on-primary transition-all tracking-widest uppercase">
                    Visit Store
                  </Link>
                </div>
                <Package className="absolute -right-6 md:-right-8 -bottom-6 md:-bottom-8 w-32 h-32 md:w-40 md:h-40 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
