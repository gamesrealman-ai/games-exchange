import Link from 'next/link';
import { Filter, Search, SlidersHorizontal, Star } from 'lucide-react';
import { games } from '@/lib/mock-data';

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <header className="border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-white">
              G
            </div>
            <div>
              <p className="text-lg font-black">Games Exchange</p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 md:flex">
            <Search className="h-4 w-4" />
            <input className="w-72 bg-transparent text-white placeholder:text-slate-500 focus:outline-none" placeholder="Search for game credits, sellers, or gift cards" />
          </div>

          <Link href="/cart" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold">Cart</Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Marketplace</p>
            <h1 className="mt-3 text-4xl font-black">Game credits & digital goods</h1>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <SlidersHorizontal className="h-4 w-4" />
            Filter options
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold">Filters</h2>
              <button className="text-sm text-violet-300">Reset</button>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-semibold text-slate-300">Platform</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <label className="flex items-center gap-2"><input type="checkbox" /> Steam</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Epic Games</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Riot</label>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-300">Price range</p>
                <input type="range" min="0" max="100" className="w-full accent-violet-500" />
                <div className="mt-2 flex justify-between text-xs text-slate-400"><span>$0</span><span>$100+</span></div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-300">Seller rating</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <label className="flex items-center gap-2"><input type="checkbox" /> 4.7+</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> 4.8+</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> 4.9+</label>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-3">
              {['All', 'Most popular', 'Fast delivery', 'New', 'Top rated'].map((tab) => (
                <button key={tab} className={`rounded-full border px-4 py-2 text-sm ${tab === 'All' ? 'border-violet-500 bg-violet-500/15 text-violet-100' : 'border-white/10 bg-white/5 text-slate-300'}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {games.map((game) => (
                <Link href={`/product/${game.id}`} key={game.id} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 transition hover:-translate-y-1 hover:border-violet-400/50">
                  <div className={`h-40 bg-gradient-to-br ${game.accent} p-3`}>
                    <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-slate-950/30 p-3">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-100">
                          {game.badge}
                        </span>
                        <span className="rounded-full bg-black/20 px-2 py-1 text-xs text-white">{game.platform}</span>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-200">{game.region}</p>
                        <p className="mt-2 text-lg font-bold">{game.title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        {game.rating}
                      </div>
                      <span className="text-xs text-slate-400">{game.reviews} reviews</span>
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">From</p>
                        <p className="mt-1 text-2xl font-black text-white">{game.price}</p>
                      </div>
                      <div className="text-right text-xs text-slate-400 line-through">
                        {game.original}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-sm text-slate-300">{game.seller}</span>
                      <span className="rounded-full bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-200">Buy now</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
