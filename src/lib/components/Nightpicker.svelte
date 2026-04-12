<script>
	import Icon from '$lib/icons/Icon.svelte';
	import { timeDay, timeMonday } from 'd3-time';
	import { BOOKING_URL } from '$lib/nav.js';

	const checkin = 15;
	const checkout = 11;

	const bookingMin = timeDay(new Date(2026, 4, 15));
	const bookingMax = timeDay(new Date(2026, 9, 31));
	const bookingDays = timeDay.range(bookingMin, bookingMax);
	const calendarDays = timeDay.range(timeMonday.floor(bookingMin), timeMonday.ceil(bookingMax));

	let bookHover = $state(null);
	let bookStart = $state(null);
	let bookEnd = $state(null);
	let bookStartStr = $derived(dateFormat(bookStart));
	let bookEndStr = $derived(bookEnd && dateFormat(timeDay.offset(bookEnd, 1)));
	let bookNights = $derived(
		bookStart && bookEnd ? calendarDays.filter((day) => day >= bookStart && day <= bookEnd) : []
	);

	// Drag state
	// mode: null | 'new' | 'move' | 'resize-start' | 'resize-end'
	let dragMode = $state(null);
	let dragAnchorDay = $state(null); // fixed end when resizing; grab-point offset when moving
	let dragMoveOffset = $state(0); // # of days between dragAnchorDay and bookStart at move-start
	let dragMoveLength = $state(0); // # of nights in selection at move-start

	function dayIndex(day) {
		return calendarDays.findIndex((d) => +d === +day);
	}

	function clampedDay(idx) {
		const clamped = Math.max(0, Math.min(calendarDays.length - 1, idx));
		return calendarDays[clamped];
	}

	function isInSelection(day) {
		return bookStart && bookEnd && day >= bookStart && day <= bookEnd;
	}

	function handleEdgeMouseDown(which, e) {
		e.preventDefault();
		e.stopPropagation();
		if (which === 'start') {
			dragMode = 'resize-start';
			dragAnchorDay = bookEnd;
		} else {
			dragMode = 'resize-end';
			dragAnchorDay = bookStart;
		}
	}

	function handleMouseDown(day, e) {
		e.preventDefault();

		if (bookStart && bookEnd && isInSelection(day)) {
			// Interior → move the whole selection
			dragMode = 'move';
			dragAnchorDay = day;
			dragMoveOffset = dayIndex(day) - dayIndex(bookStart);
			dragMoveLength = dayIndex(bookEnd) - dayIndex(bookStart);
			return;
		}

		// Start a brand-new selection
		dragMode = 'new';
		dragAnchorDay = day;
		bookStart = day;
		bookEnd = null;
	}

	function handleMouseUp(day) {
		if (!dragMode) return;

		if (dragMode === 'new') {
			if (day > dragAnchorDay) {
				bookStart = dragAnchorDay;
				bookEnd = day;
			} else {
				bookStart = day;
				bookEnd = dragAnchorDay;
			}
		}

		dragMode = null;
		dragAnchorDay = null;
	}

	function handleMouseEnter(day) {
		bookHover = day;
		if (!dragMode) return;

		if (dragMode === 'new') {
			if (day >= dragAnchorDay) {
				bookStart = dragAnchorDay;
				bookEnd = day;
			} else {
				bookStart = day;
				bookEnd = dragAnchorDay;
			}
			return;
		}

		if (dragMode === 'resize-start') {
			// dragAnchorDay is bookEnd; dragged day becomes new bookStart (must be <= anchor)
			if (day <= dragAnchorDay) {
				bookStart = day;
				bookEnd = dragAnchorDay;
			} else {
				// Crossed over: flip to resize-end
				dragMode = 'resize-end';
				bookStart = dragAnchorDay;
				bookEnd = day;
				dragAnchorDay = bookStart;
			}
			return;
		}

		if (dragMode === 'resize-end') {
			// dragAnchorDay is bookStart; dragged day becomes new bookEnd (must be >= anchor)
			if (day >= dragAnchorDay) {
				bookStart = dragAnchorDay;
				bookEnd = day;
			} else {
				// Crossed over: flip to resize-start
				dragMode = 'resize-start';
				bookStart = day;
				bookEnd = dragAnchorDay;
				dragAnchorDay = bookEnd;
			}
			return;
		}

		if (dragMode === 'move') {
			// Shift the whole selection so that dragAnchorDay lands on `day`
			const newStartIdx = dayIndex(day) - dragMoveOffset;
			const newEndIdx = newStartIdx + dragMoveLength;
			// Clamp within bookable range
			const minIdx = dayIndex(bookingMin);
			const maxIdx = dayIndex(timeDay.offset(bookingMax, -1));
			if (newStartIdx < minIdx || newEndIdx > maxIdx) return;
			bookStart = clampedDay(newStartIdx);
			bookEnd = clampedDay(newEndIdx);
		}
	}

	function handleMouseLeave() {
		bookHover = null;
	}

	// Global mouseup so a drag released outside the calendar still finishes cleanly
	function handleGlobalMouseUp() {
		if (dragMode) {
			dragMode = null;
			dragAnchorDay = null;
		}
	}

	function handleInputIn(e) {
		const newDay = calendarDays.find((d) => dateFormat(d) === e.target.value);
		if (!isBookable(newDay)) return;
		bookStart = newDay;
	}

	function handleInputOut(e) {
		const newDay = calendarDays.find((d) => dateFormat(timeDay.offset(d, 1)) === e.target.value);
		if (!isBookable(newDay)) return;
		bookEnd = newDay;
	}

	function clearStart() {
		bookStart = null;
	}

	function clearEnd() {
		bookEnd = null;
	}

	function dateFormat(date) {
		if (!date) return '';
		const y = date.getFullYear();
		const m = String(date.getMonth() + 1).padStart(2, '0');
		const d = String(date.getDate()).padStart(2, '0');
		return `${y}-${m}-${d}`;
	}

	function timeFormat(hour) {
		return hour >= 12 ? `${hour - 12} p.m.` : `${hour} a.m.`;
	}

	function getUrl(a, b) {
		return `${BOOKING_URL}?checkInDate=${a}&checkOutDate=${b}`;
	}

	function isBookable(date) {
		return !!bookingDays.find((d) => +d === +date);
	}

	// Cursor logic
	function hitboxCursor(day) {
		if (!bookStart || !bookEnd) return 'default';
		if (isInSelection(day)) return 'grab';
		return 'default';
	}

	const dragCursor = $derived(
		dragMode === 'resize-start' || dragMode === 'resize-end'
			? 'ew-resize'
			: dragMode === 'move'
				? 'grabbing'
				: null
	);
