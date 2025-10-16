<script>
	let { children, accent } = $props();
</script>

<div class="wrapper" style={`--accent: ${accent}`}>
	<div class="filled"></div>
	<div class="left-right"></div>
	<div class="filled"></div>

	<div class="top-bottom"></div>
	<div class="content">{@render children()}</div>
	<div class="top-bottom"></div>

	<div class="filled"></div>
	<div class="left-right"></div>
	<div class="filled"></div>
</div>

<style>
	.wrapper {
		border: 1px solid var(--accent);
		display: grid;
		grid-template-columns: 4px 1fr 4px;
		grid-template-rows: 4px 1fr 4px;
	}

	.wrapper .content {
		border: 1px solid var(--accent);
		padding: 1rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: var(--accent);
		color: white;
	}

	.wrapper .filled {
		background: var(--accent);
	}

	.wrapper .top-bottom {
		border-top: 1px solid var(--accent);
		border-bottom: 1px solid var(--accent);
	}

	.wrapper .left-right {
		border-left: 1px solid var(--accent);
		border-right: 1px solid var(--accent);
	}
</style>
