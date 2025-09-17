import React from 'react'
import LxtUseState from './components/LxtUseState'
import LxtListStudent from './components/LxtListStudent'

export default function LxtApp() {
  return (
    <div className='container border'>
      <h1>React Hook - Demo [Lê Xuân Toàn]</h1>
      <hr />

      <LxtUseState />

      <LxtListStudent />
    </div>
  )
}