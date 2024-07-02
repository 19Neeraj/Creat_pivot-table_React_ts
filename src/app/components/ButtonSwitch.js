import Link from 'next/link'
import React from 'react'

export default function ButtonSwitch() {
  return (
    <main className='flex gap-3'>
        <Link href='/'><button className='p-1 px-2 bg-slate-300  cursor-pointer '>customize_Table</button></Link>
        <Link href='/syncfusionStart'><button className='p-1 px-2 bg-slate-300  cursor-pointer'>Basic_Table</button></Link>
        <Link href='/syncfusionConditionFormating'><button className='p-1 px-2 bg-slate-300  cursor-pointer'>syncfusionConditionFormating</button></Link>
    </main>
  )
}
