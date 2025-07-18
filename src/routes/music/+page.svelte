<script>
	import { timeFormat } from 'd3-time-format';
	import { timeDay, timeSunday, timeMonth } from 'd3-time';
	import { group, min, sort } from 'd3-array';

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
	console.log(calendar.slice(0, 7));
</script>

<svelte:head>
	<title>Live music • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
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
	<p>
		<a href="/ostrich-room">The Ostrich Room</a> features live music every week, drawing on the Berkshires’
		rich history… Though this incarnation is only a few years old, we have people come in who tell us
		they played here decades ago… something something… Johnny Irion, James Taylor played here in the
		summer of 1970… Arlo Guthrie has been through… Claire once heard that Bob Dylan has been here. Stephanie
		show we have the poster for, check out the poster when you visit. Randy Weston…
	</p>
	<p>
		See <a href="https://instagram.com/appletreeinn">Instagram</a>
		for previews and updates. Email Jenny Rubin at
		<a href="mailto:jennyjrubin70@gmail.com">jennyjrubin70@gmail.com</a> for information about booking
		acts.
	</p>

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

	<hr />

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
	details {
		margin-bottom: 2rem;
	}
	summary {
		font-family: watkins;
	}
	details table {
		padding-left: 10px;
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
	img {
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
