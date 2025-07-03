'use client'

import { motion } from 'framer-motion'
import { Fragment, useState } from 'react'

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
          time: '9:30',
          title: 'работает кафе',
        },
        {
          time: '10:00',
          title: 'молитва и разбор Библии',
        },
        {
          time: '11:30',
          title: 'перерыв',
        },

        {
          time: '12:00',
          title: 'семинар + обратная связь',
        },
        {
          time: '13:00',
          title: 'обед',
        },
        {
          time: '14:00',
          title: 'творческая лаборатория',
        },
        {
          time: '16:00',
          title: 'перерыв',
        },
        {
          time: '16:30',
          title: 'ЗВУК | открытая пультовая',
        },
        {
          time: '18:00',
          title: 'ужин',
        },
        {
          time: '19:00',
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
          time: '9:30',
          title: 'работает кафе',
        },
        {
          time: '10:00',
          title: 'молитва и разбор Библии',
        },
        {
          time: '11:30',
          title: 'перерыв',
        },
        {
          time: '12:00',
          title: 'семинар + обратная связь',
        },
        {
          time: '13:00',
          title: 'обед',
        },
        {
          time: '14:00',
          title: 'творческая лаборатория',
        },
        {
          time: '16:00',
          title: 'перерыв',
        },
        {
          time: '16:30',
          title: 'общение с командой ЖИЗНЬ | опыт 50 часов хвалы',
        },
        {
          time: '17:00',
          title: 'общение с пасторами и служителями',
        },
        {
          time: '18:00',
          title: 'ужин',
        },
        {
          time: '19:00',
          title: 'вечер молитвы и поклонения',
        },
      ],
    },
    {
      get: third,
      set: setThird,
      title: 'День - 3',

      event: [
        {
          time: '9:00',
          title: 'подготовки',
        },
        {
          time: '10:00',
          title: 'хвала, поклонение и молитва',
          description:
            'На марафон хвалы вход доступен только участникам Скинии!',
        },
        {
          time: '18:00',
          title: 'ужин',
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
              className="text-4xl font-extrabold leading-tight tracking-tight text-purple-800  mono"
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
                        <Fragment key={event.title + i}>
                          <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p className="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                              {event.time}
                            </p>
                            {event.description ? (
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 ">
                                  {event.title}
                                </h3>
                                <p>{event.description}</p>
                              </div>
                            ) : (
                              <h3 className="text-lg font-semibold text-gray-900 ">
                                {event.title}
                              </h3>
                            )}
                          </div>
                        </Fragment>
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
