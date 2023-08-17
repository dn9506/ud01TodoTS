type TypeConfig = {
	method: string
	headers: { 'Content-Type': string }
	body?: string
}
export class Http {
	static HEADERS = { 'Content-Type': 'application/json' }

	static async get(url: string) {
		try {
			return await request(url, 'GET')
		} catch (e) {
			console.log(e)
			throw e
		}
	}

	static async post(url: string, data = {}) {
		try {
			return await request(url, 'POST', data)
		} catch (e) {
			console.log(e)
		}
	}

	static async delete(url: string) {
		try {
			return await request(url, 'DELETE')
		} catch (e) {
			console.log(e)
		}
	}

	static async patch(url: string, data = {}) {
		try {
			return await request(url, 'PATCH', data)
		} catch (e) {
			console.log(e)
		}
	}
}

async function request(url: string, method = 'GET', data?: {}) {
	let config: TypeConfig = {
		method,
		headers: Http.HEADERS,
	}

	if (method === 'POST' || method === 'PATCH') {
		config = {
			...config,
			body: JSON.stringify(data),
		}
	}

	const response = await fetch(url, config)
	return await response.json()
}
