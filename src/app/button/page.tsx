'use client'

import React, { useRef } from 'react'
import { Button } from '@/components'

const ButtonPage = () => {
  const ref = useRef<null | HTMLButtonElement>(null)

  return (
    <div className='grid grid-cols-3 gap-10 items-center border border-[#FFFFFF15] w-2/5 p-8 rounded-lg m-auto'>
      {/* Button example usage */}
      <Button
        ref={ref}
        size='sm'
        variant='default'
        onClick={() => { console.log({ variant: 'default' }) }}
      >
        Default
      </Button>

      <Button
        ref={ref}
        size='sm'
        variant='default'
        onClick={() => { console.log({ variant: 'default' }) }}
        disabled
      >
        Disabled
      </Button>

      <Button
        ref={ref}
        size='sm'
        variant='secondary'
        onClick={() => { console.log({ variant: 'secondary' }) }}
      >
        Secondary
      </Button>

      <Button
        ref={ref}
        size='sm'
        variant='destructive'
        onClick={() => { console.log({ variant: 'destructive' }) }}
      >
        Destructive
      </Button>

      <Button
        ref={ref}
        size='sm'
        variant='outline'
        onClick={() => { console.log({ variant: 'outline' }) }}
      >
        Outline
      </Button>

      <Button
        ref={ref}
        size='sm'
        variant='icon'
        onClick={() => { console.log({ variant: 'outline' }) }}
      >
        {'👋'}
      </Button>

      {/* Link/a example usage */}
      <Button
        size='sm'
        variant='link'
        // ! Must provide href prop
        href='/'
      >
        Link
      </Button>
    </div>
  )
}

export default ButtonPage
