const DEBUG_EVENTS = false

export function nicelog(...args: any[]) {
	if (process.env.NODE_ENV !== 'production' && DEBUG_EVENTS) {
		 
		console.log(...args)
	}
}
