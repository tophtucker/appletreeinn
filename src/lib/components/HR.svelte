<script>
	import Asterisk from '$lib/icons/Asterisk.svelte';
</script>

<div class="hr">
	<hr />
	<Asterisk />
	<hr />
</div>

<style>
	.hr {
		display: grid;
		grid-template-columns: 1fr 12px 1fr;
		align-items: center;
		gap: 0.5rem;
		margin: 1rem 0;
	}
	.hr hr {
		width: 100%;
		border: none;
		border-top: 1px solid black;
	}
</style>
