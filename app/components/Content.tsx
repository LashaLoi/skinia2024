import React from 'react'
import { GlowingEffect } from '@/app/components/GridItem'
import { Book, BicepsFlexed, Rainbow, MessageCircle } from 'lucide-react'

import { list, put } from '@vercel/blob'

interface GridItemProps {
  area?: string
  icon: React.ReactNode
  title: string
  description?: React.ReactNode
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[5rem] sm:w-fit w-full list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-2 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              {description && (
                <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  {description}
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default async function Content() {
  const { blobs } = await list({
    prefix: 'skiniavideo-hq7HVhkU0bpvmII2FM3xxAyhgBptni.MOV',
    limit: 1,
  })
  const { url } = blobs[0]

  return (
    <>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-bold md:text-3xl text-purple-800 text-center">
                <span className="text-2xl">ПОКЛОНЕНИЕ</span> <br /> ЭТО ТО, КТО
                ТЫ ЕСТЬ!
              </h2>
            </div>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              Восстановление Первой заповеди начинается с восстановления
              Божественных стандартов человеческой личности, и, в первую
              очередь, Его поклонников. Тот, кто реально поклоняется Отцу, у
              того, как сказано в Писании, из чрева потекут реки воды живой.
              Реформация церкви, а значит общества, начинается с реформации
              великого и вечного служения поклонения!
            </p>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              СКИНИЯ - это начало твоего преображения!
            </p>

            <video className="w-full" autoPlay muted controls preload="none">
              <source src={url} type="video/mp4" />
              Ваш браузер не поддерживает видео
            </video>
          </div>
        </div>
      </div>

      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-2xl font-bold text-purple-800 p-4 w-full text-center mb-10">
          Основные направления
        </h2>
        <ul className="flex flex-wrap justify-center gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            icon={<Book className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Учение о поклонении"
          />

          <GridItem
            icon={
              <BicepsFlexed className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Практическое применение знаний"
          />

          <GridItem
            icon={
              <Rainbow className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Пророческое поклонение"
          />

          <GridItem
            icon={
              <MessageCircle className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="  Знакомство, общение, обмен опытом"
          />
        </ul>
      </div>
    </>
  )
}
