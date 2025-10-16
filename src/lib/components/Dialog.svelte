<script>
	import Icon from '$lib/icons/Icon.svelte';
	import LilFrame from '$lib/components/LilFrame.svelte';
	import { page } from '$app/stores';
	let { children, title, ref = $bindable() } = $props();

	// TODO: onclose prop?
	const close = () => {
		ref.close();
	};

	$effect(() => {
		// Close dialog if open on page navigation
		const path = $page.url.pathname;
		close();
	});
</script>

<dialog bind:this={ref}>
	<LilFrame accent="var(--gold)">
		<div class="header">
			{title}
			<button style="color: var(--gold)" onclick={close}><Icon icon="Close" /></button>
		</div>
		<div class="content">
			{@render children()}
		</div>
	</LilFrame>
</dialog>

<style>
	dialog {
		min-width: 320px;
		max-width: 720px;
		padding: 0;
		border: none;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
	}

	dialog .header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: watkins;
	}

	dialog .header button {
		width: 2rem;
		height: 2rem;
	}

	dialog .content {
		border: 3px double var(--gold);
		background: white;
		color: black;
		text-align: left;
		padding: 0.5rem;
	}
</style>
