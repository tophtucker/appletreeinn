<script>
	import { timeDay, timeSunday } from 'd3-time';

	const checkin = 3;
	const checkout = 11;

	const start = timeSunday.floor(new Date());
	const days = timeDay.range(start, timeDay.offset(start, 14));

	let bookHover = $state(null);
	let bookA = $state(null);
	let bookB = $state(null);
	let bookStart = $derived(Math.min(bookA, bookB));
	let bookEnd = $derived(Math.max(bookA, bookB));
	let bookNights = $derived(
		bookStart && bookEnd ? days.filter((day) => day >= bookStart && day <= bookEnd) : []
	);
	let isDragging = false;

	function handleMouseDown(day) {
		isDragging = true;
		bookB = null;
		bookA = day;
	}

	function handleMouseUp(day) {
		if (isDragging) {
			bookB = day;
			isDragging = false;
		}
	}

	function handleMouseEnter(day) {
		bookHover = day;
		if (isDragging) {
			bookB = day;
		}
	}

	function handleMouseLeave() {
		bookHover = null;
	}
</script>

<!-- Check in <input type="date" />
Check out <input type="date" /> -->

<div class="calendar">
	{#each days as day}
		{@const morning = timeDay.offset(day, -1)}
		<div class="day">
			<div class="label">{day.getDate()}</div>
			<div
				class={`nightparts ${bookNights.find((d) => +d === +morning) && bookNights.find((d) => +d === +day) ? 'selected' : ''}`}
			>
				<div
					class={`morning part ${+bookHover === +morning ? 'hover' : ''} ${bookNights.find((d) => +d === +morning) ? 'selected' : ''}`}
					onmousedown={() => handleMouseDown(morning)}
					onmouseup={() => handleMouseUp(morning)}
					onmouseenter={() => handleMouseEnter(morning)}
					onmouseleave={() => handleMouseLeave(morning)}
				></div>
				<div class="gap"></div>
				<div
					class={`evening part ${+bookHover === +day ? 'hover' : ''} ${bookNights.find((d) => +d === +day) ? 'selected' : ''}`}
					onmousedown={() => handleMouseDown(day)}
					onmouseup={() => handleMouseUp(day)}
					onmouseenter={() => handleMouseEnter(day)}
					onmouseleave={() => handleMouseLeave(day)}
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
		user-select: none;
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
	.nightparts.selected,
	.nightparts .part.selected {
		background: var(--blue);
	}
</style>
