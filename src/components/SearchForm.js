import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {search} = useGlobalContext()
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm