<script>
	import { timeFormat } from 'd3-time-format';
	import { timeDay, timeSunday, timeMonth } from 'd3-time';
	import { group, min, sort } from 'd3-array';
	import { formatTime, formatTimeRange } from '$lib/index.js';

	import OstrichRoom from '$lib/components/OstrichRoom.svelte';
	import HR from '$lib/components/HR.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	let { data } = $props();
	const { performances } = data;

	const threshold = timeDay();
	const past = performances.filter((d) => d.startTime < threshold);
	const future = performances.filter((d) => d.startTime >= threshold);

	const upcoming = future.slice(0, 4);

	const grouped = group(future, (d) => timeDay(d.startTime));
	const start = timeSunday(min(future, (d) => d.startTime));
	const calendar = timeDay
		.range(start, timeDay.offset(start, 28))
		.map((day) => ({ day, performances: grouped.get(day) }));

	const pastMonths = sort(
		[...group(past, (d) => timeMonth(d.startTime))].map(([month, performances]) => ({
			month,
			performances: sort(performances, (d) => -d.startTime)
		})),
		(d) => -d.month
	);

	const futureMonths = sort(
		[...group(future.slice(4), (d) => timeMonth(d.startTime))].map(([month, performances]) => ({
			month,
			performances: sort(performances, (d) => -d.startTime)
		})),
		(d) => -d.month
	);

	const fWeekday = timeFormat('%a');
	const fDate = timeFormat('%B %-d');
	const fMonth = timeFormat('%B %Y');
	const fTime = (p) =>
		p.endTime ? formatTimeRange([p.startTime, p.endTime]) : formatTime(p.startTime);

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
		{#if p.act.image}
			<img src={p.act.image} alt={p.act.name} />
		{/if}
		<div class="time">
			{fWeekday(p.startTime)}. {fDate(p.startTime)},
			{fTime(p)}
		</div>
		<div class="name">
			<h3>{p.act.name}</h3>
			{#if p.note}{p.note}{/if}
		</div>
		<div class="bio">
			{@html p.act.description}
			{#if p.act.genre}<span class="genre">{p.act.genre}</span>{/if}
		</div>
	</div>
{/snippet}

{#snippet monthSummary({ month, performances })}
	<details>
		<summary>{fMonth(month)}</summary>
		<table>
			<tbody>
				{#each performances as p}
					<tr>
						<td>{fWeekday(p.startTime)}. {fDate(p.startTime)}</td>
						<td>{fTime(p)}</td>
						<td
							>{p.act.name}{#if p.note}<br /><small>{p.note}</small>{/if}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</details>
{/snippet}

<div class="inner">
	<img
		src="/avaloch/img/wanda.jpg"
		alt="Wanda Houston performing live at the Ostrich Room"
		class="intro"
	/>
	<div class="grid-or-flex" style="grid-template-columns: 3fr 1fr; margin-top: 1rem;">
		<p>
			People come into our tavern and say they first played in it fifty years ago. The Berkshires
			have a rich musical tradition, we’re a little part of it! James Taylor played on the lawn in
			the summer of 1970; Randy Weston would play here; Arlo Guthrie has come through; there’s a
			rumor that Bob Dylan was once in attendance. We have a groovy poster from when “Stephanie”
			played here when it was Alice’s. Johnny Irion revitalized the program a few years ago, and now
			we generally have a show every night the bar is open.
		</p>
		<OstrichRoom />
	</div>

	<HR />

	<h2>Upcoming shows</h2>

	<div class="performances">
		{#each upcoming as p}{@render card(p)}{/each}
	</div>

	<div class="calendar hide-mobile">
		{#each calendar.slice(0, 7) as { day }}
			<div class="header">{fWeekday(day)}</div>
		{/each}
		{#each calendar as { day, performances }}
			<div class={+day === +timeDay() ? 'today' : ''}>
				<div class="date">{day.getDate() === 1 ? fDate(day) : day.getDate()}</div>
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
		padding: 1rem;
	}
	details table td {
		padding: 0.25rem 0.5rem;
		min-width: 6rem;
		vertical-align: top;
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
	.performance h3 {
		margin: 0;
	}
	.performance img {
		width: 100%;
		max-width: 400px;
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
