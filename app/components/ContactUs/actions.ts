'use server'

export async function submitAction(prevState: unknown, formData: FormData) {
  const name = formData.get('name')
  const phone = formData.get('phone')
  const message = formData.get('message')

  try {
    const data = await fetch(
      'https://script.google.com/macros/s/AKfycbx-7ST-7WH1aLPMZLVYJTW7ZTBmiSKLNazPUf3WeokeCn2Ib3gDpq44ilGhXu49TBPE/exec',
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
