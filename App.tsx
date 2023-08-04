import * as Font from 'expo-font'
import { MainLayout } from './src/MainLayout'
import { ScreenState } from './src/context/screen/ScreenState'
import { TodoState } from './src/context/todo/TodoState'

async function loadApplication() {
	await Font.loadAsync({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-bolt': require('./assets/fonts/Roboto-Bold.ttf'),
	})
}

export default function App() {
	return (
		<ScreenState>
			<TodoState>
				<MainLayout />
			</TodoState>
		</ScreenState>
	)
}
