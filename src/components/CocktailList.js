import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const CocktailList = () => {
  const {cocktails, isLoading} = useGlobalContext()

  if (isLoading) {
    return <div>
      <Loading />
    </div>
  }
  return (
    <div>
      
    </div>
  )
}

export default CocktailList
