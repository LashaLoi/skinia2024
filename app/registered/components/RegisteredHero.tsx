import Link from 'next/link'

import { Button } from '@/app/lib/ui/button'

export function RegisteredHero() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="">
        <div className="text-black flex flex-col p-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-purple-600 relative z-20 mt-[140px]">
            Регистрация прошла успешно!
          </h2>
          <div className="max-w-[700px] text-lg">
            <div className="mt-4 mb-4">
              Команда школы не предоставляет бесплатный ночлег, если вам нужна
              помощь в поиске жилья в аренду, свяжитесь с нами{' '}
              <span className="text-purple-600"> +375 (29) 206-11-32 Анна</span>
            </div>
            <div>
              Приятный бонус для каждого участника - бесплатный обед! На месте
              будет работать платное кафе
            </div>
            <div className="mt-4 mb-4">
              В этом году мы запускаем марафон хвалы в последний день школы!
              Участие возможно только при условии, что вы были всю школу и всей
              командой. Благодарим за регистрацию и до встречи!
            </div>
            <div className="my-4">
              Присоединяйся к нашему Telegram-каналу, чтобы знать больше
              подробностей о школе и не пропустить важной информации! (
              <span className="text-purple-600">
                <a
                  href="https://t.me/+ckIe79U-NIZkMDli"
                  target="_blank"
                  rel="noreferrer"
                >
                  telegram
                </a>
              </span>
              )
            </div>
          </div>
          <div className="z-50 gap-8 flex items-center justify-center">
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
