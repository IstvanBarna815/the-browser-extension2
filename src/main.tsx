import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BigAppThing from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BigAppThing />
  </StrictMode>,
)

