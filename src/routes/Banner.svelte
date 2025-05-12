<script>
	import BannerWavy from './BannerWavy.svelte';
	import BannerFixed from './BannerFixed.svelte';
	const wavy = false;
</script>

{#snippet message()}
	Báladi brunch has moved! Visit their <a href="https://www.instagram.com/baladiberkshires"
		>Instagram</a
	> page for more updates.
{/snippet}

{#if wavy}
	<BannerWavy message="" />
{:else}
	<BannerFixed {message} />
{/if}
