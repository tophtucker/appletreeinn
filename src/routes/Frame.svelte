<script>
	import Lightbox from '$lib/Lightbox.svelte';
	import { setContext } from 'svelte';
	let { children } = $props();
	let lightbox = $state({ src: null, alt: null });
	setContext('lightbox', lightbox);
</script>

{#snippet circle()}
	<svg style="display: block; width: 20px; height: 20px; border: 1px solid black;">
		<circle r="3.5" cx="9" cy="9" stroke="black" fill="none"></circle>
	</svg>
{/snippet}

<div class="frame">
	{@render circle()}
	<div class="top bottom"></div>
	{@render circle()}

	<div class="left right bottom"></div>
	<div class="bottom"></div>
	<div class="left right bottom"></div>

	<div class="left right"></div>
	<div class="content">{@render children()}</div>
	<div class="left right"></div>

	<div class="left right top"></div>
	<div class="top"></div>
	<div class="left right top"></div>

	{@render circle()}
	<div class="top bottom"></div>
	{@render circle()}
</div>

<Lightbox />

<style>
	.top {
		border-top: 1px solid var(--black);
	}
	.bottom {
		border-bottom: 1px solid var(--black);
	}
	.left {
		border-left: 1px solid var(--black);
	}
	.right {
		border-right: 1px solid var(--black);
	}
	.frame {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 20px 1fr 20px;
		grid-template-rows: 20px 3px 1fr 3px 20px;
		margin: 2em auto;
		max-width: 1400px;
	}
</style>
