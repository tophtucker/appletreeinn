<script>
	let { data, events } = $props();
	// TODO: show closures
	const { hours, closures } = data;

	const amPm = (hour) => (hour < 12 ? 'am' : 'pm');
	const mod = (hour) => hour % 12;
	const formatTimeRange = (hours) =>
		hours.every((hour) => hour < 12 === hours[0] < 12)
			? `${hours.map(mod).join(' – ')} ${amPm(hours[0])}`
			: hours.map((hour) => `${mod(hour)} ${amPm(hour)}`).join(' – ');

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const getEventsForDay = (day) => {
		const nextDay = events?.future.find(({ date }) => date.getUTCDay() === day)?.date;
		return events?.future.filter(({ date }) => +date === +nextDay) ?? [];
	};

	const collapsible = hours.every(([day, range]) => range.every((hour, i) => hour === hours[0][1][i]));
	console.log({collapsible});
</script>

{#if collapsible}
<div class="hours">Hours: {hours.map(d => `${daysOfWeek[d[0]]}.`).join(" & ")}, {formatTimeRange(hours[0][1])}</div>
{:else}
<table class="hours">
	<thead>
		<tr>
			<td colspan="2" style="padding-bottom: 1em;">Hours</td>
			{#if events?.future.length}
				<td style="padding-bottom: 1em; color: var(--brown);">Events</td>
			{/if}
		</tr>
	</thead>
	<tbody>
		{#each hours as day}
			<tr>
				<td>{daysOfWeek[day[0]]}.</td>
				<td>{formatTimeRange(day[1])}</td>
				{#if events?.future.length}
					<td style="font-style: italic; color: var(--brown); font-size: smaller;">
						{#each getEventsForDay(day[0]) as event}
							{event.description}
							<br />
						{/each}
					</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>
{/if}

<style>
	.hours {
		border-collapse: collapse;
		margin-top: 1em;
	}
	td {
		padding-right: 0.5em;
		vertical-align: top;
	}
	td:nth-child(2) {
		min-width: 5em;
	}
</style>
