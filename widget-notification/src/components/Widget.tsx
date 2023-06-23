import { Check, Rocket, X } from "lucide-react";

export function Widget() {
  return(
    <div className="w-[448px] rounded overflow-hidden">
      {/* Header */}
      <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold ">Notification</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      {/* Recent Section*/}

      <div >
        <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">Recentes</div>
      </div>

      <div className="divide-y-2 divide-zinc-950">

      <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-sm leading-relaxed text-zinc-100">Você recebeu um convite para fazer parte da empresa Rocketseat.</p>
          <div className="text-xxs text-zinc-400 flex items-center gap-2">
            <span>Convite</span>
            <span>Há 3 minutos</span>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-sm leading-relaxed text-zinc-100">Você recebeu um convite para fazer parte da empresa Rocketseat.</p>
          <div className="text-xxs text-zinc-400 flex items-center gap-2">
            <span>Convite</span>
            <span>Há 3 minutos</span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-center ">
          <button className="h-8 w-8 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700">
            <X className="w-3 h-3 text-zinc-50" />
          </button>
          <button className="h-8 w-8 flex items-center justify-center bg-violet-500 hover:bg-violet-600">
            <Check className="w-3 h-3 text-zinc-50"/>
          </button>
        </div>
      </div>
      </div>


        {/* Old Section*/}

      <div>
        <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">Antigas</div>
      </div>

      <div className="divide-y-2 divide-zinc-950">

      <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-sm leading-relaxed text-zinc-400">Você recebeu um convite para fazer parte da empresa Rocketseat.</p>
          <div className="text-xxs text-zinc-400 flex items-center gap-2">
            <span>Convite</span>
            <span>Há 3 minutos</span>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-sm leading-relaxed text-zinc-400">Você recebeu um convite para fazer parte da empresa Rocketseat.</p>
          <div className="text-xxs text-zinc-400 flex items-center gap-2">
            <span>Convite</span>
            <span>Há 3 minutos</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}