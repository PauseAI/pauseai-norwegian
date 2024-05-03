//import type { Person } from '$lib/types'
import type { People } from '$lib/types'

export const prerender = false

export const load = async ({ fetch }) => {
	const response = await fetch('api/people')
	const posts: People = await response.json()
	return {
		props: posts

	}
}
