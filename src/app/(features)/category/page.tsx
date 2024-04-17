"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Category() {

  const params = useSearchParams();

  const [name, setName] = useState('');

  useEffect(() => {

    let name = `${params.get('firstName')}${' '}${params.get('lastName')}` 

    setName(name)

  },[params])

  return (
    <div>
      
      <h1>This is Category Page</h1>
      
      <h2>My Name is: {name}</h2>
      
      </div>
  )
}

export default Category