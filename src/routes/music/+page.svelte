<script>
	import { timeFormat } from 'd3-time-format';
	import { timeDay, timeSunday, timeMonth } from 'd3-time';
	import { group, min, sort } from 'd3-array';

	import HR from '$lib/components/HR.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	let { data } = $props();
	const { performances } = data;

	const threshold = timeDay();
	const past = performances.filter((d) => d.time < threshold);
	const future = performances.filter((d) => d.time >= threshold);

	const upcoming = future.slice(0, 4);

	const grouped = group(future, (d) => timeDay(d.time));
	const start = timeSunday(min(future, (d) => d.time));
	const calendar = timeDay
		.range(start, timeDay.offset(start, 28))
		.map((day) => ({ day, performances: grouped.get(day) }));

	const pastMonths = sort(
		[...group(past, (d) => timeMonth(d.time))].map(([month, performances]) => ({
			month,
			performances: sort(performances, (d) => -d.time)
		})),
		(d) => -d.month
	);

	const fWeekday = timeFormat('%a');
	const fDate = timeFormat('%B %-d');
	const fTime = timeFormat('%-I:%M %p');
	const fMonth = timeFormat('%B %Y');

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
		<div class="time">
			<h3>{fWeekday(p.time)}.</h3>
			<div>{fDate(p.time)}</div>
			<div>{fTime(p.time)}</div>
		</div>
		<div>
			<h3>{p.act.name}</h3>
			{#if p.note}<strong>{p.note}</strong>{/if}
			{@html p.act.description}
			{#if p.act.genre}<span class="genre">{p.act.genre}</span>{/if}
		</div>
		{#if p.act.image}
			<img src={p.act.image} alt={p.act.name} />
		{/if}
	</div>
{/snippet}

<div class="inner">
	<img
		src="/avaloch/img/wanda.jpg"
		alt="Wanda Houston performing live at the Ostrich Room"
		class="intro"
	/>
	<div class="grid-or-flex" style="grid-template-columns: 4fr 1fr;">
		<p>
			People come in and say they first played in this room fifty years ago. The Berkshires have a
			rich musical tradition, we’re a little part of it! James Taylor played on the lawn in the
			summer of 1970; Randy Weston would play here; Arlo Guthrie has come through; there’s a rumor
			that Bob Dylan was once in attendance. We have a groovy poster from when “Stephanie” played
			here when it was Alice’s. Johnny Irion revitalized the program a few years ago, and now we
			generally have a show every night the bar is open.
		</p>
		<div style="border: 3px double black; padding: 1rem; margin: 1rem; text-align: center;">
			<span style="font-family: watkins">THE OSTRICH ROOM</span><br /><br />W T F S
		</div>
	</div>

	<HR />

	<h2>Upcoming shows</h2>

	<div class="performances">
		{#each upcoming as p}{@render card(p)}{/each}
	</div>

	<div class="calendar">
		{#each calendar.slice(0, 7) as { day }}
			<div class="header">{fWeekday(day)}</div>
		{/each}
		{#each calendar as { day, performances }}
			<div class={+day === +timeDay() ? 'today' : ''}>
				<div class="date">{day.getDate() === 1 ? fDate(day) : day.getDate()}</div>
				{#each performances as p}
					<button onclick={() => open(p)}><small>{fTime(p.time)}</small><br /> {p.act.name}</button>
				{/each}
			</div>
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

	{#each pastMonths as { month, performances }}
		<details>
			<summary>{fMonth(month)}</summary>
			<table>
				<tbody>
					{#each performances as p}
						<tr>
							<td>{fWeekday(p.time)}. {fDate(p.time)}</td>
							<td>{fTime(p.time)}</td>
							<td>{p.act.name}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</details>
	{/each}

	<dialog bind:this={dialogRef}>
		<div class="button-wrapper"><button onclick={close}><Icon icon="Close" /></button></div>
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
		gap: 2rem;
		align-items: start;
	}
	.performance .time {
		min-width: 4em;
	}
	.genre {
		font-style: italic;
		color: var(--gray);
	}
	h3 {
		margin: 0;
	}
	.performance img {
		border: 3px double black;
		width: 200px;
	}
	dialog {
		max-width: 720px;
	}
	dialog .button-wrapper {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
	}
	dialog button {
		width: 2rem;
		height: 2rem;
	}
</style>
