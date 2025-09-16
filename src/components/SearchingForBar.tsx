import React from "react"

type SearchProps = {
  searchTerm: string,
  onSearchChange: (value: string) => void
}

const SearchingForBar = ({ searchTerm, onSearchChange }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search extensions..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-box"
    />
  )
}

export default SearchingForBar
