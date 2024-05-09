<script lang="ts">
	import ExternalLink from '$lib/components/custom/a.svelte'
	import Toggle from '$lib/components/Toggle.svelte'
	import EditNorwegian from '$lib/components/EditNorwegian.svelte'
	import WithdrawWidgetConsentNorwegian from '$lib/components/widget-consent/WithdrawWidgetConsentNorwegian.svelte'
	import Socials from '$lib/components/Socials.svelte'
</script>

<footer>
	<div class="joinbar">
		<a class="c2a" href="https://pauseai.info/join">Bli med i PauseAI &gt;</a>
		<div class="socials">
			<Socials />
		</div>
	</div>
	<div class="bar" />
	<div class="footer-links">
		<div class="column">
			<h2>Info</h2>
			<a href="https://pauseai.info/faq">FAQ</a>
			<a href="/proposal">Forslag</a>
			<a href="https://pauseai.info/learn">Lær mer</a>
			<a href="https://pauseai.info/press">Presse / Media</a>
			<a href="/people">Folk</a>
			<a href="https://pauseai.info/teams">Team</a>
			<a href="https://pauseai.info/legal">Formell info om <br /> PauseAI <br /> (kvk 92951031)</a>
		</div>
		<div class="column">
			<h2>Risiko</h2>
			<a href="/risks">Risiko oversikt</a>
			<a href="https://pauseai.info/outcomes">AI-konsekvenser</a>
			<a href="https://pauseai.info/xrisk">Existensiell risiko</a>
			<a href="https://pauseai.info/psychology-of-x-risk">Psykologi rundt x-risk</a>
			<a href="https://pauseai.info/ai-takeover">AI overtakelse</a>
			<a href="https://pauseai.info/cybersecurity-risks">Cyber-risiko</a>
			<a href="https://pauseai.info/dangerous-capabilities">Farlige kapabiliteter</a>
			<a href="https://pauseai.info/sota">Dagens kapabiliteter</a>
			<a href="https://pauseai.info/urgency">Hvor mye haster det?</a>
		</div>
		<div class="column">
			<h2>Bidra aktivt</h2>
			<a href="https://pauseai.info/join">Bli med i PauseAI</a>
			<a href="https://pauseai.info/action">Hvordan kan du bidra?</a>
			<a href="https://pauseai.info/communities">Lokale grupper</a>
			<a href="https://pauseai.info/donate">Doner</a>
			<ExternalLink href="https://pauseai-shop.fourthwall.com" target="_blank">Buttikk med logovarer</ExternalLink>
			<a href="https://pauseai.info/protests">Protester</a>
			<a href="https://pauseai.info/organizing-a-protest">Organiser en protest</a>
			<a href="https://pauseai.info/email-builder">Epost skrivings verktøy</a>
			<a href="https://pauseai.info/lobby-tips">Tips for lobby-virksomhet</a>
		</div>
		<div class="column">
			<h2>Annet</h2>
			<Toggle />
			<WithdrawWidgetConsentNorwegian />
			<EditNorwegian />
			<a href="https://pauseai.info/posts">Alle sider</a>
			<a href="https://pauseai.info/rss.xml" target="_blank">RSS</a>
			<ExternalLink href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
				>License: CC-BY 4.0</ExternalLink
			>
			<ExternalLink
				href="https://airtable.com/appWPTGqZmUcs3NWu/pagIvo9Sv6IDHaolu/form"
				target="_blank">Gi tilbakemelding!k</ExternalLink
			>
		</div>
	</div>
</footer>

<style>
	.joinbar {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 500px) {
		.socials {
			width: 100%;
		}
	}

	.bar {
		height: 3px;
		width: 100%;
		background-color: var(--brand);
		margin-bottom: 1rem;
		margin-top: 0.5rem;
	}

	.footer-links {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.2rem;
		font-size: 0.8rem;
		padding-bottom: 1rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 750px) {
		.footer-links {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.column {
		/* All equal width */
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
	}

	.footer-links h2 {
		font-size: 1rem;
		font-family: var(--font-heading);
		font-weight: 700;
		margin-bottom: 0rem;
		margin-top: 0;
	}

	.c2a {
		color: var(--text);
		text-transform: uppercase;
		text-decoration: none;
		font-size: 1.1rem;
		font-family: var(--font-heading);
		font-weight: 700;
		text-align: left;
	}

	.c2a:hover {
		color: var(--brand);
	}

	.footer-links :global(a) {
		color: var(--text-2);
		text-decoration: none;
	}

	.footer-links :global(a:hover) {
		text-decoration: underline;
	}
</style>
