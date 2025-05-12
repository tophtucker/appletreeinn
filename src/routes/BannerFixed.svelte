<script>
	let { message } = $props();
</script>

<div class="banner">
	{@render message()}
</div>

<style>
	.banner {
		position: absolute;
		width: 100%;
		top: 15px;
		text-align: center;
		color: var(--brown);
		font-style: italic;
	}
	@media (max-width: 900px) {
		.banner {
			position: static;
			padding: 1em;
		}
	}
</style>
