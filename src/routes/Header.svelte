<script>
	import { page } from '$app/stores';
	const pages = [
		{ pathname: '/ostrich-room', title: 'Ostrich Room', img: 'img/ostrich-room.png' },
		{ pathname: '/activities', title: 'Activities', img: 'img/activities.jpg' },
		{ pathname: '/weddings-events', title: 'Weddings & Events', img: 'img/weddings.jpg' },
		{ pathname: '/history', title: 'History', img: 'img/history.png' }
	];
  console.log($page.url.pathname)
</script>

<div class="sticky-header">
	<a href="https://appletreeinn.book.pegsbe.com/" class="highlight">Reserve</a>
</div>
<header>
	<a href="/">
		<img src="logo.svg" height="200" alt="The Apple Tree Inn" />
	</a>
	<div class="links">
		{#each pages as { pathname, title, img }}
			<a href={pathname} class={`thumbnail ${$page.url.pathname === pathname ? 'current' : ''}`}>
				<img src={img} alt={title} />
				{title}
			</a>
		{/each}

		<a href="https://appletreeinn.book.pegsbe.com/" class="highlight hidden">Reserve</a>
	</div>
</header>

<style>
  .current {
    font-weight: bold;
  }

  .current img {
    border-width: 2px;
  }

	header {
		position: absolute;
		width: 100%;
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
		z-index: 2;
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
</style>
