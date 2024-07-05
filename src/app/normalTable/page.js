import React from 'react'
import NormalTable from '../components/NormalTable'
import ButtonSwitch from '../components/ButtonSwitch'

export default function NormalTablePage() {
  return (
    <main>
      <div className="flex justify-center mt-20">
        <ButtonSwitch></ButtonSwitch>
        
        
      </div>

      <div>
      <NormalTable></NormalTable>
      </div>
    </main>
  )
}
