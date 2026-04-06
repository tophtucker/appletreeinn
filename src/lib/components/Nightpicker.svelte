<script>
	import { timeDay, timeSunday } from 'd3-time';

	const checkin = 3;
	const checkout = 11;

	const start = timeSunday.floor(new Date());
	const days = timeDay.range(start, timeDay.offset(start, 14));

	let bookHover = $state(null);
	let bookStart = $state(null);
	let bookEnd = $state(null);
	let bookStartStr = $derived(dateFormat(bookStart));
	let bookEndStr = $derived(dateFormat(bookEnd));
	let dragStart = $state(null);
	let bookNights = $derived(
		bookStart && bookEnd ? days.filter((day) => day >= bookStart && day <= bookEnd) : []
	);
	let isDragging = false;

	function handleMouseDown(day) {
		isDragging = true;
		dragStart = bookStart = day;
		bookEnd = null;
	}

	function handleMouseUp(day) {
		if (isDragging) {
			if (day > dragStart) {
				bookStart = dragStart;
				bookEnd = day;
			} else {
				bookStart = day;
				bookEnd = dragStart;
			}
			isDragging = false;
		}
	}

	function handleMouseEnter(day) {
		bookHover = day;
		if (isDragging) {
			if (day > dragStart) {
				bookStart = dragStart;
				bookEnd = day;
			} else {
				bookStart = day;
				bookEnd = dragStart;
			}
		}
	}

	function handleMouseLeave() {
		bookHover = null;
	}

	function dateFormat(date) {
		if (!date) return '';
		const y = date.getFullYear();
		const m = String(date.getMonth() + 1).padStart(2, '0');
		const d = String(date.getDate()).padStart(2, '0');
		return `${y}-${m}-${d}`;
	}
</script>

<div class="form">
	<div>Check in</div>
	<input
		type="date"
		value={bookStartStr}
		oninput={(e) => (bookStart = days.find((d) => dateFormat(d) === e.target.value))}
	/>
	<div>after 3 p.m.</div>
	<div>Check out</div>
	<input
		type="date"
		value={bookEndStr}
		oninput={(e) => (bookEnd = days.find((d) => dateFormat(d) === e.target.value))}
	/>
	<div>by 11 a.m.</div>
</div>

<div class="calendar">
	<div class="dow">Sunday</div>
	<div class="dow">Monday</div>
	<div class="dow">Tuesday</div>
	<div class="dow">Wednesday</div>
	<div class="dow">Thursday</div>
	<div class="dow">Friday</div>
	<div class="dow">Saturday</div>
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
	.form {
		width: 400px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
		margin-bottom: 1em;
		align-items: center;
	}
	input[type='date'] {
		font: inherit;
		font-variant: tabular-nums;
	}

	.calendar {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		border: 0.5px solid #eee;
	}
	.dow {
		box-shadow: inset 0 0 0 0.5px #eee;
		text-align: center;
		padding: 0.25em;
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
