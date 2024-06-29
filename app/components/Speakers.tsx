import { GlareCard } from '@/app/lib/ui/card'

export default function Speakers() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-2xl font-bold text-purple-600 p-4 w-full text-center">
        КОМАНДА СЛУЖИТЕЛЕЙ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-10 gap-4 max-w-3xl items-center my-10">
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s9.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Леонид Вороненко
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s1.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Инга Вороненко
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/2-2.jpg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Геннадий Ахримович
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s4.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Виталий Шушкевич
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s2.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Сергей Кобрин
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s3.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Оксана Кобрин
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s6.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Нормунд Пиесис
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s5.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Оксана Пиесис
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s7.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Филипп Бэй
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/s8.jpeg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-md font-bold">
            Эстэра Вороненко
          </div>
        </div>
      </div>
    </div>
  )
}
