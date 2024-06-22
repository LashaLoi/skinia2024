export function Response() {
  const error = false
  const success = false

  if (error) {
    return (
      <div className="text-center mb-4 mx-auto text-red-500">
        <span>
          Что-то пошло не так, перезагрузите страницу и попробуйте снова
        </span>
      </div>
    )
  }

  if (success) {
    return (
      <div className="text-center mb-4 mx-auto text-green-500">
        <span>Ваш вопрос был отправлен!</span>
      </div>
    )
  }

  return null
}
