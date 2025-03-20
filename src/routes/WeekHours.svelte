<script>
	import { timeMonday, timeDay } from 'd3-time';
	import { timeFormat } from 'd3-time-format';
	import { formatTimeRange, formatWeekday } from '$lib/index.js';
	let { data, events } = $props();
	const { hours, overrides } = data;

	const start = timeMonday.floor(new Date());
	const end = timeMonday.ceil(new Date());
	const days = timeDay.range(start, end);

	const formatDate = timeFormat('%a. %-m/%d');

	const getHoursForDay = (date) => {
		const h = overrides.find((o) => +o[0] === +date) || hours.find((h) => h[0] === date.getDay());
		if (!h) return '—';
		return formatTimeRange(h[1]);
	};

	const getEventsForDay = (date) => {
		return events?.data.filter((d) => +date === +d.date) ?? [];
	};

	const isToday = (day) => +timeDay(day) === +timeDay(new Date());
</script>

<table class="hours">
	<thead>
		<tr>
			<th style="border-top: none; border-left: none; background: none;"></th>
			<th>Hours</th>
			{#if events?.future.length}
				<th
					><div style="display: flex; justify-content: space-between;">
						Events <a href="#calendar" style="font-size: smaller;">see all</a>
					</div></th
				>
			{/if}
		</tr>
	</thead>
	<tbody>
		{#each days as day}
			<tr>
				<td style="width: 6em; position: relative;"
					>{#if isToday(day)}<span class="manicule">☞</span>{/if}{formatDate(day)}</td
				>
				<td style="width: 8em;">{getHoursForDay(day)}</td>
				{#if events?.future.length}
					<td>
						{#each getEventsForDay(day) as event}
							{event.description}
							<br />
						{/each}
					</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.hours {
		border-collapse: collapse;
		max-width: 720px;
	}
	th,
	td {
		font-weight: normal;
		text-align: left;
		border: 1px solid var(--brown);
		padding: 0.5em;
		position: relative;
		background: white;
	}
	td {
		vertical-align: top;
	}
	@keyframes wiggle {
		0%,
		90% {
			transform: rotate(0deg);
		} /* Idle */
		93% {
			transform: rotate(10deg);
		}
		95% {
			transform: rotate(-10deg);
		}
		99% {
			transform: rotate(5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	.manicule {
		position: absolute;
		left: -14px;
		top: 6px;
		animation: wiggle 10s ease-in-out infinite;
	}
	@media (min-width: 1240px) {
		.manicule {
			left: -30px;
		}
	}
</style>
