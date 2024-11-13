<script>
	let { data } = $props();
	const { hours, closures } = data;

	const isET = Intl.DateTimeFormat().resolvedOptions().timeZone === 'America/New_York';
	const today = new Date();
	const day = today.getDay();
	const hour = today.getHours();

	function isClosure(date) {
		return !!closures.find(
			(c) => +c === +new Date(date.getFullYear(), date.getMonth(), date.getDate())
		);
	}

	const currentOpen =
		!isClosure(today) &&
		hours.find(
			([openDay, [openHour, closeHour]]) => day === openDay && hour >= openHour && hour < closeHour
		);

	const nextOpen = getNextOpen();

	function formatFutureDate(date) {
		const now = new Date();
		if (
			date.getDate() === now.getDate() &&
			date.getMonth() === now.getMonth() &&
			date.getFullYear() === now.getFullYear()
		) {
			return new Intl.DateTimeFormat('en-US', {
				hour: 'numeric',
				hour12: true
			}).format(date);
		} else if (date < new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)) {
			return new Intl.DateTimeFormat('en-US', {
				weekday: 'short'
			}).format(date);
		} else {
			return new Intl.DateTimeFormat('en-US', {
				month: 'numeric',
				day: 'numeric'
			}).format(date);
		}
	}

	function getNextOpen() {
		const now = new Date();
		const currentDay = now.getDay();
		const currentHour = now.getHours();

		// Find the next opening time
		for (let i = 0; i < 14; i++) {
			const dayIndex = (currentDay + i) % 7;
			const opening =
				!isClosure(new Date(now.getFullYear(), now.getMonth(), now.getDate() + i)) &&
				hours.find(([day]) => day === dayIndex);

			if (opening) {
				const [day, [openHour]] = opening;
				if (i === 0 && currentHour < openHour) {
					const nextOpening = new Date();
					// Today but later
					nextOpening.setHours(openHour, 0, 0, 0);
					return nextOpening;
				} else if (i > 0) {
					// In the future
					const nextOpening = new Date();
					nextOpening.setDate(now.getDate() + i);
					nextOpening.setHours(openHour, 0, 0, 0);
					return nextOpening;
				}
			}
		}
		return null;
	}
</script>

{#if isET}
	{#if currentOpen}
		<div class="neon open" title={`Open until ${currentOpen[1][1] - 12}`}>OPEN</div>
	{:else if nextOpen}
		<div class="neon">Opens {formatFutureDate(nextOpen)}</div>
	{/if}
{/if}

<style>
	.neon {
		position: absolute;
		top: calc(100% + 0.75em);
		font-family: sans-serif;
		font-size: 12px;
		padding: 2px 4px;
		border-radius: 4px;
		background: var(--tan);
		border: 1px solid var(--brown);
		text-transform: uppercase;
	}
	.neon.open {
		color: white;
		border: none;
		box-shadow: green 0 0 10px;
		background: green;
	}
</style>
