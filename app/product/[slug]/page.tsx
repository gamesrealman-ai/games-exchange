import Link from 'next/link';
import { ArrowLeft, Check, ShieldCheck, ShoppingCart, Star } from 'lucide-react';
import { games } from '@/lib/mock-data';

const product = games[0];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <header className="border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/marketplace" className="inline-flex items-center gap-2 text-sm text-slate-300">
            <ArrowLeft className="h-4 w-4" /> Back to marketplace
          </Link>
          <Link href="/cart" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold">Cart</Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-4">
            <div className={`h-[420px] rounded-[1.5rem] bg-gradient-to-br ${product.accent} p-4`}>
              <div className="flex h-full flex-col justify-between rounded-[1.3rem] border border-white/10 bg-slate-950/30 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">Hot deal</span>
                  <span className="rounded-full bg-black/20 px-3 py-1 text-xs text-white">Steam</span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Global • instant delivery</p>
                  <h1 className="mt-3 text-4xl font-black">{product.title}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                {product.rating} rating • {product.reviews} reviews
              </div>

              <div className="mt-5 flex items-end gap-3">
                <p className="text-4xl font-black text-white">{product.price}</p>
                <p className="pb-1 text-lg text-slate-400 line-through">{product.original}</p>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Instant email delivery</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Verified seller</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> 24/7 support</div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-semibold text-white">
                  <ShoppingCart className="h-4 w-4" />
                  Add to cart
                </button>
                <button className="flex flex-1 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white">
                  Buy now
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-white">
                  M
                </div>
                <div>
                  <p className="font-bold">MightyTrade</p>
                  <p className="text-sm text-slate-400">Trusted seller • 4.9 rating</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><p className="text-slate-400">Sales</p><p className="mt-2 text-lg font-bold text-white">12k+</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><p className="text-slate-400">Response</p><p className="mt-2 text-lg font-bold text-white">2 min</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><p className="text-slate-400">Support</p><p className="mt-2 text-lg font-bold text-white">24/7</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-violet-300" />
            <h2 className="text-2xl font-black">What you get</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-bold">Activation code</p><p className="mt-2 text-sm text-slate-400">Delivered securely with full instructions and verification steps.</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-bold">Guarantee</p><p className="mt-2 text-sm text-slate-400">Protected purchase with instant support if the delivery fails.</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-bold">Refund policy</p><p className="mt-2 text-sm text-slate-400">Quick claims handled by verified customer support within minutes.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
