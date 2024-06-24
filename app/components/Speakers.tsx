import { GlareCard } from '@/app/lib/ui/card'

export default function Speakers() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-2xl font-bold text-purple-600 p-4 w-full text-center">
        Наши спикеры
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-10 gap-4 max-w-3xl items-center my-10">
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/2-2.jpg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-xl font-bold">
            Виталий Шушкевич
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/1-2.jpg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-xl font-bold">
            Леонид Вороненко
          </div>
        </div>

        <div className="flex flex-col items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/3-2.jpg"
            />
          </GlareCard>
          <div className="flex justify-center items-center mt-2 text-xl font-bold">
            Сергей Кобрин
          </div>
        </div>
      </div>
    </div>
  )
}
