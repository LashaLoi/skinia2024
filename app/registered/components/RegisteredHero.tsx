import Link from 'next/link'

import { Button } from '@/app/lib/ui/button'

export function RegisteredHero() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="">
        <div className="text-black flex flex-col p-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-purple-600 relative z-20 mt-[140px]">
            РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!
          </h2>
          <div className="max-w-[700px] text-lg gap-2 flex flex-col">
            <div className="mt-8">Мы очень ждем тебя и хотим напомнить:</div>
            <div>
              - мы не предоставляем бесплатный ночлег, а если вам нужна помощь в
              поиске аренды жилья, обратитесь по номеру
              <span className="text-purple-600 mx-1">
                <a href="tel:+375292265835">+375292265835</a>
              </span>
              Эстэра
            </div>
            <div>- на месте будет работать платное кафе ☕️</div>
            <div>
              - присоединяйтесь к нашему{' '}
              <span className="text-purple-600">
                <a
                  href="https://t.me/skiniaby"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram-каналу
                </a>
              </span>{' '}
              , чтобы знать больше подробностей и не пропустить важной
              информации!
            </div>
          </div>
          <div className="z-50 gap-8 flex items-center justify-center mt-4">
            <Link href="/">
              <Button>На главную</Button>
            </Link>

            <Link href="/register">Регистрация</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
