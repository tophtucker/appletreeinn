<script>
	import { timeDay, timeMinute } from 'd3-time';
	let { data } = $props();

	const isET = Intl.DateTimeFormat().resolvedOptions().timeZone === 'America/New_York';
	const now = new Date();
	const nextHours = getNextHours(data);
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

	function getNextHours(data) {
		const now = new Date();
		const today = timeDay();
		for (let i = 0; i < 14; i++) {
			const day = timeDay.offset(today, i);
			const rule = data.hours.find(([dayOfWeek]) => dayOfWeek === day.getDay());
			const exception = data.overrides.find((d) => +d[0] === +day);
			const thisCase = exception || rule;
			if (thisCase && thisCase[1]) {
				const absoluteHours = thisCase[1].map((hr) => timeMinute.offset(day, hr * 60));
				if (absoluteHours[1] > now) return absoluteHours;
			}
		}
		return null;
	}
</script>

{#if isET}
	{#if isOpen}
		<div class="neon open" title={`Open until ${formatFutureDate(nextHours[1])}`}>OPEN</div>
	{:else if nextHours}
		<div class="neon">Opens {formatFutureDate(nextHours[0])}</div>
	{/if}
{/if}

<style>
	.neon {
		position: absolute;
		top: calc(100% + 0.75em);
		font-family: sans-serif;
		font-size: 12px;
		padding: 2px 4px;
		border-radius: 4px;
		background: var(--tan);
		border: 1px solid var(--brown);
		text-transform: uppercase;
	}
	.neon.open {
		color: white;
		border: none;
		box-shadow: green 0 0 10px;
		background: green;
	}
</style>
