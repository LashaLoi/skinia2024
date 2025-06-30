import Image from 'next/image'

export default function Footer() {
  return (
    <section className="text-gray-600 mb-4 body-font flex justify-center flex-col w-full items-center overflow-hidden">
      <div className="w-full text-center ">
        <h2 className="text-2xl font-bold text-purple-800">Контактные лица</h2>
      </div>

      <div className="p-4 max-w-md sm:p-8">
        <div className="py-3 sm:py-4">
          <div className="flex flex-col items-center gap-3">
            <div className="flex-shrink-0">
              <Image
                className="rounded-full"
                src="/6.jpg"
                alt="Эстэра"
                height={32}
                width={32}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-medium text-gray-900 truncate">
                Эстэра (координатор)
              </p>
              <a
                href="https://t.me/esthervoronenko"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-sm text-gray-500 truncate ">
                  tg: @esthervoronenko
                </p>
              </a>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
              +375292265835
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
