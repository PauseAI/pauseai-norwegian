<script lang="ts">
	import PostMeta from '$lib/components/PostMeta.svelte'
	import { meta } from './meta'
	import Person from './person.svelte'
	export let data
	const { props } = data
	const { title, description, date } = meta
</script>

<PostMeta {title} {description} {date} />

<h1>{title}</h1>

<section data-pagefind-ignore>
	{#if props.length === 0}
		<p>Ingen team-medlemmer funnet</p>
	{/if}
	<ul class="people">
		{#each props as { name, image, bio, title }}
			<Person {name} {image} {bio} {title} />
		{/each}
	</ul>
</section>

<a href="https://pauseai.info/people"><h2>Folk i PauseAI internasjonalt</h2></a>


<h2>Bli med å etablere den norske avdelingen av PauseAI</h2>
<p>
	Organisasjonen PauseAI ble formelt <a href="https://pauseai.info/legal">etablert</a> i Nederland i februar 2024. Vi ønsker å bygge et team av frivillige i Norge fremover! 
	Om du er interessert ta kontakt med Jan-Erik Vinje,  midlertidig norsk talsperson for PauseAI i Norge på tlf: 48 03 70 51
	<a href="/join">Begynn med å melde deg inn i PauseAI internasjonalt!</a>

</p>


<style>
	.people {
		display: grid;
		gap: 1rem;
	}
</style>
