import SearchHeader from '@/components/SearchHeader'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='text-white'>
      <SearchHeader/>
      {children}
    </div>
  )
}

export default layout