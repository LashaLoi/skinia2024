import React from 'react'

import { StickyScroll } from '@/app/lib/ui/sticky-scroll-reveal'
import Image from 'next/image'

const content = [
  {
    title: 'О школе',
    description: (
      <>
        <span>
          Служение прославления было и остается одним из важнейших составляющих
          любой современной церкви. Это служение требует, высокого мастерства,
          как в духовных, так и в профессиональных навыках.
        </span>
        <br />
        <br />
        <span>
          Школа поклонения СКИНИЯ - это грамотное и разумное вложение своего
          времени и ресурсов, потому что за эти дни каждый участник найдет для
          себя массу ответов и получит стратегию и план для реформации своего
          служения, переведя его на качественно новый уровень для славы нашего
          Господа Иисуса Христа.
        </span>
      </>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-600),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: 'Основные направления',
    description: (
      <>
        <span>- Учение о поклонении</span>
        <br />
        <br />
        <span>- Практическое применение знаний</span>
        <br />
        <br />
        <span>- Пророческое поклонение</span>
        <br />
        <br />
        <span>- Знакомство, общение.</span>
        <br />
        <br />
        <span>- Обмен опытом</span>
      </>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/tb.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  // {
  //   title: 'Version control',
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Version control
  //     </div>
  //   ),
  // },
  // {
  //   title: 'Running out of content',
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-600),var(--emerald-500))] flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
]

export default function Content() {
  return (
    <>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl text-purple-600 text-center">
                О школе
              </h2>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Служение прославления было и остается одним из важнейших
                составляющих любой современной церкви. Это служение требует,
                высокого мастерства, как в духовных, так и в профессиональных
                навыках.
              </p>
            </div>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              Школа поклонения СКИНИЯ - это грамотное и разумное вложение своего
              времени и ресурсов, потому что за эти дни каждый участник найдет
              для себя массу ответов и получит стратегию и план для реформации
              своего служения, переведя его на качественно новый уровень для
              славы нашего Господа Иисуса Христа.
            </p>

            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-2xl font-bold text-purple-600 p-4 w-full text-center mb-10">
          Основные направления
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          <div>
            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
              <svg
                className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <circle cx="17.5" cy="17.5" r="3.5" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Учение о поклонении
              </h3>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
              <svg
                className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Практическое применение знаний
              </h3>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
              <svg
                className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Пророческое поклонение
              </h3>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
              <svg
                className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Знакомство, общение, обмен опытом
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
