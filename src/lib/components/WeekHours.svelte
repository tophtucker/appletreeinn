<script>
	import { timeMonday, timeDay } from 'd3-time';
	import {
		formatHourRange,
		formatTimeRange,
		formatTime,
		formatDay,
		formatDateShort
	} from '$lib/index.js';
	let { data, performances } = $props();
	const { hours, overrides } = data;

	const start = timeMonday();
	const end = timeMonday.offset(start, 1);
	const days = timeDay.range(start, end);

	const getRegularHoursForDate = (date) => {
		const h = hours.find((h) => h[0] === date.getDay());
		if (!h || !h[1]) return '—';
		return formatHourRange(h[1]);
	};

	const override = (date) => overrides.find((o) => +o[0] === +date);

	const getPerformancesForDay = (date) =>
		(performances.filter((d) => +date === +timeDay(d.time)) ?? [])
			.map(
				(d) =>
					`${d.act.name} (${d.endTime ? formatTimeRange([d.time, d.endTime]) : formatTime(d.time)})`
			)
			.join('; ');

	const isToday = (day) => +timeDay(day) === +timeDay(new Date());
</script>

<table class="hours">
	<thead>
		<tr>
			<th style="border-top: none; border-left: none; background: none;"></th>
			<th style="min-width: 7em;">Hours</th>
			<th class="hide-mobile"><a href="/music">Live music</a></th>
		</tr>
	</thead>
	<tbody>
		{#each days as day}
			<tr>
				<td
					><div
						style="display: flex; justify-content: space-between; align-items: center; gap: 0.5em;"
					>
						{#if isToday(day)}<span class="manicule">☞</span>{/if}{formatDay(day)}
						<span style="color: var(--gray); font-variant-numeric: tabular-nums;"
							>{formatDateShort(day)}</span
						>
					</div>
				</td>
				<td
					>{getRegularHoursForDate(day)}{#if override(day)}<span class="notice"
							>{#if override(day)[1]}{formatHourRange(override(day)[1])}{:else}Closed{/if}</span
						>{/if}
					{#if getPerformancesForDay(day).length}
						<div class="description show-mobile">
							{getPerformancesForDay(day)}
						</div>
					{/if}</td
				>
				<td class="description hide-mobile">
					{getPerformancesForDay(day)}
				</td>
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
		border: 1px solid var(--black);
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
		top: 10px;
		animation: wiggle 10s ease-in-out infinite;
	}
	.notice {
		font-size: smaller;
		position: absolute;
		padding: 3px 6px;
		background: red;
		color: white;
		top: 0.5em;
		left: 1em;
		transform: translate(0%, 0%) rotate(-7deg);
		border: 1px solid white;
		white-space: nowrap;
		transition: transform 0.2s;
		pointer-events: none;
	}
	td:hover .notice {
		transform: translate(0%, 120%) rotate(-7deg);
	}
	td:has(.notice) {
		overflow: hidden;
	}
	@media (max-width: 800px) {
		.description {
			font-size: smaller;
			margin-top: 1em;
			color: var(--gray);
		}
	}
	@media (min-width: 1240px) {
		.manicule {
			left: -30px;
		}
	}
</style>
