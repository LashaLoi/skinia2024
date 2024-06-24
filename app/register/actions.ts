'use server'

export async function registerAction(prevState: unknown, formData: FormData) {
  const result: Record<string, FormDataEntryValue> = {}

  formData.forEach((value, key) => {
    result[key] = value
  })

  try {
    const data = await fetch(
      'https://script.google.com/macros/s/AKfycby8OmR4sWTncTTU1vxqVJ2Ewkkj5BDV_ZnEmoQFwgMbRsmemwGVjPhqBrl0XApXDX5u/exec',
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
      return {
        success: true,
        error: false,
      }
    }

    return {
      success: false,
      error: true,
    }
  } catch (error) {
    console.error(error)

    return {
      success: false,
      error: true,
    }
  }
}
