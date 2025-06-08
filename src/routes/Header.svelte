<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Banner from './Banner.svelte';
	import OpenSign from './OpenSign.svelte';
	import { ostrichRoom } from '$lib/index.js';

	const BOOKING_URL = 'https://direct-book.com/properties/AppleTreeInndirect';
	const pages = [
		{ pathname: '/', title: 'Home', mobileNav: true },
		{
			pathname: '/rooms',
			title: 'Stay',
			img: '/img/rooms.jpg',
			mobileNav: true,
			desktopNav: true
		},
		{
			pathname: '/ostrich-room',
			title: 'The Ostrich Room',
			img: '/img/cocktail.jpg',
			hours: ostrichRoom,
			mobileNav: true,
			desktopNav: true
		},
		{
			pathname: '/weddings-events',
			title: 'Private events',
			img: '/img/weddings.jpg',
			mobileNav: true,
			desktopNav: true
		},
		{
			pathname: '/about-us',
			title: 'About',
			img: '/img/max.jpg',
			mobileNav: true,
			desktopNav: true
		},
		{ pathname: '/terms-of-service', title: 'Terms of service' },
		{ pathname: '/things-to-do', title: 'Things to do', img: '/img/activities.jpg' },
		{ pathname: '/history', title: 'History', img: '/img/history.png' },
		{ pathname: '/jobs', title: 'Jobs' }
	];
	const currentPage = pages.find((d) => {
		return d.pathname === $page.url.pathname;
	});
	const desktopNav = pages.filter((d) => d.desktopNav);
	const mobileNav = pages.filter((d) => d.mobileNav || d.pathname === currentPage?.pathname);
	function handlePageSelect(event) {
		const { value } = event.target;
		if (value.startsWith('http')) {
			window.location = value;
		} else {
			goto(event.target.value);
		}
	}
</script>

{#snippet link({ pathname, title, hours }, className)}
	<a
		href={pathname}
		class={`thumbnail ${$page.url.pathname.startsWith(pathname) ? 'current' : ''} ${className}`}
	>
		{title}
		{#if hours}
			<OpenSign data={hours} />
		{/if}
	</a>
{/snippet}

<!-- <Banner /> -->

<header>
	{@render link(desktopNav[0], 'hover-green')}
	{@render link(desktopNav[1], 'hover-red')}
	<a href="/" class="home">
		<img src="/avaloch/avaloch.svg" height="50" alt="Avaloch" />
		A Country Inn.
	</a>
	{@render link(desktopNav[2], 'hover-blue')}
	{@render link(desktopNav[3], 'hover-gold')}
</header>
<div class="select-wrapper">
	<select value={currentPage?.pathname || ''} on:change={handlePageSelect}>
		{#if !currentPage}
			<option value="" disabled>—</option>
		{/if}
		{#each mobileNav as { title, pathname }}
			<option value={pathname}>{title}</option>
		{/each}
	</select>
	<a href={BOOKING_URL}>Reserve</a>
</div>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
		gap: 1em;
		font-size: 14px;
		font-family: 'watkins';
		justify-content: space-between;
		align-items: center;
		padding: 3em 2em;
		transform: rotate(-1deg);
	}

	.home {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	a {
		text-decoration: none;
		color: inherit;
		text-align: center;
		transition: color 0.3s;
		position: relative;
	}

	.hover-green:hover {
		color: var(--green);
	}
	.hover-red:hover {
		color: var(--red);
	}
	.hover-blue:hover {
		color: var(--blue);
	}
	.hover-gold:hover {
		color: var(--gold);
	}

	.current {
		text-decoration: underline;
	}

	.select-wrapper {
		display: none;
	}

	@media (max-width: 900px) {
		.select-wrapper {
			margin: 1em;
			display: flex;
			gap: 1em;
			align-items: stretch;
			justify-content: center;
			position: sticky;
			top: 1em;
			z-index: 3;
		}
		.select-wrapper select {
			font-size: 1.3em;
			text-align: center;
			width: 50%;
			font: inherit;
			color: var(--brown);
		}
		.select-wrapper a {
			width: 50%;
			border: 1px solid var(--brown);
			border-radius: 3px;
			text-decoration: none;
			display: flex;
			align-items: center;
			justify-content: center;
			background: white;
		}
	}

	@media (max-width: 900px) {
		.hide-mobile {
			display: none;
		}
	}
</style>
