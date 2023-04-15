import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'

import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 flex items-center group gap-4 group rounded overflow-hidden hover:bg-white/10 transition-colors ">
              <Image
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />
              <strong>Wasting Light</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors ">
              <Image
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors ">
              <Image
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors ">
              <Image
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors ">
              <Image
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors ">
              <Image
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Marlison Mourão
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />

              <strong className="font-semibold">Dayli Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wallows, COIN girl, in red and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />

              <strong className="font-semibold">Dayli Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wallows, COIN girl, in red and more
              </span>
            </a>{' '}
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />

              <strong className="font-semibold">Dayli Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wallows, COIN girl, in red and more
              </span>
            </a>{' '}
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />

              <strong className="font-semibold">Dayli Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wallows, COIN girl, in red and more
              </span>
            </a>{' '}
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                className="w-full"
                src="/Album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Foo Fights"
              />

              <strong className="font-semibold">Dayli Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Wallows, COIN girl, in red and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
