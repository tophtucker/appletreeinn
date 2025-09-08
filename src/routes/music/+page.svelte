<script>
	import { Temporal } from '@js-temporal/polyfill';
	import { group, sort } from 'd3-array';
	import {
		formatDay,
		formatDate,
		formatMonthDate,
		formatMonthYear,
		formatTime,
		formatTimeRange,
		epochMs,
		TIME_ZONE
	} from '$lib/index.js';
	import OstrichRoom from '$lib/components/OstrichRoom.svelte';
	import HR from '$lib/components/HR.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	let { data } = $props();
	const { performances, ostrichRoom } = data;

	const threshold = Temporal.Now.zonedDateTimeISO(TIME_ZONE).epochMilliseconds;
	const past = performances.filter((d) => d.startTime.epochMilliseconds < threshold);
	const future = performances.filter((d) => d.startTime.epochMilliseconds >= threshold);
	const upcoming = future.slice(0, 4);
	const beyondUpcoming = future.slice(4);

	const pastMonths = groupPerformancesByMonth(past, -1);
	const futureMonths = groupPerformancesByMonth(beyondUpcoming, 1);

	const calendar = [];
	const today = Temporal.Now.plainDateISO(TIME_ZONE);
	const latestSunday = today.subtract({ days: today.dayOfWeek % 7 });
	const groupedByDay = group(future, (d) => d.startTime.toPlainDate().toString());
	for (let i = 0; i < 28; i++) {
		const date = latestSunday.add({ days: i });
		calendar.push({ date, performances: groupedByDay.get(date.toString()) });
	}

	let dialogRef;
	let dialogPerformance = $state(null);
	const open = (p) => {
		dialogPerformance = p;
		dialogRef.showModal();
	};
	const close = () => {
		dialogPerformance = null;
		dialogRef.close();
	};

	function groupPerformancesByMonth(performances, direction) {
		return sort(
			[...group(performances, (d) => d.startTime.toPlainDate().toPlainYearMonth().toString())].map(
				([month, performances]) => ({
					month: Temporal.PlainYearMonth.from(month),
					performances: sort(performances, (d) => direction * d.startTime.epochMilliseconds)
				})
			),
			(d) => direction * epochMs(d.month)
		);
	}

	function formatTimeMaybeRange(p) {
		return p.endTime ? formatTimeRange([p.startTime, p.endTime]) : formatTime(p.startTime);
	}
</script>

<svelte:head>
	<title>Live music • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="The Apple Tree Inn has several live music events every week in the Ostrich Room, carrying on a tradition of many decades"
	/>
</svelte:head>

