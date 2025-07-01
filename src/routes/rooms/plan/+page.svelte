<script>
	import Frame from '$lib/template/Frame.svelte';
	import VR from '$lib/components/VR.svelte';
</script>

<svelte:head>
	<title>Plan your stay • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
</svelte:head>

<Frame>
	<div class="inner">
		<h1>Plan your stay</h1>
		<h2>Getting here</h2>
		<p>
			The nearest airport is Albany, but it doesn’t have many direct flights, so we typically fly
			into Boston Logan. There are buses to downtown Lenox, but we definitely recommend coming with
			a car! We’re a 40-minute walk to downtown Lenox, and there are basically zero Ubers or taxis
			in the area.
		</p>
		<div class="comparison">
			<div>
				<h3>From Boston</h3>
				<p>
					Take the Mass Pike for 123 miles (90% of the drive). Listen to “Sweet Baby James”. Stop at
					one of the many McDonald’s; beware the D’Angelos rest stops.
				</p>
			</div>
			<VR />
			<div>
				<h3>From New York City</h3>
				<p>
					Take the Taconic for 91 miles (⅔ of the drive). Try stopping at Troutbeck (+20 min) or
					Stissing House (+10 min) (check hours). The road becomes winding as you get closer; watch
					for deer.
				</p>
			</div>
		</div>
	</div>
</Frame>

<style>
	.comparison {
		display: grid;
		grid-template-columns: 1fr 12px 1fr;
		gap: 1rem;
		text-align: center;
		margin-top: 2rem;
	}

	.comparison h3 {
		margin: 0;
	}

	.comparison > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}
</style>
