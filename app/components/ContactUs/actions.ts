'use server'

export async function submitAction(prevState: unknown, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  try {
    const data = await fetch(
      'https://script.google.com/macros/s/AKfycby8OmR4sWTncTTU1vxqVJ2Ewkkj5BDV_ZnEmoQFwgMbRsmemwGVjPhqBrl0XApXDX5u/exec',
      {
        redirect: 'follow',
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ name, email, message, type: 'FAQ' }),
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
