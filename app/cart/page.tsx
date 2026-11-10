import Link from 'next/link';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { cartItems } from '@/lib/mock-data';

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const fee = 2.99;
  const total = subtotal + fee;

  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <header className="border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/marketplace" className="text-lg font-black">Games Exchange</Link>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">Continue shopping</Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <h1 className="text-4xl font-black">Your cart</h1>

            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-4">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400" />
                <div className="flex-1">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-sm text-slate-400">Qty: {item.qty}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black">${item.price.toFixed(2)}</p>
                  <button className="mt-2 inline-flex items-center gap-2 text-sm text-red-300">
                    <Trash2 className="h-4 w-4" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-black">Order summary</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Processing fee</span><span>${fee.toFixed(2)}</span></div>
              <div className="flex justify-between border-t border-white/10 pt-3 text-base font-bold text-white"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-semibold text-white">
              <ShoppingCart className="h-4 w-4" /> Proceed to checkout
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}
