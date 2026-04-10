<script>
	import { timeDay, timeSunday } from 'd3-time';
	import { BOOKING_URL } from '$lib/nav.js';

	const checkin = 15;
	const checkout = 11;

	const start = timeSunday.floor(new Date());
	const days = timeDay.range(start, timeDay.offset(start, 7 * 10));

	let bookHover = $state(null);
	let bookStart = $state(null);
	let bookEnd = $state(null);
	let bookStartStr = $derived(dateFormat(bookStart));
	let bookEndStr = $derived(bookEnd && dateFormat(timeDay.offset(bookEnd, 1)));
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

	function handleInputIn(e) {
		const newDay = days.find((d) => dateFormat(d) === e.target.value);
		if (!isBookable(newDay)) return;
		bookStart = newDay;
	}

	function handleInputOut(e) {
		const newDay = days.find((d) => dateFormat(timeDay.offset(d, 1)) === e.target.value);
		if (!isBookable(newDay)) return;
		bookEnd = newDay;
	}

	function dateFormat(date) {
		if (!date) return '';
		const y = date.getFullYear();
		const m = String(date.getMonth() + 1).padStart(2, '0');
		const d = String(date.getDate()).padStart(2, '0');
		return `${y}-${m}-${d}`;
	}

	function getUrl(a, b) {
		return `${BOOKING_URL}?checkInDate=${a}&checkOutDate=${b}`;
	}

	function isBookable(date) {
		// TODO: edge cases? i've tried to book a room for "tonight" after midnight before
		return date >= timeDay(new Date());
	}
</script>

<div class="form-wrapper">
	<div class="form">
		<div>Check in</div>
		<!-- TODO: min & max dates -->
		<input type="date" value={bookStartStr} oninput={handleInputIn} />
		<div>after 3 p.m.</div>
		<div>Check out</div>
		<input type="date" value={bookEndStr} oninput={handleInputOut} />
		<div>by 11 a.m.</div>
	</div>
	<a class="cta" href={getUrl(bookStartStr, bookEndStr)}>Book now</a>
</div>

<div
	class="calendar"
	style="--morning: {checkout}fr; --turnover: {checkin - checkout}fr; --evening: {24 - checkin}fr;"
>
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
			<div class="label">
				<span
					>{#if day.getDate() === 1 || day === days[0]}
						{new Intl.DateTimeFormat('en', { month: 'long' }).format(
							new Date(2000, day.getMonth())
						)}
					{/if}</span
				><span>{day.getDate()}</span>
			</div>
			<div
				class={`nightparts ${bookNights.find((d) => +d === +morning) && bookNights.find((d) => +d === +day) ? 'selected' : ''}`}
			>
				<div
					class={`morning part ${+bookHover === +morning ? 'hover' : ''} ${bookNights.find((d) => +d === +morning) ? 'selected' : ''} ${!isBookable(morning) ? 'disabled' : ''}`}
					onmousedown={() => handleMouseDown(morning)}
					onmouseup={() => handleMouseUp(morning)}
					onmouseenter={() => handleMouseEnter(morning)}
					onmouseleave={() => handleMouseLeave(morning)}
				></div>
				<div class="gap"></div>
				<div
					class={`evening part ${+bookHover === +day ? 'hover' : ''} ${bookNights.find((d) => +d === +day) ? 'selected' : ''} ${!isBookable(day) ? 'disabled' : ''}`}
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
	.form-wrapper {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 1em;
	}
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
		max-height: 500px;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		scroll-padding-top: 31px;
	}
	.dow {
		box-shadow: inset 0 0 0 0.5px #eee;
		text-align: center;
		padding: 0.25em;
		scroll-snap-align: start;
		position: sticky;
		top: 0;
		background: white;
		z-index: 1;
	}
	.day {
		box-shadow: inset 0 0 0 0.5px #eee;
		aspect-ratio: 3 / 2;
		display: grid;
		grid-template-rows: 1fr 2fr;
		user-select: none;
		scroll-snap-align: start;
		padding: 0.5em 0;
		gap: 0.5em;
	}
	.part.disabled {
		visibility: hidden;
		pointer-events: none;
	}
	.label {
		display: flex;
		justify-content: space-between;
		padding: 0 0.5em;
	}
	.label span:last-child {
		text-align: right;
	}
	.nightparts {
		display: grid;
		grid-template-columns: var(--morning) var(--turnover) var(--evening);
	}
	.nightparts .part {
		border: 1px solid #ccc;
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
		border-color: var(--blue);
	}
</style>
