'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/app/lib/ui/button'
import { Error } from '@/app/register/components/Error'

import { FormEventHandler, useRef, useState } from 'react'

export function Form() {
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState(false)
  const [pending, setPending] = useState(false)
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setPending(true)

    const formData = new FormData(formRef.current!)
    const result: Record<string, FormDataEntryValue> = {}

    formData.forEach((value, key) => {
      if (value === 'on') value = '+'

      result[key] = value
    })

    try {
      const data = await fetch(
        'https://script.google.com/macros/s/AKfycbzRLaLsRHMNRYCwSKuc_zFiM0Np1VI-Kt9-cjTOxp9xh5w5jIyJYY8JdR-N-5HpvR0l/exec',
        {
          redirect: 'follow',
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({ ...result, type: 'USERS' }),
        },
      )

      const res = await data.text()

      if (res === 'ok') {
        router.push('/registered')
        return
      }
    } catch (error) {
      console.error(error)

      setError(true)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-between bg-white p-4">
      <div className="flex flex-col max-w-[700px] w-full">
        <div className="text-gray-800 w-full ">
          <div className="text-lg my-4">
            <div className="mb-6">
              3 дня - <b>150 рублей</b>
            </div>
            <div className={'mb-6'}>
              <b>ВАЖНО:</b>
              <br />
              регистрация на школу подразумевает ваше присутствие все 3 дня!
              марафон хвалы в последний день проходит в рамках Скинии, для тех,
              кто был от начала, поэтому мы вдохновляем вас быть с нами все дни!
              <p className={'mt-2'}>C уважением команда организаторов</p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="mb-2 font-bold">Что входит в эту цену?</h2>
            <p>- свободный вход на все сессии</p>
            <p>- блокнот и ручка</p>
            <p>- сэндвич утром, обед и ужин</p>
            <p>- приятные бонусы</p>
          </div>
        </div>
        {error && <Error />}
        <form onSubmit={onSubmit} className="text-start w-full" ref={formRef}>
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
                  <option value="молитвенник">Молитвенник</option>
                  <option value="Не несу служение">Не несу служение</option>
                  <option value="Не прихожанин церкви">
                    Не прихожанин церкви
                  </option>
                </select>
              </label>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  name="q1"
                  onChange={({ target: { checked } }) => setChecked(checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="bordered-checkbox-1"
                  className="w-full p-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Хотели бы вы представить всем свой творческий номер или
                  авторский проект? (направление в служении, которым вы
                  занимаетесь)
                  <br />
                  Если вы готовы рассказать о своей деятельности, напишите нам!
                </label>
              </div>
            </div>
            {checked ? (
              <div className="sm:col-span-2">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-900 ">
                    Расскажите вкратце, что это будет?
                    <input
                      name="q2"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </label>
                </div>
              </div>
            ) : null}
            <div className="sm:col-span-2">
              <label className="block  text-sm font-medium text-gray-900 ">
                Окошко для вашего комментария или вопроса
                <textarea
                  name="comment"
                  rows={8}
                  className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  "
                />
              </label>
            </div>
          </div>
          <div className="h-4" />
          {/*@ts-expect-error*/}
          <Button disabled={pending}>
            {pending ? 'Отправка...' : 'Отправить'}
          </Button>
        </form>
      </div>
    </div>
  )
}
