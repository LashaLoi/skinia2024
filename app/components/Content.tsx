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
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
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
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
]

export default function Content() {
  return <StickyScroll content={content} />
}
