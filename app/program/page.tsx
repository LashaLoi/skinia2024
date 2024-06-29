'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const useProgram = () => {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  return [
    {
      get: first,
      set: setFirst,
      title: 'День - 1',
      event: [
        {
          time: '10:00',
          title: 'молитва',
        },
        {
          time: '11:00',
          title: 'перерыв',
        },
        {
          time: '11:10',
          title: 'учение о поклонении + обратная связь',
        },

        {
          time: '13:00',
          title: 'обед',
        },
        {
          time: '14:00',
          title: 'мастер-класс о звуке - Сергей Кобрин',
        },
        {
          time: '15:30',
          title: 'перерыв',
        },
        {
          time: '15:40',
          title: 'знакомство и общение, представление команд',
        },
        {
          time: '17:00',
          title: 'ужин / подготовка к вечеру',
        },
        {
          time: '18:30',
          title: 'вечер хвалы и поклонения',
        },
      ],
    },
    {
      get: second,
      set: setSecond,
      title: 'День - 2',
      event: [
        {
          time: '10:00',
          title: 'молитва',
        },
        {
          time: '11:00',
          title: 'перерыв',
        },
        {
          time: '11:10',
          title: 'учение о поклонении + обратная связь',
        },
        {
          time: '13:00',
          title: 'обед',
        },
        {
          time: '14:00',
          title:
            'творческая лаборатория: презентация авторских песен и проектов',
        },
        {
          time: '15:30',
          title: 'перерыв',
        },
        {
          time: '15:40',
          title:
            'творческая лаборатория: выступление участников + обратная связь от учителей',
        },
        {
          time: '17:00',
          title: 'ужин / подготовка к вечеру',
        },
        {
          time: '18:30',
          title: 'вечер хвалы и поклонения',
        },
      ],
    },
    {
      get: third,
      set: setThird,
      title: 'День - 3',

      event: [
        {
          time: '10:00',
          title: 'молитва',
        },
        {
          time: '11:00',
          title: 'перерыв',
        },
        {
          time: '11:10',
          title: 'учение о поклонении, молитва + обратная связь',
        },
        {
          time: '13:00',
          title: 'обед',
        },
        {
          time: '14:00',
          title: 'творческая лаборатория: пение и игра псалмов',
        },
        {
          time: '15:30',
          title: 'перерыв',
        },
        {
          time: '15:40',
          title: 'творческая лаборатория: пение и игра псалмов',
        },
        {
          time: '17:00',
          title: 'ужин / подготовка к вечеру',
        },
        {
          time: '18:30',
          title: 'вечер хвалы и поклонения',
        },
      ],
    },
  ]
}

export default function ProgramPage() {
  const program = useProgram()

  return (
    <div className="flex flex-col items-center justify-between bg-white p-4 z-10 mt-[120px]">
      <div className="w-full relative lg:max-w-xl antialiased z-10">
        <div className="max-w-screen-xl py-8 lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-4xl font-extrabold leading-tight tracking-tight text-purple-600  mono"
            >
              РАСПИСАНИЕ
            </motion.h2>
          </div>

          {program.map((day, i) => (
            <div key={i}>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="max-w-3xl mx-auto text-center mt-10"
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => day.set((state) => !state)}
                  className="btn sm:w-1/2 w-full"
                >
                  {day.title}
                </motion.button>
              </motion.div>

              {day.get ? (
                <>
                  <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                    <div className="-my-4 divide-y divide-gray-200 ">
                      {day.event.map((event, i) => (
                        <div
                          key={event.title + i}
                          className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center"
                        >
                          <p className="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            {event.time}
                          </p>
                          <h3 className="text-lg font-semibold text-gray-900 ">
                            {event.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
