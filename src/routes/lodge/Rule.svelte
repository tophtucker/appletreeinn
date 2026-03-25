{#snippet circle()}
	<svg
		style="display: block; width: 100%; height: 100%; border: 2px solid currentColor;"
		viewBox="0 0 60 60"
	>
		<circle
			r="10.5"
			cx="30"
			cy="30"
			stroke="currentColor"
			fill="none"
			stroke-width="2"
			vector-effect="non-scaling-stroke"
		></circle>
	</svg>
{/snippet}

<div class="frame">
	<div></div>
	{@render circle()}
	<div></div>
	{@render circle()}
	<div></div>
</div>

<style>
	.frame {
		display: grid;
		grid-template-columns: 1fr 15px var(--center-width) 15px 1fr;
	}
	.frame > div {
		border-top: 2px solid currentColor;
		border-bottom: 2px solid currentColor;
	}
</style>
