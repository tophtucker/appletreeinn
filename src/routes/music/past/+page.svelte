<script>
	import { timeFormat } from 'd3-time-format';
	import { min, group } from 'd3-array';
	import { timeDay, timeSunday } from 'd3-time';
	import Frame from '$lib/template/Frame.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	let { data } = $props();
	console.log(data.performances);

	const fWeekday = timeFormat('%a');
	const fDate = timeFormat('%b. %-d');
	const fTime = timeFormat('%-I:%M %p');
</script>

<svelte:head>
	<title>Live music • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
</svelte:head>

<Frame>
	<div class="inner">
		<h2>Past shows</h2>

		<table>
			<tbody>
				{#each data.performances as p}
					<tr>
						<td class="nowrap">{fWeekday(p.time)}. {fDate(p.time)}</td>
						<td class="nowrap">{fTime(p.time)}</td>
						<td>{p.act.name}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Frame>

<style>
	table td {
		min-width: 6rem;
		padding: 0 1rem 0.5rem 0;
	}
	.nowrap {
		white-space: nowrap;
	}
</style>
