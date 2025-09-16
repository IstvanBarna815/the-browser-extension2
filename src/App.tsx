import React, { useEffect, useState } from "react"
import ExtCardLol from "./components/ExtensionCard"
import SearchingForBar from "./components/SearchingForBar"

type ExtensionStuff = {
  id: number,
  name: string,
  description: string,
  logo: string,
  isActive: boolean
}

function BigAppThing() {
  const [everyExt, setEveryExt] = useState<ExtensionStuff[]>([])
  const [filterThing, setFilterThing] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then((data: Omit<ExtensionStuff, "id">[]) => {
        const inactiveData = data.map((ext, index) => ({
          ...ext,
          id: index + 1,
          isActive: false
        }))
        setEveryExt(inactiveData)
      })
  }, [])

  function deleteOne(id: number) {
    setEveryExt(everyExt.filter(x => x.id !== id))
  }

  function toggleOne(id: number) {
    setEveryExt(everyExt.map(x => {
      if (x.id === id) {
        return { ...x, isActive: !x.isActive }
      }
      return x
    }))
  }

  let stuffToShow = everyExt
  if (filterThing === "active") {
    stuffToShow = everyExt.filter(x => x.isActive)
  } else if (filterThing === "inactive") {
    stuffToShow = everyExt.filter(x => !x.isActive)
  }

  stuffToShow = stuffToShow.filter(ext =>
    ext.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ext.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <nav className="navbar">
        <div>
          <img src="/assets/images/logo.svg" alt="App Logo" className="app-logo" />
        </div>
        <div>
          <button className="darkmode-btn">🌙</button>
          <SearchingForBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </nav>


      <div className="filters">
        <button
          onClick={() => setFilterThing("all")}
          className={filterThing === "all" ? "active-filter" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilterThing("active")}
          className={filterThing === "active" ? "active-filter" : ""}
        >
          Active
        </button>
        <button
          onClick={() => setFilterThing("inactive")}
          className={filterThing === "inactive" ? "active-filter" : ""}
        >
          Inactive
        </button>
      </div>


      <div className="cardWrapper">
        {stuffToShow.map(one => (
          <ExtCardLol
            key={one.id}
            {...one}
            removeFunc={deleteOne}
            toggleFunc={toggleOne}
          />
        ))}
      </div>
    </div>
  )
}

export default BigAppThing
