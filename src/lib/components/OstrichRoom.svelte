<script>
	import LilFrame from '$lib/components/LilFrame.svelte';
	let { ostrichRoom } = $props();
</script>

<LilFrame accent="var(--red)">
	<h3>The<br />Ostrich<br />Room</h3>
	<div>{ostrichRoom.dayRange}</div>
	<a class="cta" href="/dining/ostrich-room">More info</a>
</LilFrame>

<style>
	h3 {
		margin: 0;
	}

	a.cta {
		align-self: center;
	}
</style>
