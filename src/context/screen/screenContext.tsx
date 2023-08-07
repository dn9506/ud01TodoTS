import React from 'react'

type TypeScreenContext = string | null

export const ScreenContext = React.createContext<TypeScreenContext>(null)
