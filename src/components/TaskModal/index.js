import React from 'react'
import Header from './Header'
import Task from './Task'

export default function TaskModal() {
  return (
    <div className='h-full overflow-y-scroll'>
      <Header />
      <div className='h-20' />
      <Task />
      <Task />
      <Task />
    </div>
  )
}
