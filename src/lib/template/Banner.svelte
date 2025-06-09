<script>
	import { page } from '$app/stores';
	import { loadAnnouncements } from '$lib/index.js';

	let data = $state(undefined);
	(async function () {
		data = await loadAnnouncements();
	})();

	const today = new Date();
	const item = $derived(
		data?.find(
			(d) => today >= d.from && today < d.until && (d.page === '' || d.page === $page.url.pathname)
		)
	);
	// const message = $derived(item?.message);
	const message = 'The Apple Tree Inn is returning to its former name, Avaloch';
</script>

{#if message}
	<div class="container">
		<div class="live">
			<div class="dot"></div>
			Live
		</div>
		<marquee>{message}</marquee>
	</div>
{/if}

<style>
	.container {
		border-bottom: 1px solid black;
		display: flex;
	}
	.live {
		font-family: watkins;
		display: flex;
		gap: 3px;
		align-items: center;
		padding: 6px;
		border-right: 1px solid var(--black);
	}
	.dot {
		width: 10px;
		height: 10px;
		background: red;
		border-radius: 50%;
		animation: blink 2s infinite;
	}
</style>
