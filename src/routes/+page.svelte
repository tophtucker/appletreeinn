<script>
	import { page } from '$app/stores';
	import { buildings } from '$lib/index.js';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

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

<div class="intro">
	<article>
		<p style="font-size: 2em; margin: 0;">The Apple Tree Inn is a small historic hotel in the Berkshires.</p>
		<p>
			It is the only hotel within walking distance to
			<a href="https://www.bso.org/tanglewood/" target="_blank">Tanglewood</a>
			and <a href="https://kripalu.org/">Kripalu</a>.
		</p>
		<p>
			It has 34 rooms split across two buildings, a porch where you can enjoy the complimentary
			continental breakfast while appreciating the Berkshire hills, a pool, and lots of wood-burning
			fireplaces (including in a few of the guest rooms).
		</p>
		<p>
			<a href="/ostrich-room">The Ostrich Room</a>, our tavern, is open for drinks Wednesday–Saturday, 4–10
			p.m., with food from 5–9 and live music on Wednesdays and Saturdays.
		</p>
	</article>
</div>

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
				>10 Richmond Mountain Road, Lenox, MA</a
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
			<em>Choose your building</em>
			{#each buildings as building}
				<a href={`#${building.id}`} class={`tab ${tab === building.id ? 'active' : ''}`}>
					{building.title}
				</a>
			{/each}
		</div>
	</div>
	<div id="buildingContainer">
		<div class="building">
			<img src={building.img} width="400" alt={building.title} />
			<p>
				{building.desc} All rooms feature Frette linens and Beekman 1802 bath amenities.
			</p>
		</div>
		{#each building.rooms as { number, name, floor, tags }, i}
			<div class="room">
				<img src={`roompics/${tab}/${i + 1}-1.jpg`} alt="Room" loading="lazy" />
				<div>
					{#if number !== undefined}
						<small>{number}</small>
					{/if}
					<h3>{name}</h3>
					<ul>
						{#if floor !== undefined}
							<li>
								{floor === 1 ? '1st' : floor === 2 ? '2nd' : floor === 3 ? '3rd' : floor} floor
							</li>
						{/if}
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
