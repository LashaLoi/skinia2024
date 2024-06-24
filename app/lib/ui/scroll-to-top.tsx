'use client'

import React from 'react'
import ScrollToTopComponent from 'react-scroll-to-top'

export function ScrollToTop() {
  return (
    <ScrollToTopComponent
      smooth
      top={200}
      component={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 scale-50 h-[40px] w-[40px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      }
      className="!z-40 !rounded-full !right-[20px] !bottom-[20px]"
    />
  )
}
