<script>
	import { getContext } from 'svelte';
	let lightbox = getContext('lightbox');
	const setLightbox = (e) => {
		lightbox.src = e.currentTarget;
	};

	const pics = [
		{ src: '/heropics/verdant.jpg', alt: 'Historic 1885 Main House', size: 'lg' },
		{
			src: '/roompics/main-house/8/_XCS2672.jpg',
			alt: '34 guest rooms',
			size: 'md',
			url: '/rooms'
		},
		{ src: '/heropics/lawn.jpg', alt: '21 acres' },
		{ src: '/avaloch/img/bar.jpg', alt: 'Wood-paneled tavern (Wed - Sat)', url: '/ostrich-room' },
		{ src: '/avaloch/img/flowers.jpg' },
		{ src: '/avaloch/img/inglenook.jpg', alt: 'Cozy fireplaces' },
		{
			src: '/avaloch/img/tanglewood.jpg',
			alt: '10-minute walk to Kripalu or Tanglewood',
			size: 'md'
		},
		{ src: '/heropics/fire-pit.jpg' },
		{ src: '/ostrich-room/P8243018.JPG' },
		{ src: '/avaloch/img/wanda.jpg', alt: 'Live music', size: 'md', url: '/music' },
		{ src: '/avaloch/img/music.jpg' },
		{ src: '/img/cocktail.jpg', alt: 'Sean’s cocktails', url: '/ostrich-room' },
		{ src: '/heropics/pool1.jpg', alt: 'Hidden gem pool', size: 'md', url: '/rooms/property' },
		{ src: '/heropics/max.jpg', alt: 'Inn dog Max' },
		{ src: '/heropics/view2.jpg', alt: 'Autumnal leaf peeping' },
		{ src: '/avaloch/history/avaloch.jpg', alt: 'Welcoming the Berkshires since 1952', size: 'md' },
		{ src: '/avaloch/img/proposal.jpg' },
		{ src: '/avaloch/img/sledding.jpg', alt: 'Claire', url: '/about/claire' },
		{ src: '/avaloch/img/pool-view.jpg', size: 'md' }
		// TODO: Hilltop views of Berkshires hills
	];
	const randColor = () => {
		const colors = ['red', 'blue', 'green', 'gold'];
		return `var(--${colors[(Math.random() * colors.length) | 0]})`;
	};
</script>

{#snippet img({ src, alt, size, url })}
	<figure class={`${size} ${!alt ? 'hide-mobile' : ''}`}>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<img {src} {alt} data-lightbox onclick={setLightbox} />
		{#if alt}
			<figcaption class={url ? 'link' : ''} style={`--accent: ${randColor()}`}>
				{#if url}
					<a href={url} class="caption">{alt} →</a>
				{:else}
					<div class="caption">{alt}</div>
				{/if}
			</figcaption>
		{/if}
	</figure>
{/snippet}

{#snippet aside({ alt, size })}
	<aside class={size} style={`background-color: ${randColor()}`}>
		{alt}
	</aside>
{/snippet}

<div class="gallery-grid">
	{#each pics as pic}
		{#if pic.src}
			{@render img(pic)}
		{:else}
			{@render aside(pic)}
		{/if}
	{/each}
</div>

<style>
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-auto-rows: 1fr;
		gap: 1rem;
	}
	figure {
		margin: 0;
		display: grid;
		grid-template-rows: 1fr auto;
		width: 100%;
		height: 100%;
		gap: 1px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		grid-row: 1;
	}
	figcaption {
		grid-row: 2;
	}
	.caption {
		font-size: 12px;
		color: white;
		font-family: watkins;
		background: var(--accent);
		border: 1px solid transparent;
		padding: 0.5rem 0.5rem 0.25rem 0.5rem;
	}
	figcaption a {
		display: block;
		color: inherit;
		text-decoration: none;
	}
	figcaption a:hover {
		background: white;
		color: var(--accent);
		border: 1px solid var(--accent);
	}

	.md .caption,
	.lg .caption {
		font-size: 1rem;
	}

	aside {
		display: flex;
		padding: 0.5rem 0.5rem 0.25rem 0.5rem;
		align-items: center;
		color: white;
		font-family: watkins;
	}

	.md {
		grid-column: span 2;
	}

	.lg {
		grid-column: span 3;
		grid-row: span 2;
	}

	@media (max-width: 800px) {
		.gallery-grid {
			grid-template-columns: repeat(3, 1fr);
		}
		.lg {
			grid-row: span 1;
		}
	}
</style>
