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
	const message = 'The Apple Tree Inn is returning to its former name, Avaloch.';
</script>

{#if message}
	<div>
		<h6>Bulletins</h6>
		{message}
	</div>
{/if}
