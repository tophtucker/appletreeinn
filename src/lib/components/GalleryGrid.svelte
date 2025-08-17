<script>
	import { getContext } from 'svelte';
	let lightbox = getContext('lightbox');
	const setLightbox = (e) => {
		lightbox.src = e.currentTarget;
	};

	const pics = [
		{
			src: '/roompics/main-house/8/_XCS2672.jpg',
			alt: '34 guest rooms',
			size: 'md',
			url: '/rooms'
		},
		{
			src: '/avaloch/img/bar.jpg',
			alt: 'Wood-paneled tavern',
			url: '/ostrich-room',
			size: 'md'
		},
		{
			src: '/avaloch/img/tanglewood-walk.jpg',
			alt: 'Walk to Tanglewood',
			url: '/activities/tanglewood',
			size: 'md'
		},
		{ src: '/avaloch/img/wanda.jpg', alt: 'Live music', size: 'md', url: '/music' },
		{
			src: '/avaloch/img/adirondack-view.jpg',
			alt: 'Gallery',
			size: 'md',
			url: '/overview/gallery'
		},
		{
			src: '/avaloch/history/avaloch.jpg',
			alt: 'History',
			size: 'md',
			url: '/about/history'
		}
		// TODO: Hilltop views of Berkshires hills
	];
	const pics2 = [
		{ src: '/avaloch/img/flowers.jpg' },
		{ src: '/avaloch/img/inglenook.jpg' },
		{ src: '/heropics/fire-pit.jpg' },
		{ src: '/ostrich-room/P8243018.JPG' },
		{ src: '/avaloch/img/music.jpg' },
		{ src: '/img/cocktail.jpg' },
		{ src: '/heropics/pool1.jpg' },
		{ src: '/heropics/max.jpg' },
		{ src: '/heropics/view2.jpg' },
		{ src: '/avaloch/img/proposal.jpg' },
		{ src: '/avaloch/img/sledding.jpg' },
		{ src: '/avaloch/img/pool-view.jpg' }
	];
	const colors = ['red', 'blue', 'green', 'gold'];
	// const randColor = () => {
	// 	return `var(--${colors[(Math.random() * colors.length) | 0]})`;
	// };
</script>

{#snippet img({ src, alt, size, url }, i)}
	<figure class={`${size} ${!alt ? 'hide-mobile' : ''}`}>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<img {src} {alt} data-lightbox onclick={setLightbox} loading="lazy" />
		{#if alt}
			<figcaption class={url ? 'link' : ''} style={`--accent: var(--${colors[i % 4]})`}>
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
	{#each pics as pic, i}
		{#if pic.src}
			{@render img(pic, i)}
		{:else}
			{@render aside(pic)}
		{/if}
	{/each}
</div>

<div class="gallery-grid">
	{#each pics2 as pic, i}
		{#if pic.src}
			{@render img(pic, i)}
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
		.lg,
		.md {
			grid-row: span 1;
			grid-column: span 1;
		}
	}

	@media (max-width: 600px) {
		.gallery-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
