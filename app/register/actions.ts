'use server'

import { redirect } from 'next/navigation'

export async function registerAction(prevState: unknown, formData: FormData) {
  const result: Record<string, FormDataEntryValue> = {}

  formData.forEach((value, key) => {
    result[key] = value
  })

  try {
    redirect('/registered')
  } catch (error) {
    return {
      error: false,
    }
  }
}
