import type { Team } from '$lib/types.js'
import { json } from '@sveltejs/kit'
//import { options } from '$lib/api.js'

function recordToTeam(record: any): Team {
	return {
		id: record.id || 'noId',
		name: record.fields.name,
		description: record.fields.mission,
		leadName: record.fields.name_from_lead,
		leadEmail: record.fields.email_address_from_lead
	}
}

export async function GET({ fetch }) {
	//const url = `https://api.airtable.com/v0/appWPTGqZmUcs3NWu/tblYLOPzJ32QOdBLg`
	const url = 'https://pauseai.info/api/teams'
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error('Failed to fetch data from Airtable')
	}
	
	const data = await response.json()
	return json(data);
	//const out: Team[] = data.records.map(recordToTeam)
	//return json(out)
}
