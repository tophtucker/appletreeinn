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
			pathname: '/ostrich-room',
			title: 'Ostrich Room',
			img: '/img/cocktail.jpg',
			hours: ostrichRoom,
			mobileNav: true,
			desktopNav: true
		},
		{
			pathname: '/weddings-events',
			title: 'Weddings & events',
			img: '/img/weddings.jpg',
			mobileNav: true,
			desktopNav: true
		},
		{
			pathname: '/about-us',
			title: 'About us',
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

<Banner />

<div class="sticky-header">
	<a href={BOOKING_URL} class="highlight">Reserve</a>
</div>
<header>
	<a href="/">
		<img src="/logo.svg" height="200" alt="The Apple Tree Inn" />
	</a>
	<div class="links">
		{#each desktopNav as { pathname, title, img, eyebrow, hours }}
			<a
				href={pathname}
				class={`thumbnail ${$page.url.pathname.startsWith(pathname) ? 'current' : ''}`}
			>
				{#if eyebrow}
					<div class="eyebrow">{eyebrow}</div>
				{/if}
				<img src={img} alt={title} />
				<span style="min-height: 46px;">{title}</span>
				{#if hours}
					<OpenSign data={hours} />
				{/if}
			</a>
		{/each}

		<a href={BOOKING_URL} class="highlight hidden">Reserve</a>
	</div>
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
	.current {
		font-weight: bold;
	}

	.current img {
		border-width: 2px;
	}

	.eyebrow {
		font-weight: normal;
		font-size: 14px;
		letter-spacing: 1px;
		text-transform: uppercase;
		position: absolute;
		top: -30px;
		color: var(--gray);
	}

	header {
		position: absolute;
		width: 100%;
		z-index: 2;
		top: 2em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2em;
		color: var(--brown);
		padding: 0 var(--gutter);
		background: linear-gradient(
			0deg,
			transparent 0%,
			transparent 10.95%,
			var(--brown) 10.95%,
			var(--brown) 11.45%,
			var(--tan) 11.45%,
			var(--tan) 79.75%,
			var(--brown) 79.75%,
			var(--brown) 80.25%,
			transparent 80.25%,
			transparent 100%
		);
	}

	.sticky-header {
		position: sticky;
		top: -84px;
		margin-top: 2em;
		height: 200px;
		padding: 0 var(--gutter);
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		z-index: 3;
		pointer-events: none;
	}

	header a img {
		display: block;
	}

	header .links {
		align-items: start;
		position: relative;
		top: -10px;
	}

	.highlight {
		border: 1px solid var(--brown);
		padding: 0.5em 0.7em;
		border-radius: 5px;
		background: white;
		text-decoration: none;
		font-size: 1.4em;
	}

	.sticky-header .highlight {
		pointer-events: auto;
		position: relative;
		top: 10px;
	}

	.highlight.hidden {
		visibility: hidden;
	}

	.select-wrapper {
		display: none;
	}

	header a {
		text-decoration: none;
	}

	header a:hover {
		text-decoration: underline;
	}

	.thumbnail {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100px;
		position: relative;
	}
	.thumbnail img {
		display: block;
		width: 80px;
		height: 80px;
		object-fit: cover;
		margin-bottom: 5px;
		border: 1px solid var(--brown);
		border-radius: 50%;
	}

	@media (max-width: 900px) {
		header {
			position: static;
			justify-content: center;
		}
		.links {
			display: none;
		}
		.sticky-header {
			display: none;
		}
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
