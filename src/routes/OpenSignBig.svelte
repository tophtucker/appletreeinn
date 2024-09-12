<script>
	import { hours, closures, musicHours } from '$lib/index.js';
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getMusicForDay = day => {
        const music = musicHours.find(m => m[0] === day);
        if (!music) return null;
        return `with live music ~${music[1].join("–")}`;
    }
</script>

<table class="hours">
	<tbody>
		{#each hours as day}
			<tr>
				<td>{daysOfWeek[day[0]]}.</td>
				<td>{day[1].map((d) => d - 12).join('–')} p.m.</td>
                <td style="font-style: italic;">{getMusicForDay(day[0])}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.hours {
        border-collapse: collapse;
	}
	td {
		padding-right: 0.5em;
        vertical-align: top;
	}
</style>
