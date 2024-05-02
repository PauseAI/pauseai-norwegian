<script>
	import consent from '$lib/components/widget-consent/WidgetConsentStore'
	import toast from 'svelte-french-toast'
</script>

<button
	class="button-to-link"
	title="Withdraw consent for social widgets"
	on:click={() => {
		if ($consent) {
			$consent = false
			toast.success('Samtykke for sosiale widgets er trukket tilbake!')
		} else {
			toast.error('Intet samtykke å trekke!')
		}
	}}
>
	Trekk samtykke
</button>
