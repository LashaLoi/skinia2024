import { Form } from './components/Form'
import { BackgroundLines } from '@/app/components/BackgroundLines'
import { redirect } from 'next/navigation'

export default function RegisterPage() {
  redirect('/')

  return (
    <>
      <div className="mt-10 relative overflow-hidden before:absolute before:top-0 before:start-1/2  before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-xl text-center mx-auto">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
              <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                Регистрация
              </h1>
            </BackgroundLines>
            {/* <p className="mt-4 text-xl">24-26 июля</p> */}
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Заполните все вопросы чтобы стать участником{' '}
              <span className="text-purple-800">СКИНИИ</span>
            </p>
          </div>
        </div>
      </div>
      <Form />
    </>
  )
}
