<script>
	import { timeDay, timeMinute } from 'd3-time';
	let { data } = $props();

	const isET = Intl.DateTimeFormat().resolvedOptions().timeZone === 'America/New_York';
	const now = new Date();
	const nextHours = getNextHours(data);
	const isOpen = nextHours && nextHours[0] <= now && nextHours[1] > now;

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

	function getNextHours(data) {
		const now = new Date();
		const today = timeDay();
		for (let i = 0; i < 14; i++) {
			const day = timeDay.offset(today, i);
			const rule = data.hours.find(([dayOfWeek]) => dayOfWeek === day.getDay());
			const exception = data.overrides.find((d) => +d[0] === +day);
			const thisCase = exception || rule;
			if (thisCase && thisCase[1]) {
				const absoluteHours = thisCase[1].map((hr) => timeMinute.offset(day, hr * 60));
				if (absoluteHours[1] > now) return absoluteHours;
			}
		}
		return null;
	}
</script>

{#if isET && isOpen}
	<div class="open" title={`Open until ${formatFutureDate(nextHours[1])}`}>
		<svg width="30" height="15">
			<path d="M 16 0 30 15" stroke="black"></path>
			<path d="M 14 0 0 15" stroke="black"></path>
		</svg>
		<div>OPEN</div>
	</div>
{/if}

<style>
	@keyframes swing {
		0% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(10deg);
		}
	}

	.open {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		top: 73%;
		left: 45%;
		font-family: 'watkins';
		font-size: 12px;
		animation: swing 2s ease-in-out infinite alternate;
		transform-origin: top center;
	}
	.open > svg {
		display: block;
	}
	.open > div {
		border: 1px solid var(--black);
		padding: 4px 4px 2px 4px;
		border-radius: 4px;
	}
</style>
