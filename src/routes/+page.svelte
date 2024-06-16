<script>
	import { page } from '$app/stores';
	import { buildings } from '$lib/index.js';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Intro from './Intro.svelte';
	import Slideshow from './Slideshow.svelte';

	const defaultTab = buildings[0].id;
	let tab = $state($page.url.hash.slice(1) || defaultTab);
	const building = $derived(buildings.find((d) => d.id === tab));
</script>

<svelte:window on:hashchange={() => (tab = $page.url.hash.slice(1) || defaultTab)} />

<svelte:head>
	<title>Apple Tree Inn • Lenox, MA</title>
	<link rel="stylesheet" href="styles.css" />
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<Header />

<Intro />

<nav>
	<div class="links">
		<span style="display: flex; align-items: center; gap: 5px">
			<svg height="18" viewBox="0 0 24 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M21.528 19.9511C22.7353 17.2959 24 14.5145 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 14.5145 1.26468 17.2959 2.47203 19.9511C2.88662 20.8629 3.29445 21.7598 3.64199 22.626C7.38824 31.9623 12 40.7634 12 40.7634C12 40.7634 16.6118 31.9623 20.358 22.626C20.7055 21.7598 21.1134 20.8629 21.528 19.9511ZM12 16.4886C14.5801 16.4886 16.6718 14.3969 16.6718 11.8168C16.6718 9.23665 14.5801 7.14504 12 7.14504C9.41986 7.14504 7.32824 9.23665 7.32824 11.8168C7.32824 14.3969 9.41986 16.4886 12 16.4886Z"
				/>
			</svg>
			<a href="https://maps.app.goo.gl/vpsxJ5KnzqR1n78q8" target="_blank"
				><span class="hide-mobile">10 Richmond Mountain Road, </span>Lenox, MA</a
			>
		</span>
	</div>
	<div class="links">
		<a href="https://www.instagram.com/appletreeinn" target="_blank">Instagram</a>
		<a href="mailto:info@appletreeinnlenox.com" target="_blank">Email</a>
		<a href="tel:1.413.200.8456" target="_blank">(413) 200-8456</a>
	</div>
</nav>

<div class="rooms-section">
	<div class="tabs-wrapper">
		<div class="tabs">
			<em class="hide-mobile">Choose your building</em>
			{#each buildings as building}
				<a href={`#${building.id}`} class={`tab ${tab === building.id ? 'active' : ''}`}>
					{building.title}
				</a>
			{/each}
		</div>
	</div>
	<div id="buildingContainer">
		<div class="building">
			<img src={building.img} alt={building.title} />
			<div style="display: flex; flex-direction: column; gap: 1em;">
				<p>
					{building.desc}
				</p>
				<p>All rooms have Frette linens and Beekman 1802 bath amenities.</p>
			</div>
		</div>
		{#each building.rooms as { room_number, room_name, floor, tags, pics }, i}
			<div class="room">
				<!-- <img src={`roompics/${tab}/${i + 1}-1.jpg`} alt="Room" loading="lazy" /> -->
				<Slideshow pics={pics.map(src => ({src: `roompics/${src}`, title: room_name}))} />
				<div>
					{#if room_number}
						<small
							>{floor === 1 ? '1st' : floor === 2 ? '2nd' : floor === 3 ? '3rd' : floor} floor, room
							{room_number?.split(', ')?.join(' or ')}</small
						>
					{/if}
					<h3>{room_name}</h3>
					<ul>
						{#each tags as tag}
							<li>{tag}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</div>

<Footer />

<style>
	.tabs-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 2em;
		border-bottom: 1px solid var(--brown);
	}

	.tabs {
		width: 1200px;
		max-width: 100%;
		display: flex;
		gap: 1em;
		align-items: center;
		justify-content: center;
	}

	.tabs a {
		text-decoration: none;
		color: var(--brown);
		margin: 0;
		position: relative;
		bottom: -1px;
		border-top: 1px solid var(--brown);
		border-right: 1px solid var(--brown);
		border-left: 1px solid var(--brown);
		padding: 0.5em;
		cursor: pointer;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		font-size: larger;
	}

	.tabs a.active {
		text-decoration: none;
		border-bottom: 1px solid white;
		z-index: 2;
	}

	#buildingContainer {
		padding: 1em var(--gutter);
	}

	.room {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 1em;
		border-bottom: 1px solid var(--brown);
		padding: 1em 0;
	}

	.room:last-child {
		border-bottom: none;
	}
	.building {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		border-bottom: 1px solid var(--brown);
		padding-bottom: 1em;
	}

	.building p {
		max-width: 460px;
		margin: 0;
	}

	.building img {
		width: 100%;
		max-width: 400px;
		border-radius: 50%;
		border: 1px solid var(--brown);
	}

	@media (max-width: 640px) {
		.building,
		.room {
			display: flex;
			flex-direction: column;
		}
		
	}
</style>
