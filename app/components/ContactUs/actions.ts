'use server'

export async function submitAction(prevState: unknown, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  console.log({ name, email, message })

  try {
    return {
      success: true,
      error: false,
    }
  } catch (error: unknown) {
    console.error(error)

    return {
      success: false,
      error: true,
    }
  }
}
