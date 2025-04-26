'use client'

import Image from 'next/image'

export default function MinimalTopbar() {
  return (
    <div className="flex items-center px-4 py-2 bg-gray-800 shadow-md">
      <Image 
        src="/profile.png"  // replace with your image file name
        alt="Sankita"
        width={40}
        height={40}
        className="rounded-full"
      />
      <h1 className="ml-3 text-lg font-semibold">Sankita</h1>
    </div>
  )
}
