'use client'

import { useFormState } from 'react-dom'
import { submitAction } from './actions'

import { Submit } from '@/app/components/ContactUs/Submit'

export default function ContactUs() {
  const [state, action] = useFormState(submitAction, null)

  return (
    <div className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="text-2xl mb-4 text-purple-600 font-bold">
            Обратная связь
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Если у вас есть какие-нибудь вопросы по школе?
          </p>
        </div>
        {state?.error && (
          <div className="text-center mb-4 mx-auto text-red-500">
            Что-то пошло не так, перезагрузите страницу и попробуйте снова
          </div>
        )}
        {state?.success && (
          <div className="text-center mb-4 mx-auto text-green-500">
            <span>Ваш вопрос был отправлен!</span>
          </div>
        )}
        <form action={action} className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Имя
                </label>
                <input
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Электронная почта
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Сообщение
                </label>
                <textarea
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <Submit />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
