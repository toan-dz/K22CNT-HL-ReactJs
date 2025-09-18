import React from 'react'
import LxtUseState from './components/LxtUseState'
import LxtListStudent from './components/LxtListStudent'
import LxtUseEffectDemo from './components/LxtUseEffectDemo'
import LxtExampleContext from './components/LxtExampleContext'

export default function LxtApp() {
  return (
    <div className='container border'>
      <h1>React Hook - Demo [Le Xuan Toan]</h1>
      <hr />

      <LxtUseState />

      <LxtListStudent />

      <LxtUseEffectDemo />

      <LxtExampleContext />
    </div>
  )
}