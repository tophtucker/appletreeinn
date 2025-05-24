<script>
	import { page } from '$app/stores';
	import { loadAnnouncements } from '$lib/index.js';
	import BannerWavy from './BannerWavy.svelte';
	import BannerFixed from './BannerFixed.svelte';

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
	{#if item.wavy}
		<BannerWavy {message} />
	{:else}
		<BannerFixed {message} />
	{/if}
{/if}
