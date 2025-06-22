<script>
	import { timeFormat } from 'd3-time-format';
	import Frame from '$lib/template/Frame.svelte';
	export let data;
	console.log(data);
	const fWeekday = timeFormat('%a');
	const fDate = timeFormat('%B %-d');
	const fTime = timeFormat('%-I:%M %p');
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

		<h2>Upcoming</h2>

		{#each data.performances as p}
			<div class="performance">
				<div class="time">
					<h3>{fWeekday(p.time)}.</h3>
					<div>{fDate(p.time)}</div>
					<div>{fTime(p.time)}</div>
				</div>
				<div>
					<h3>{p.act.name}</h3>
					<p>{@html p.act.description}</p>
				</div>
				<img src={p.act.image} alt={p.act.name} />
			</div>
		{/each}
	</div>
</Frame>

<style>
	.performance {
		display: flex;
		gap: 2rem;
		align-items: start;
	}
	h3 {
		margin: 0;
	}
	img {
		border: 3px double black;
	}
</style>