</script>

<svelte:window onmouseup={handleGlobalMouseUp} />

<div class="form-wrapper">
	<div class="form">
		<div>Check in</div>
		<span>
			<input
				type="date"
				value={bookStartStr}
				min={dateFormat(bookingMin)}
				max={dateFormat(bookingMax)}
				oninput={handleInputIn}
			/>
			<button class="clear" onclick={clearStart}><Icon icon="Close" /></button>
		</span>
		<div>after {timeFormat(checkin)}</div>
		<div>Check out</div>
		<span
			><input
				type="date"
				value={bookEndStr}
				min={dateFormat(timeDay.offset(bookingMin, 1))}
				max={dateFormat(timeDay.offset(bookingMax, 1))}
				oninput={handleInputOut}
			/>
			<button class="clear" onclick={clearEnd}><Icon icon="Close" /></button></span
		>
		<div>by {timeFormat(checkout)}</div>
	</div>
	<a class="cta" href={getUrl(bookStartStr, bookEndStr)}>Book now</a>
</div>

<div
	class="calendar"
	class:dragging={dragCursor}
	style="--morning: {checkout}fr; --turnover: {checkin - checkout}fr; --evening: {24 -
		checkin}fr; {dragCursor ? `cursor: ${dragCursor};` : ''}"
