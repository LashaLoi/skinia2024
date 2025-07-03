export default function OnlinePage() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="p-5">
        <h2 className="text-2xl sm:text-4xl font-bold text-purple-800 relative z-20 mb-6 mt-[100px]">
          Добровольное пожертвование
        </h2>
        <p className="mb-4">
          В мобильном приложении любого банка выбираете вкладку{' '}
          <span className="text-purple-600">платеж</span> -{'>'}{' '}
          <span className="text-purple-600">свободный платеж</span> -{'>'}{' '}
          <span className="text-purple-600">перевод по реквизитам.</span>
        </p>

        <div className="mb-4">
          <p>
            УНП получателя - <span className={'font-bold'}>193810786</span>
          </p>
          <p>
            Счет получателя -{' '}
            <span className={'font-bold'}>BY83UNBS30151653200000001933</span>
          </p>
          <p>
            Наименование получателя/получатель Учреждение -{' '}
            <span className={'font-bold'}>СКИНИЯ БАЙ</span>
          </p>
          <p>
            БИК банка получателя (при необходимости) -{' '}
            <span className={'font-bold'}>UNBSBY2X</span>
          </p>
          <p>
            Назначение платежа -{' '}
            <span className={'font-bold'}>Добровольное пожертвование</span>
          </p>
          <p>ФИО плательщика и Адрес</p>
        </div>

        <div>
          По окончанию платежа, необходимо отправить фотографию чека{' '}
          <a
            className="text-purple-800"
            href="https://t.me/esthervoronenko"
            target="_blank"
            rel="noreferrer"
          >
            @esthervoronenko
          </a>
        </div>
      </div>
    </div>
  )
}
