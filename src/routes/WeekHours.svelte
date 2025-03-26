<script>
	import { timeMonday, timeDay } from 'd3-time';
	import { formatTimeRange, formatDate } from '$lib/index.js';
	let { data, events } = $props();
	const { hours, overrides } = data;

	const start = timeMonday.floor(new Date());
	const end = timeMonday.ceil(new Date());
	const days = timeDay.range(start, end);

	const getHoursForDay = (date) => {
		const h = overrides.find((o) => +o[0] === +date) || hours.find((h) => h[0] === date.getDay());
		if (!h || !h[1]) return '—';
		return formatTimeRange(h[1]);
	};

	const getRegularHoursForDate = (date) => {
		const h = hours.find((h) => h[0] === date.getDay());
		if (!h || !h[1]) return '—';
		return formatTimeRange(h[1]);
	};

	const override = (date) => {
		return overrides.find((o) => +o[0] === +date);
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
				<th><div style="display: flex; justify-content: space-between;">Events</div></th>
			{/if}
		</tr>
	</thead>
	<tbody>
		{#each days as day}
			<tr>
				<td style="position: relative;"
					>{#if isToday(day)}<span class="manicule">☞</span>{/if}{formatDate(day)}
				</td>
				<td style="position: relative;"
					>{getRegularHoursForDate(day)}{#if override(day)}<span class="notice"
							>{#if override(day)[1]}{formatTimeRange(override(day)[1])}{:else}Closed{/if}</span
						>{/if}</td
				>
				{#if events?.future.length}
					<td class="description">
						{#each getEventsForDay(day) as event}
							{event.description}
							<br />
						{/each}
					</td>
				{/if}
			</tr>
		{/each}
		<tr>
			<td colspan="3" style="text-align: center"><a href="#calendar">More events</a></td>
		</tr>
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
	.notice {
		font-size: smaller;
		position: absolute;
		padding: 3px 6px;
		background: red;
		color: white;
		top: 50%;
		left: 40%;
		transform: translate(-50%, -50%) rotate(-7deg);
		border: 1px solid white;
		white-space: nowrap;
	}
	@media (max-width: 800px) {
		.description {
			font-size: smaller;
		}
	}
	@media (min-width: 1240px) {
		.manicule {
			left: -30px;
		}
	}
</style>