>
	<div class="dow">M<span class="hide-mobile">onday</span></div>
	<div class="dow">T<span class="hide-mobile">uesday</span></div>
	<div class="dow">W<span class="hide-mobile">ednesday</span></div>
	<div class="dow">T<span class="hide-mobile">hursday</span></div>
	<div class="dow">F<span class="hide-mobile">riday</span></div>
	<div class="dow weekend">S<span class="hide-mobile">aturday</span></div>
	<div class="dow weekend">S<span class="hide-mobile">unday</span></div>
	{#each calendarDays as day}
		{@const morning = timeDay.offset(day, -1)}
		<div class={`day ${day.getDay() === 0 || day.getDay() === 6 ? 'weekend' : ''}`}>
			<div class="label">
				<span class="hide-mobile"
					>{#if day.getDate() === 1 || day === calendarDays[0]}
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
				>
					{#if +morning === +bookEnd}
						<div
							class="edge"
							role="presentation"
							onmousedown={(e) => handleEdgeMouseDown('end', e)}
						></div>
					{/if}
				</div>
				<div class="gap"></div>
				<div
					class={`evening part ${+bookHover === +day ? 'hover' : ''} ${bookNights.find((d) => +d === +day) ? 'selected' : ''} ${!isBookable(day) ? 'disabled' : ''}`}
				>
					{#if +day === +bookStart}
						<div
							class="edge"
							role="presentation"
							onmousedown={(e) => handleEdgeMouseDown('start', e)}
						></div>
					{/if}
				</div>
			</div>
			<div class="hitboxes">
				<div
					role="presentation"
					class={`hitbox ${!isBookable(morning) ? 'disabled' : ''}`}
					style="cursor: {hitboxCursor(morning)}"
					onmousedown={(e) => handleMouseDown(morning, e)}
					onmouseup={() => handleMouseUp(morning)}
					onmouseenter={() => handleMouseEnter(morning)}
					onmouseleave={() => handleMouseLeave()}
				></div>
				<div
					role="presentation"
					class={`hitbox ${!isBookable(day) ? 'disabled' : ''}`}
					style="cursor: {hitboxCursor(day)}"
					onmousedown={(e) => handleMouseDown(day, e)}
					onmouseup={() => handleMouseUp(day)}
					onmouseenter={() => handleMouseEnter(day)}
					onmouseleave={() => handleMouseLeave()}
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
		flex-wrap: wrap;
		margin-bottom: 1em;
	}
	.form {
		max-width: 400px;
		display: grid;
		grid-template-columns: 0.8fr 1.7fr 1fr;
		gap: 0.5em;
		align-items: center;
	}
	input[type='date'] {
		font: inherit;
		font-variant: tabular-nums;
	}
	.clear {
		border-color: transparent;
		cursor: pointer;
		width: 1.5em;
		color: #ccc;
	}
	.clear:hover {
		background: none;
		color: black;
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
	.calendar.dragging * {
		cursor: inherit !important;
	}
	.dow {
		box-shadow: inset 0 0 0 0.5px #eee;
		text-align: center;
		padding: 0.25em;
		scroll-snap-align: start;
		position: sticky;
		top: 0;
		background: white;
		z-index: 4;
		text-transform: uppercase;
		font-size: smaller;
	}
	.day {
		box-shadow: inset 0 0 0 0.5px #eee;
		aspect-ratio: 3 / 2;
		display: grid;
		grid-template-rows: 1fr 2fr;
		user-select: none;
		scroll-snap-align: start;
		padding: 0.5em 0;
		gap: 1px;
		position: relative;
	}
	.weekend {
		background: #f9f9f9;
	}
	.label {
		display: flex;
		justify-content: space-between;
		padding: 0 0.5em;
	}
	.label span:last-child {
		text-align: right;
	}
	.hitboxes {
		display: grid;
		grid-template-columns: var(--morning) var(--evening);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	.nightparts {
		position: relative;
		z-index: 3;
		pointer-events: none;
	}
	.hitbox.disabled {
		pointer-events: none;
	}
	.nightparts {
		display: grid;
		grid-template-columns: var(--morning) var(--turnover) var(--evening);
	}
	.nightparts .part {
		border: 1px solid #ccc;
		background: white;
		position: relative;
	}
	.nightparts .part.disabled {
		visibility: hidden;
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
		background: color-mix(in srgb, var(--blue) 30%, white);
		border-color: transparent;
	}
	.nightparts .part .edge {
		position: absolute;
		top: -1px;
		height: calc(100% + 2px);
		width: 5px;
		pointer-events: all;
		cursor: ew-resize;
	}
	.nightparts .morning.part .edge {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		background: var(--blue);
		right: -1px;
	}
	.nightparts .evening.part .edge {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		background: var(--blue);
		left: -1px;
	}
	@media (max-width: 800px) {
		.form {
			grid-template-columns: 2fr 1fr;
		}
		.form div:nth-child(3n + 1) {
			grid-column: 1 / span 2;
		}
		.day {
			aspect-ratio: 2 / 3;
			padding: 0 0 5px 0;
		}
	}
</style>
