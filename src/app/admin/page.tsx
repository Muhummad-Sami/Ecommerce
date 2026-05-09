"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Settings, TrendingUp, Minus, TrendingDown, CheckCircle2, MoreHorizontal } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Gross Revenue", value: "$142,850.00", trend: "+12.4%", status: "up", color: "text-green-600" },
    { label: "Active Orders", value: "284", trend: "Steady flow", status: "stable", color: "text-on-surface-variant" },
    { label: "Inventory Value", value: "$2.4M", trend: "-2.1%", status: "down", color: "text-error" },
    { label: "Customer Satisfaction", value: "98%", trend: "Elite tier", status: "up", color: "text-green-600" },
  ];

  const recentOrders = [
    { id: "#ORD-29402", customer: "Julianna Vane", item: "Minimalist Ceramic Set", status: "Processing", value: "$1,240.00" },
    { id: "#ORD-29401", customer: "Marcus Thorne", item: "Archival Wool Coat", status: "Shipped", value: "$3,850.00" },
    { id: "#ORD-29400", customer: "Elena Rossi", item: "Sculptural Glass Vase", status: "Delivered", value: "$890.00" },
    { id: "#ORD-29399", customer: "Christian Dioris", item: "Leather Attache Case", status: "Processing", value: "$5,200.00" },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Sidebar */}
        <aside className="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-primary/10 flex flex-col py-8 z-50">
          <div className="px-8 mb-12">
            <h1 className="font-headline-md text-3xl text-primary tracking-tighter">AESTHETE</h1>
            <p className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] mt-1 uppercase">Management</p>
          </div>
          <nav className="flex-1 space-y-2">
            <a className="flex items-center gap-4 text-primary font-bold border-l-2 border-primary pl-6 h-12 bg-surface-container-low transition-all" href="#">
              <LayoutDashboard size={20} />
              <span className="font-label-caps text-[11px] uppercase tracking-widest">Overview</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-12 hover:bg-surface-container-low transition-all" href="#">
              <Package size={20} />
              <span className="font-label-caps text-[11px] uppercase tracking-widest">Inventory</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-12 hover:bg-surface-container-low transition-all" href="#">
              <ShoppingCart size={20} />
              <span className="font-label-caps text-[11px] uppercase tracking-widest">Orders</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-12 hover:bg-surface-container-low transition-all" href="#">
              <Users size={20} />
              <span className="font-label-caps text-[11px] uppercase tracking-widest">Customers</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-12 hover:bg-surface-container-low transition-all" href="#">
              <BarChart3 size={20} />
              <span className="font-label-caps text-[11px] uppercase tracking-widest">Analytics</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant pl-6 h-12 hover:bg-surface-container-low transition-all" href="#">
              <Settings size={20} />
              <span className="font-label-caps text-[11px] uppercase tracking-widest">Settings</span>
            </a>
          </nav>
          <div className="px-8 mt-auto flex items-center gap-3">
            <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant/30 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-label-caps text-[10px] uppercase font-bold">Admin profile</p>
              <p className="text-[12px] text-on-surface-variant">Director</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-12 lg:p-20">
          <header className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-2 block tracking-widest">System Status: Active</span>
              <h2 className="font-headline-lg text-5xl">Dashboard Overview</h2>
            </div>
            <div className="flex gap-6">
              <button className="px-8 py-4 border border-primary text-primary font-button text-[12px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500">
                Export Data
              </button>
              <button className="px-8 py-4 bg-primary text-on-primary font-button text-[12px] uppercase tracking-widest relative group overflow-hidden">
                <span className="relative z-10">Add New Product</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            </div>
          </header>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-10 bg-surface border border-outline-variant/10 hover:shadow-xl transition-shadow duration-700">
                <p className="font-label-caps text-[11px] text-on-surface-variant uppercase mb-4 tracking-widest">{stat.label}</p>
                <h3 className="font-headline-md text-3xl mb-4">{stat.value}</h3>
                <div className={`flex items-center gap-2 ${stat.color}`}>
                  {stat.status === "up" && <TrendingUp size={14} />}
                  {stat.status === "down" && <TrendingDown size={14} />}
                  {stat.status === "stable" && <Minus size={14} />}
                  <span className="font-label-caps text-[10px] tracking-wider uppercase">{stat.trend}</span>
                </div>
              </div>
            ))}
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Orders Table */}
            <section className="col-span-12 lg:col-span-8 bg-surface border border-outline-variant/10 p-12">
              <div className="flex justify-between items-center mb-12">
                <h4 className="font-headline-md text-3xl">Recent Orders</h4>
                <a className="font-label-caps text-[11px] border-b border-primary/20 pb-1 hover:border-primary transition-all uppercase tracking-widest" href="#">View All Orders</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-outline-variant/20">
                      <th className="pb-6 font-label-caps text-[10px] uppercase text-on-surface-variant tracking-widest">Reference</th>
                      <th className="pb-6 font-label-caps text-[10px] uppercase text-on-surface-variant tracking-widest">Customer</th>
                      <th className="pb-6 font-label-caps text-[10px] uppercase text-on-surface-variant tracking-widest">Items</th>
                      <th className="pb-6 font-label-caps text-[10px] uppercase text-on-surface-variant tracking-widest">Status</th>
                      <th className="pb-6 font-label-caps text-[10px] uppercase text-on-surface-variant tracking-widest text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {recentOrders.map((order, idx) => (
                      <tr key={idx} className="group hover:bg-surface-container-low transition-colors">
                        <td className="py-8 font-body-md font-medium text-[15px]">{order.id}</td>
                        <td className="py-8 font-body-md text-[15px]">{order.customer}</td>
                        <td className="py-8 text-on-surface-variant font-body-md text-[15px]">{order.item}</td>
                        <td className="py-8">
                          <span className={`px-4 py-1.5 border border-primary/10 font-label-caps text-[9px] uppercase tracking-widest ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Shipped' ? 'text-blue-600' : ''}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-8 text-right font-body-md text-[15px]">{order.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Side Column */}
            <section className="col-span-12 lg:col-span-4 flex flex-col gap-8">
              <div className="bg-surface border border-outline-variant/10 p-12 flex-1">
                <h4 className="font-headline-md text-2xl mb-10">Client Inquiries</h4>
                <div className="space-y-10">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-secondary-container">
                    <p className="font-label-caps text-[10px] uppercase text-on-surface-variant mb-2 tracking-widest">Inquiry #842 • 10m ago</p>
                    <p className="font-body-md font-medium italic mb-3 text-[15px] leading-relaxed">"Can the Archival Coat be customized with silk lining?"</p>
                    <p className="text-[12px] text-on-surface-variant">— S. Montgomery, Private Client</p>
                  </div>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-outline-variant/30">
                    <p className="font-label-caps text-[10px] uppercase text-on-surface-variant mb-2 tracking-widest">Support #841 • 2h ago</p>
                    <p className="font-body-md font-medium italic mb-3 text-[15px] leading-relaxed">"Tracking update requested for order #ORD-29388."</p>
                    <p className="text-[12px] text-on-surface-variant">— Liam K., Standard Support</p>
                  </div>
                </div>
                <button className="w-full mt-12 py-4 border border-primary text-primary font-button text-[11px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500">
                  Inbox (14)
                </button>
              </div>
              <div className="bg-primary text-on-primary p-12 relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="font-label-caps text-[10px] text-on-primary/60 uppercase mb-4 tracking-[0.2em]">Stock Warning</p>
                  <h4 className="font-headline-md text-2xl mb-8 leading-tight">Ceramic Objects series is down to 4 units.</h4>
                  <button className="font-label-caps text-[10px] border-b border-on-primary/30 pb-1 group-hover:border-on-primary transition-all tracking-widest uppercase">Reorder Inventory</button>
                </div>
                <Package className="absolute -right-8 -bottom-8 w-40 h-40 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
