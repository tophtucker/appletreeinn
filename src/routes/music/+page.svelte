<script>
	import { timeFormat } from 'd3-time-format';
	import { min, group } from 'd3-array';
	import { timeDay, timeSunday } from 'd3-time';

	import Frame from '$lib/template/Frame.svelte';
	export let data;
	console.log(data);
	const fWeekday = timeFormat('%a');
	const fDate = timeFormat('%B %-d');
	const fTime = timeFormat('%-I:%M %p');

	const start = timeSunday(min(data.performances, (d) => d.time));
	const days = timeDay.range(start, timeDay.offset(start, 28));
	const groupedPerformances = group(data.performances, (d) => timeDay(d.time));

	days.map((day) => {
		console.log(day, timeDay(), +day === +timeDay() ? 'today' : '');
	});
	// console.log(days)
</script>

<svelte:head>
	<title>Live music • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
</svelte:head>

<Frame>
	<div class="inner">
		<p>
			<a href="/ostrich-room">The Ostrich Room</a> features live music every week, drawing on the Berkshires’
			rich history… Though this incarnation is only a few years old, we have people come in who tell
			us they played here decades ago… something something… Johnny Irion, James Taylor…
		</p>
		<p>
			See <a href="https://instagram.com/appletreeinn">Instagram</a>
			for previews and updates. Email Jenny Rubin at
			<a href="mailto:jennyjrubin70@gmail.com">jennyjrubin70@gmail.com</a> for information about booking
			acts.
		</p>

		<h2>Upcoming shows</h2>

		<div class="performances">
			{#each data.performances.slice(0, 4) as p}
				<div class="performance">
					<div class="time">
						<h3>{fWeekday(p.time)}.</h3>
						<div>{fDate(p.time)}</div>
						<div>{fTime(p.time)}</div>
					</div>
					<div>
						<h3>{p.act.name}</h3>
						{@html p.act.description}
						{#if p.act.genre}<span class="genre">{p.act.genre}</span>{/if}
					</div>
					{#if p.act.image}
						<img src={p.act.image} alt={p.act.name} />
					{/if}
				</div>
			{/each}
		</div>

		<div class="calendar">
			{#each days.slice(0, 7) as day}
				<div class="header">{fWeekday(day)}</div>
			{/each}
			{#each days as day}
				<div class={+day === +timeDay() ? 'today' : ''}>
					<div class="date">{day.getDate() === 1 ? fDate(day) : day.getDate()}</div>
					{#each groupedPerformances.get(day) as p}
						<div><small>{fTime(p.time)}</small><br /> {p.act.name}</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</Frame>

<style>
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
</style>
