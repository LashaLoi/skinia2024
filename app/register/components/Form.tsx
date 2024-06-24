'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { Button } from '@/app/lib/ui/button'
import { registerAction } from '@/app/register/actions'

export function Form() {
  const [state, action] = useFormState(registerAction, null)
  const status = useFormStatus()

  return (
    <div className="flex flex-col items-center justify-between bg-white p-4 mt-[140px]">
      <div className="flex flex-col max-w-[700px] w-full">
        <div className="text-gray-800 w-full ">
          <p className="text-3xl font-bold text-center mb-8">
            Заполните все вопросы чтобы стать участником{' '}
            <span className="text-purple-600">СКИНИИ 2024</span>
          </p>
          <div className="text-lg my-4">
            <div>
              1 день - <b>35 рублей</b>
            </div>
            <div>
              3 дня - <b>100 рублей</b>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="mb-2 font-bold">Что входит в эту цену?</h2>
            <p>- полное посещение школы в зарегистрированные дни</p>
            <p>- блокнот</p>
            <p>- карандаш</p>
            <p>- бейдж</p>
            <p>- приятные бонусы</p>
          </div>
        </div>
        {state?.error && (
          <div className="flex justify-center text-red-500 my-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Что-то пошло не так, перезагрузите страницу и попробуйте снова
            </span>
          </div>
        )}
        <form action={action} className="text-start w-full">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-900">
                Фамилия Имя
                <input
                  name="fullName"
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-900 ">
                Дата рождения
                <input
                  name="age"
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="14/10/1998"
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-900 ">
                Город
                <input
                  name="city"
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-900 ">
                Телефон
                <input
                  name="phone"
                  type="tel"
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-900 ">
                Церковь
                <input
                  name="church"
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </label>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-md font-medium text-gray-900 ">
                В какие дни планируешь быть на скинии?
                <div className="text-sm mt-2 text-gray-600">
                  <span className="text-red-500">*</span> В марафоне хвалы могут
                  учавствовать только те, кто проходил обучение в 1 и 2 день
                  школы
                </div>
                <select
                  name="days"
                  defaultValue="Все три дня"
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                >
                  <option value="Все три дня">Все три дня</option>
                  <option value="Пятница и суббота">Пятница и суббота</option>
                  <option value="Только на учении в четверг и пятницу">
                    Только на учении в четверг и пятницу
                  </option>
                </select>
              </label>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-900 "
              >
                Ваше служение в церкви
                <select
                  name="sermon"
                  defaultValue="Лидер прославления"
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                >
                  <option value="Лидер прославления">Лидер прославления</option>
                  <option value="Служитель прославления">
                    Служитель прославления
                  </option>
                  <option value="Пастор">Пастор</option>
                  <option value="Помощник пастора">Помощник пастора</option>
                  <option value="Другое">Другое</option>
                  <option value="Не несу служение">Не несу служение</option>
                  <option value="Не прихожанин церкви">
                    Не прихожанин церкви
                  </option>
                </select>
              </label>
            </div>

            <div className="sm:col-span-2">
              <label className="block  text-sm font-medium text-gray-900 ">
                Комментарий
                <textarea
                  name="comment"
                  rows={8}
                  className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  "
                />
              </label>
            </div>
          </div>
          <div className="h-4" />
          <Button>{status.pending ? 'Отправка...' : 'Отправить'}</Button>
        </form>
      </div>
    </div>
  )
}
