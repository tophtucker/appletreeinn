<script>
	// TODO: support lightbox
	// import Image from '../lightbox/Image.svelte';

	// Cozy fireplaces
	// Hilltop views of Berkshires hills
	//

	const pics = [
		{ src: '/heropics/verdant.jpg', alt: 'Historic 1885 Main House', size: 'lg' },
		{ src: '/roompics/main-house/8/_XCS2672.jpg', alt: '34 guest rooms', size: 'md' },
		{ src: '/heropics/lawn.jpg', alt: '21 acres' },
		{ src: '/avaloch/img/bar.jpg', alt: 'Wood-paneled tavern (Wed - Sat)' },
		{ src: '/avaloch/img/flowers.jpg' },
		{ src: '/avaloch/img/inglenook.jpg', alt: 'Cozy fireplaces' },
		{
			src: '/avaloch/img/tanglewood.jpg',
			alt: '10-minute walk to Kripalu or Tanglewood',
			size: 'md'
		},
		{ src: '/heropics/fire-pit.jpg' },
		{ src: '/ostrich-room/P8243018.JPG' },
		{ src: '/avaloch/img/wanda.jpg', alt: 'Live music', size: 'md' },
		{ src: '/avaloch/img/music.jpg' },
		{ src: '/img/cocktail.jpg', alt: 'Sean’s cocktails' },
		{ src: '/heropics/pool1.jpg', alt: 'Hidden gem pool', size: 'md' },
		{ src: '/heropics/max.jpg', alt: 'Inn dog Max' },
		{ src: '/heropics/view2.jpg', alt: 'Autumnal leaf peeping' },
		{ src: '/avaloch/history/avaloch.jpg', alt: 'Welcoming the Berkshires since 1952', size: 'md' },
		{ src: '/avaloch/img/proposal.jpg' },
		{ src: '/avaloch/img/sledding.jpg', alt: 'Claire' },
		{ src: '/avaloch/img/pool-view.jpg', size: 'md' }
	];
	const randColor = () => {
		const colors = ['red', 'blue', 'green', 'gold'];
		return `var(--${colors[(Math.random() * colors.length) | 0]})`;
	};
</script>

{#snippet img({ src, alt, size })}
	<figure class={`${size} ${!alt ? 'hide-mobile' : ''}`}>
		<img {src} {alt} />
		{#if alt}
			<figcaption style={`background-color: ${randColor()}`}>{alt}</figcaption>
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
		padding: 0.5rem 0.5rem 0.25rem 0.5rem;
		font-size: 12px;
		color: white;
		font-family: watkins;
		grid-row: 2;
	}

	.md figcaption,
	.lg figcaption {
		font-size: 1rem;
	}

	aside {
		display: flex;
		padding: 0.5rem 0.5rem 0.25rem 0.5rem;
		align-items: center;
		color: white;
		font-family: watkins;
		/* word-break: break-word; */
		/* overflow-wrap: anywhere; */
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