{#snippet card(p)}
	<div class="performance">
		<div class="perf-inner">
			<div class="text">
				<div class="time">
					{formatDay(p.startTime)}
					{formatMonthDate(p.startTime)},
					{formatTimeMaybeRange(p)}
				</div>
				<div class="name">
					<h3>{p.act.name}</h3>
					{#if p.note}{p.note}{/if}
				</div>
				<div class="bio">
					{@html p.act.description}
				</div>
				{#if p.act.genre || p.act.youtube}
					<div class="meta">
						{#if p.act.genre}<span class="genre">{p.act.genre}</span>{/if}
						{#if p.act.youtube}<span><a href={p.act.youtube}>Watch clip</a></span>{/if}
					</div>
				{/if}
			</div>
			{#if p.act.image}
				<img src={p.act.image} alt={p.act.name} />
			{/if}
		</div>
	</div>
{/snippet}

{#snippet monthSummary({ month, performances })}
	<details>
		<summary>{formatMonthYear(month)}</summary>
		<table class="hide-mobile">
			<tbody>
				{#each performances as p}
					<tr>
						<td>{formatDay(p.startTime)} {formatMonthDate(p.startTime)}</td>
						<td>{formatTimeMaybeRange(p)}</td>
						<td
							>{p.act.name}{#if p.note}<br /><small>{p.note}</small>{/if}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="show-mobile">
			<div class="narrow-performances">
				{#each performances as p}
					<div>
						<small>{formatDate(p.startTime)}</small>
						<div>{p.act.name}</div>
						{#if p.note}<small>{p.note}</small>{/if}
					</div>
				{/each}
			</div>
		</div>
	</details>
{/snippet}

<div class="inner">
	<img src="/img/wanda.jpg" alt="Wanda Houston performing live at the Ostrich Room" class="intro" />
	<div class="grid-or-flex" style="grid-template-columns: 3fr 1fr; margin-top: 1rem;">
		<p>
			People come into our tavern and say they first played in it fifty years ago. The Berkshires
			have a rich musical tradition, we’re a little part of it! James Taylor played on the lawn in
			the summer of 1970; Randy Weston would play here; Arlo Guthrie has come through; there’s a
			rumor that Bob Dylan was once in attendance. We have a groovy poster from when “Stephanie”
			played here when it was Alice’s. Johnny Irion revitalized the program a few years ago, and now
			we generally have a show every night the bar is open.
		</p>
		<OstrichRoom {ostrichRoom} />
	</div>

	<HR />

	<h2>Upcoming shows</h2>

	<div class="performances">
		{#each upcoming as p}{@render card(p)}{/each}
	</div>

	<div class="calendar hide-mobile">
		{#each calendar.slice(0, 7) as { date }}
			<div class="header">{formatDay(date)}</div>
		{/each}
		{#each calendar as { date, performances }}
			<div class={date.equals(today) ? 'today' : ''}>
				<div class="date">{date.day === 1 ? formatMonthDate(date) : date.day}</div>
				{#each performances as p}
					<button onclick={() => open(p)}
						><small>{formatTime(p.startTime)}</small><br /> {p.act.name}</button
					>
				{/each}
			</div>
		{/each}
	</div>

	<div class="upcoming show-mobile">
		<h3>More upcoming shows</h3>
		{#each futureMonths as m}
			{@render monthSummary(m)}
		{/each}
	</div>

	<p>
		See <a href="https://instagram.com/appletreeinn">Instagram</a>
		for previews and updates. Email Jenny Rubin at
		<a href="mailto:jennyjrubin70@gmail.com">jennyjrubin70@gmail.com</a> for information about booking
		acts.
	</p>

	<HR />

	<h2>Past shows</h2>

	{#each pastMonths as m}
		{@render monthSummary(m)}
	{/each}

	<dialog bind:this={dialogRef}>
		<div class="button-wrapper">
			Show<button onclick={close}><Icon icon="Close" /></button>
		</div>
		{#if dialogPerformance}
			{@render card(dialogPerformance)}
		{/if}
	</dialog>
</div>

<style>
	.intro {
		aspect-ratio: 6/3;
		object-fit: cover;
	}

	details {
		margin-bottom: 2rem;
	}
	details table {
		padding: 1rem 2rem;
	}
	details table td {
		padding: 0.25rem 0.5rem;
		min-width: 6rem;
		vertical-align: top;
	}
	details table td:nth-child(1) {
		width: 180px;
	}
	details table td:nth-child(2) {
		width: 160px;
	}
	details .narrow-performances {
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.calendar {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 2rem repeat(auto-fill, 1fr);
		border: 0.5px solid #ddd;
	}
	.calendar > div.header {
		background: var(--blue);
		color: white;
		border: none;
	}
	.calendar > div {
		border: 0.5px solid #ddd;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.calendar > div.today {
		border: 1px solid var(--blue);
	}
	.calendar > div.today div.date {
		color: var(--blue);
	}
	.calendar div.date {
		color: var(--gray);
	}
	.calendar button {
		padding: 0;
		text-align: left;
		border: none;
		cursor: pointer;
	}
	.calendar button:hover {
		color: var(--blue);
		background: none;
	}

	.performances {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.performance {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.performance .perf-inner {
		display: grid;
		grid-template-columns: 4fr 3fr;
		gap: 1rem;
	}
	.performance .text {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.performance .time {
		min-width: 4em;
	}
	.performance .genre {
		font-style: italic;
		color: var(--gray);
	}
	.performance .bio {
		padding-left: 2rem;
	}
	.performance .meta {
		padding-left: 2rem;
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	.performance h3 {
		margin: 0;
	}
	.performance img {
		max-width: 400px;
		width: 100%;
	}
	:global(.performance p) {
		margin: 0;
	}
	@media (max-width: 1000px) {
		.performance .perf-inner {
			display: flex;
			flex-direction: column-reverse;
		}
	}

	dialog {
		max-width: 720px;
	}
	dialog .button-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		font-family: watkins;
	}
	dialog button {
		width: 2rem;
		height: 2rem;
	}
</style>
