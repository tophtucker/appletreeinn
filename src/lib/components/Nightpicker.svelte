<script>
	import { timeDay, timeSunday } from 'd3-time';

	const checkin = 3;
	const checkout = 11;

	const start = timeSunday.floor(new Date());
	const days = timeDay.range(start, timeDay.offset(start, 14));

	let bookHover = $state(null);
	let bookStart = $state(null);
	let bookEnd = $state(null);
	let bookNights = $derived(
		bookStart && bookEnd ? days.filter((day) => day >= bookStart && day <= bookEnd) : null
	);
</script>

<div class="calendar">
	{#each days as day}
		<div class="day">
			<div class="label">{day.getDate()}</div>
			<div class="nightparts">
				<div
					class={`morning part ${+bookHover === +timeDay.offset(day, -1) ? 'hover' : ''}`}
					onmouseenter={() => (bookHover = timeDay.offset(day, -1))}
					onmouseleave={() => (bookHover = null)}
				></div>
				<div class="gap"></div>
				<div
					class={`evening part ${+bookHover === +day ? 'hover' : ''}`}
					onmouseenter={() => (bookHover = day)}
					onmouseleave={() => (bookHover = null)}
				></div>
			</div>
		</div>
	{/each}
</div>

<style>
	.calendar {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		border: 0.5px solid #eee;
	}
	.day {
		box-shadow: inset 0 0 0 0.5px #eee;
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
	}
	.label {
		text-align: right;
		padding: 0.5em;
		justify-self: end;
	}
	.nightparts {
		display: grid;
		grid-template-columns: 11fr 4fr 9fr;
		gap: 4fr;
		height: 3em;
	}
	.nightparts .part {
		border: 1px solid var(--blue);
		background: white;
	}
	.nightparts .morning {
		border-left: none;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.nightparts .evening {
		border-right: none;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	.nightparts .part.hover {
		background: #eee;
	}
</style>
