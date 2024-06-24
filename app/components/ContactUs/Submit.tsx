import { useFormStatus } from 'react-dom'
import { Button } from '@/app/lib/ui/button'

export function Submit() {
  const status = useFormStatus()

  return (
    <Button as="button" type="submit">
      {status.pending ? 'Отправка...' : 'Отправить'}
    </Button>
  )
}
