import { useState } from "react"
import './SearchBar.css'

export default function SearchBar({onSubmit}){
  const [term, setTerm] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    onSubmit(term)
  }

  function handleChange(e){
    setTerm(e.target.value)
  }
    return(
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <label>Enter Any Search Term:</label><br/>
          <input value={term} type="text" onChange={handleChange}/>
        </form>
      </div>
    )
  }