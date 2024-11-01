import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import ig from './../../public/Logo.png'
function App() {
  return (
    <>
    <div>I am app</div>
    <Button>Click Me</Button>
    <Image src={ig} alt="logo" width={100} height={100} />
    </>
  )
}

export default App
