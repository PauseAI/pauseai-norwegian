<script lang="ts">
	import Block from '$lib/components/Block.svelte'
	import Mark from '$lib/components/Mark.svelte'
	import PostMeta from '$lib/components/PostMeta.svelte'

	const title = 'Vi trenger en pause i AI'
	const description = 'Vi risikerer menneskehetens utryddelse. Vi trenger en pause i AI-utviklingen, umiddelbart.'
</script>

<PostMeta {title} {description} />

<section>
	<Block linkText="Les om hva vi risikerer" href="/risks">
		<span slot="title">Vi risikerer å <Mark>miste kontrollen</Mark></span>
		AI gir fantastiske muligheter, men den kan også skade demokratiet, destabilisere økonomien og brukes til å lage kraftige cybervåpen
	</Block>
	<Block linkText="Hvorfor og hvordan AI kan drepe oss" href="/xrisk">
		<span slot="title">Vi risikerer <Mark>utryddelse av menneskeheten</Mark></span>
		Mange ledende AI organisasjoner og forskere er samstemte om at det er en reell risiko for at AI kan føre til utryddelse av menneskeheten.
	</Block>
	<Block linkText="Les forslaget" href="/proposal">
		<span slot="title">Det er på høy tid med en <Mark>pause</Mark></span>
		Stop utviklingen av AI sysstemer som er kraftigere enn GPT-4 fremtil vi vet hvordan det kan gjøres på en trygg måte. 
		Dette må skje på internasjonalt nivå, og det må skje snart!
	</Block>
	<Block linkText="Hvor lang tid har vi på oss?" href="/urgency">
		<span slot="title">Vi må <Mark>handle nå</Mark></span>
		I 2020, trodde ekspertene at vi hadde mer enn 35 år frem til generell kunstig intelligens (AGI). 
		Nye gjennombudd tilsier at vi allerede kan være på terskelen til den type kunstig intelligens.
		Kunstig intelligens som overgår menneskelig intelligens på de aller fleste områder kan potensielt være så lite som ett 
		forskningsgjennombrudd unna. Derfor er det all grunn til å være veldig forsiktig.</Block
	>
	<Block linkText="Slik kan du bidra" href="/action">
		<span slot="title"><Mark>Du </Mark>kan hjelpe</span>
		Menneskehten mangler metoder for å sikre at overmenneskelig AGI ikke fører til katastrofale utfall. For få mennesker har inngående kunnskap om omfanget av AI-risiko. 
		Bidra til å fremskaffe og dele kunnskap om AI-risiko, og bidra til at vi stopper et livsfarlig AI-våpenkappløp mens vi fortsatt har muligheten.
	</Block>
</section>
