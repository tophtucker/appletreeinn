<script>
	import VR from '$lib/components/VR.svelte';
	import HR from '$lib/components/HR.svelte';
	const items = [
		{
			slug: 'amenities',
			name: 'Amenities',
			desc: 'Across our 21 acres there’s plenty of room to roam, chat, swim, read, or work in any weather.',
			img: '/avaloch/img/chess.jpg'
		},
		{
			slug: 'tanglewood',
			name: 'Tanglewood',
			desc: 'The world-class music center across the street is open year-round but really comes alive each summer.',
			img: '/avaloch/map/tanglewood-map.jpg'
		},
		{
			slug: 'berkshires',
			name: 'The Berkshires',
			desc: 'Gilded age mansions, relics of old mills, and rolling hills offer rustic charm and adventure.',
			img: '/heropics/view2.jpg'
		}
	];
</script>

{#snippet item(d)}
	<div>
		<img src={d.img} alt={d.name} />
		<h3>{d.name}</h3>
		<a class="cta" href={`/activities/${d.slug}`}>See more</a>
		<p>{d.desc}</p>
	</div>
{/snippet}

<svelte:head>
	<title>Activities • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
</svelte:head>

<div class="inner">
	<div class="hide-mobile">
		<div class="trio horizontal">
			{#each items as d, i}
				{@render item(d)}
				{#if i < items.length - 1}<VR />{/if}
			{/each}
		</div>
	</div>

	<div class="show-mobile">
		<div class="trio vertical">
			{#each items as d, i}
				{@render item(d)}
				{#if i < items.length - 1}<HR />{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.trio {
		text-align: center;
		justify-content: center;
		margin-top: 2rem;
	}
	.trio img {
		width: 200px;
		height: 200px;
		border-radius: 100%;
		object-fit: cover;
	}
	.trio.horizontal {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 15px 1fr 15px 1fr;
	}
	.trio.vertical {
		display: flex;
		flex-direction: column;
	}
</style>
