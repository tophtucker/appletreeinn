<script>
	import { formatFutureDate } from '$lib/index.js';

	let { calendar } = $props();

	const now = +new Date();
	const nextHours = calendar.find(
		(d) => d.hours.length === 2 && d.hours[1].epochMilliseconds >= now
	)?.hours;

	const isOpen =
		nextHours && nextHours[0].epochMilliseconds <= now && nextHours[1].epochMilliseconds > now;
</script>

<a href="/dining/ostrich-room">
	<h6>The Ostrich Room</h6>
	{#if isOpen}
		<div>Open until {formatFutureDate(nextHours[1])}</div>
	{:else if nextHours}
		<div>Next open {formatFutureDate(nextHours[0])}</div>
	{/if}
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
	a:hover {
		color: var(--blue);
	}
</style>
