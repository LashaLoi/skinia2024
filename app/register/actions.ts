'use server'

export async function registerAction(prevState: unknown, formData: FormData) {
  const result: Record<string, FormDataEntryValue> = {}

  formData.forEach((value, key) => {
    if (value === 'on') value = '+'

    result[key] = value
  })

  try {
    const data = await fetch(
      'https://script.google.com/macros/s/AKfycbx-7ST-7WH1aLPMZLVYJTW7ZTBmiSKLNazPUf3WeokeCn2Ib3gDpq44ilGhXu49TBPE/exec',
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
