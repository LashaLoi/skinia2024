import React from 'react'

import { Navbar } from '@/app/lib/ui/navbar'
import { Home, MessageCircle, GalleryThumbnails, List } from 'lucide-react'

const items = [
  {
    name: 'Главная',
    link: '/',
    icon: <Home height={15} width={15} />,
  },
  {
    name: 'Отзывы',
    link: '/feedback',
    icon: <MessageCircle height={15} width={15} />,
  },
  {
    name: 'Воспоминания',
    link: '/gallery',
    icon: <GalleryThumbnails height={15} width={15} />,
  },
  {
    name: 'Расписание',
    link: '/program',
    icon: <List height={15} width={15} />,
  },
]

export default function Header() {
  return <Navbar navItems={items} />
}
