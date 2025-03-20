<script>
	import { formatTimeRange, formatWeekday } from '$lib/index.js';
	let { data } = $props();
	// TODO: show overrides
	const { hours, overrides } = data;

	const collapsible = hours.every(([day, range]) =>
		range.every((hour, i) => hour === hours[0][1][i])
	);
</script>

<span>
	{collapsible
		? `${hours.map((d) => formatWeekday(d[0])).join(' & ')}, ${formatTimeRange(hours[0][1])}`
		: hours.map((d) => `${formatWeekday(d[0])} ${formatTimeRange(d[1])}`).join(', ')}
</span>
