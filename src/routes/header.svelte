<script lang="ts">
	import NavLink from '$lib/components/Navlink.svelte'
	import Logo from '$lib/components/logo.svelte'
	import { botName } from '$lib/config'
	import { page } from '$app/stores'
	import TikTok from '$lib/components/icons/tiktok.svelte'
	import Instagram from '$lib/components/icons/instagram.svelte'
	import Facebook from '$lib/components/icons/facebook.svelte'
	import Youtube from '$lib/components/icons/youtube.svelte'
	import Discord from '$lib/components/icons/discord.svelte'
	import Linkedin from '$lib/components/icons/linkedin.svelte'
	import X from '$lib/components/icons/x.svelte'
	import SearchIcon from 'lucide-svelte/icons/search'
	const enableBot = false

	$: logo_animate = $page.url.pathname != '/'
</script>

<nav>
	<a href="/" class="logo">
		<Logo animate={logo_animate} />
	</a>

	<div class="nav-right">
		<div class="nav-links">
			<NavLink href="/risks">Risiko</NavLink>
			<NavLink href="/proposal">Forslag</NavLink>
			<NavLink href="https://pauseai.info/protests">Protester</NavLink>
			<NavLink href="https://pauseai.info/faq">FAQ</NavLink>
			<NavLink href="https://pauseai.info/action">Bidra</NavLink>
			<NavLink href="https://pauseai.info/donate">Doner</NavLink>
			{#if enableBot}
				<NavLink href="/chat">{botName}</NavLink>
			{/if}
			<!-- <NavLink href="/about">About</NavLink> -->
			<NavLink c2a href="https://pauseai.info/join">Bli med</NavLink>
			<NavLink href="/search" ariaLabel="Search"><SearchIcon size="0.8em" /></NavLink>
		</div>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		padding: 2rem 0;
		margin-left: -1rem;
		flex-wrap: wrap;
	}

	.logo {
		margin-bottom: 1rem;
		margin-left: 1rem;
	}

	.nav-links {
		display: flex;
		text-transform: uppercase;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (min-width: 850px) {
		nav {
			flex-direction: row;
			margin-left: 1rem;
		}

		.logo {
			margin-left: -3.4rem;
			margin-bottom: 0;
		}

		.nav-links {
			margin-left: 2rem;
		}
	}
</style>
