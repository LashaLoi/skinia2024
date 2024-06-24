import { Button } from '@/app/lib/ui/button'
import { useFormStatus } from 'react-dom'

export function Submit() {
  const status = useFormStatus()

  return <Button>{status.pending ? 'Отправка...' : 'Отправить'}</Button>
}
