//import { AIRTABLE_API_KEY } from '$env/static/private'
//import { options } from '$lib/api.js'
import type { Person } from '$lib/types.js'
import { json } from '@sveltejs/kit'


//Jan-Erik
const je:Person = {
	id: 'janerik',
	name: 'Jan-Erik Vinje',
	bio: 'Jeg er en 46 år gammel familiefar med kone og to barn som jobber med teknologi (AR + Geospatial). Jeg tror kjærlighet er svaret på å passere Fermi-filteret. Selv om jeg er en agnostisk ateist, anser jeg Carl Sagans vakre og dype "Pale Blue Dot"-monolog som en slags hellig tekst, og vender tilbake til den som en form for "preken". Jeg tror vi jordboere kan finne en vei til en flott fremtid hvis vi lærer hvordan i tide.',
	title: 'Frivillig',
	image: './biopic/BioPic_JE.png',
	privacy: false
}	



/*function recordToPerson(record: any): Person {
	return {
		id: record.id || 'noId',
		name: record.fields.Name,
		bio: record.fields.Bio,
		title: record.fields.Title,
		image: record.fields.Image && record.fields.Image[0].thumbnails.large.url,
		privacy: record.fields.privacy
	}
}*/

const people: Person[] = [je];

//export async function GET({ fetch }) {
export function GET() {
	return json(people)
	/*const url = `https://api.airtable.com/v0/appWPTGqZmUcs3NWu/tblZhQc49PkCz3yHd`

	const response = await fetch(url, options)
	if (!response.ok) {
		throw new Error('Failed to fetch data from Airtable')
	}
	const data = await response.json()
	const out: Person[] = data.records
		.map(recordToPerson)
		.filter((p: Person) => p.image && !p.privacy)
		// Shuffle the array, although not truly random
		.sort(() => 0.5 - Math.random())*/
}
