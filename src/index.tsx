import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import '../styles/style.css'

const root = createRoot(document.getElementById('container'))
root.render(React.createElement(App))