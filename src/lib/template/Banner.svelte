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
	const message = $derived(item?.message);
</script>

{#if item}
	<div>{message}</div>
{/if}
