import Link from 'next/link';
import { ArrowRight, Search, ShieldCheck, ShoppingCart, Star, TrendingUp, UserRound, Zap } from 'lucide-react';
import { categories, featuredGames, marketStats, topSellers } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-lg text-white shadow-glow">
              G
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">Games Exchange</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Secure marketplace</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link href="/marketplace" className="transition hover:text-white">Marketplace</Link>
            <Link href="/" className="transition hover:text-white">Deals</Link>
            <Link href="/" className="transition hover:text-white">Top Sellers</Link>
            <Link href="/" className="transition hover:text-white">Support</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 md:block">
              Sell items
            </button>
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-glow">
              <ShoppingCart className="h-4 w-4" />
              Cart (2)
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-sm text-violet-200">
              <TrendingUp className="h-4 w-4" />
              Trusted marketplace for game credit & items
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
                Trade digital game value with speed and trust.
              </h1>
              <p className="max-w-lg text-lg text-slate-300">
                Buy gift cards, wallet top-ups, and premium in-game currencies from verified sellers at market-leading prices.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/marketplace" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-glow">
                Explore marketplace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-base font-medium text-slate-100">
                Sell your items
              </button>
            </div>

            <div className="grid max-w-xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {marketStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-transparent blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-glow backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Live offers</p>
                    <h2 className="mt-2 text-xl font-bold">Popular deals</h2>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">Online now</span>
                </div>

                <div className="space-y-4">
                  {featuredGames.map((game) => (
                    <div key={game.id} className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                      <div className={`h-24 bg-gradient-to-r ${game.accent} p-3`}>
                        <div className="flex h-full items-end justify-between rounded-xl border border-white/10 bg-slate-950/30 p-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-white/70">{game.subtitle}</p>
                            <p className="mt-2 text-lg font-bold">{game.title}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-black">{game.price}</p>
                            <p className="text-xs text-white/70 line-through">{game.original}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Fast delivery</p>
                      <p className="mt-2 text-lg font-bold text-white">Instant wallet top-ups</p>
                    </div>
                    <Zap className="h-10 w-10 text-violet-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Browse categories</p>
            <h3 className="mt-2 text-3xl font-black">Find your next game deal</h3>
          </div>
          <Link href="/marketplace" className="inline-flex items-center gap-2 text-sm font-medium text-violet-300">
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category, idx) => (
            <button key={category} className={`rounded-full border px-4 py-2 text-sm ${idx === 0 ? 'border-violet-400 bg-violet-500/15 text-violet-100' : 'border-white/10 bg-white/5 text-slate-300'}`}>
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Top sellers</p>
            <h3 className="mt-2 text-3xl font-black">Verified traders</h3>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {topSellers.map((seller) => (
            <div key={seller.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-white">
                  {seller.name.slice(0, 1)}
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  {seller.badge}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white">{seller.name}</h4>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                {seller.rating}
              </div>
              <p className="mt-2 text-sm text-slate-400">{seller.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 lg:px-8">
        <div className="rounded-[2rem] border border-violet-500/20 bg-gradient-to-r from-violet-950/60 to-slate-950 p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Why choose us</p>
              <h3 className="mt-3 text-3xl font-black">Trust, speed, and a better gaming economy.</h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <ShieldCheck className="mb-3 h-8 w-8 text-violet-300" />
                <p className="font-bold">Secure payments</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <Zap className="mb-3 h-8 w-8 text-cyan-300" />
                <p className="font-bold">Instant delivery</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <UserRound className="mb-3 h-8 w-8 text-emerald-300" />
                <p className="font-bold">Verified sellers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050a12]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Games Exchange</div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white">Terms</Link>
            <Link href="/" className="hover:text-white">Privacy</Link>
            <Link href="/" className="hover:text-white">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
