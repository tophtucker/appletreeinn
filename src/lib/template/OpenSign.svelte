<script>
	import { Temporal } from '@js-temporal/polyfill';

	let { calendar } = $props();

	// TODO: replace with Temporal.Now
	const now = +new Date();
	const nextHours = calendar.find(
		(d) => d.hours.length === 2 && d.hours[1].epochMilliseconds >= now
	)?.hours;

	const isOpen =
		nextHours && nextHours[0].epochMilliseconds <= now && nextHours[1].epochMilliseconds > now;

	// TODO: replace formatters with standard named ones
	function formatFutureDate(zdt) {
		const now = Temporal.Now.zonedDateTimeISO(zdt.timeZoneId);

		if (zdt.toPlainDate().equals(now.toPlainDate())) {
			// same calendar day → show just the time
			return new Intl.DateTimeFormat('en-US', {
				hour: 'numeric',
				hour12: true,
				timeZone: zdt.timeZoneId
			}).format(new Date(zdt.epochMilliseconds));
		}

		const oneWeekOut = now.add({ days: 7 }).toPlainDate();
		if (Temporal.PlainDate.compare(zdt.toPlainDate(), oneWeekOut) < 0) {
			// within the next 7 days → show weekday
			return new Intl.DateTimeFormat('en-US', {
				weekday: 'short',
				timeZone: zdt.timeZoneId
			}).format(new Date(zdt.epochMilliseconds));
		}

		// otherwise → numeric month/day
		return new Intl.DateTimeFormat('en-US', {
			month: 'numeric',
			day: 'numeric',
			timeZone: zdt.timeZoneId
		}).format(new Date(zdt.epochMilliseconds));
	}
</script>

<a href="/dining/ostrich-room">
	<h6>The Ostrich Room</h6>
	{#if isOpen}
		<div>Open until {formatFutureDate(nextHours[1])}.</div>
	{:else if nextHours}
		<div>Next open {formatFutureDate(nextHours[0])}.</div>
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
