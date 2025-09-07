<script>
	let { hours } = $props();

	const isET = Intl.DateTimeFormat().resolvedOptions().timeZone === 'America/New_York';
	const now = new Date();
	const nextHours = hours.find((d) => d.hours?.[1] >= now)?.hours;
	const isOpen = nextHours && nextHours[0] <= now && nextHours[1] > now;

	function formatFutureDate(date) {
		const now = new Date();
		if (
			date.getDate() === now.getDate() &&
			date.getMonth() === now.getMonth() &&
			date.getFullYear() === now.getFullYear()
		) {
			return new Intl.DateTimeFormat('en-US', {
				hour: 'numeric',
				hour12: true
			}).format(date);
		} else if (date < new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)) {
			return new Intl.DateTimeFormat('en-US', {
				weekday: 'short'
			}).format(date);
		} else {
			return new Intl.DateTimeFormat('en-US', {
				month: 'numeric',
				day: 'numeric'
			}).format(date);
		}
	}
</script>

{#if isET}
	<a href="/dining/ostrich-room">
		<h6>The Ostrich Room</h6>
		{#if isOpen}
			<div>Open until {formatFutureDate(nextHours[1])}.</div>
		{:else if nextHours}
			<div>Next open {formatFutureDate(nextHours[0])}.</div>
		{/if}
	</a>
{/if}

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
	a:hover {
		color: var(--blue);
	}
</style>
