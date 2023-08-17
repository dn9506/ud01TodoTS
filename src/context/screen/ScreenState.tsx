import React, { useState } from 'react'
import { ScreenContext } from './screenContext'

export const ScreenState = ({ children }: React.PropsWithChildren) => {
	//const [state, dispatch] = useReducer(screenReducer, null)

	const [state, setState] = useState<string | null>(null)

	const changeScreen = (id: string | null) => setState(id)
	// dispatch({ type: countActionScreen.CHANGE_SCREEN, payload: id })

	return (
		<ScreenContext.Provider
			value={{
				changeScreen,
				todoId: state,
			}}
		>
			{children}
		</ScreenContext.Provider>
	)
}
