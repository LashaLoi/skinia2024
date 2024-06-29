'use server'

export async function submitAction(prevState: unknown, formData: FormData) {
  const name = formData.get('name')
  const phone = formData.get('phone')
  const message = formData.get('message')

  try {
    const data = await fetch(
      'https://script.google.com/macros/s/AKfycbz3prk-TME0qfKjdz47R4LE2hUOAX5NaVECqA5KA2rhagiqkFhY3BxvZ4BS9sCwhut2/exec',
      {
        redirect: 'follow',
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ name, email: phone, message, type: 'FAQ' }),
      },
    )
    const res = await data.text()

    if (res === 'ok') {
      return {
        success: true,
        error: false,
      }
    }

    return {
      success: false,
      error: true,
    }
  } catch (error: unknown) {
    console.error(error)

    return {
      success: false,
      error: true,
    }
  }
}
