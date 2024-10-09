<script>
	import { hours, closures, loadEvents } from '$lib/index.js';
	// TODO: show closures

	let musicData = $state(undefined);
	(async function () {
		musicData = await loadEvents();
	})();

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const getEventsForDay = (day) => {
		const nextDay = musicData?.future.find(({date}) => date.getUTCDay() === day)?.date;
		return musicData?.future.filter(({date}) => +date === +nextDay) ?? [];
	};
</script>

<table class="hours">
	<thead>
		<tr>
			<td colspan=2 style="padding-bottom: 1em;">Hours</td>
			<td style="padding-bottom: 1em; color: var(--brown);">Events</td>
		</tr>
	</thead>
	<tbody>
		{#each hours as day}
			<tr>
				<td>{daysOfWeek[day[0]]}.</td>
				<td>{day[1].map((d) => d - 12).join('–')} p.m.</td>
				<td style="font-style: italic; color: var(--brown); font-size: smaller;">
					{#each (getEventsForDay(day[0])) as event}
						{event.description}
						<br/>
					{/each}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

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
