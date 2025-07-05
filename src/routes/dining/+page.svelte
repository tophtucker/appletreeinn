<script>
	import Frame from '$lib/template/Frame.svelte';
	import Image from '$lib/lightbox/Image.svelte';
	import VR from '$lib/components/VR.svelte';
</script>

<svelte:head>
	<title>Dining • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/> -->
</svelte:head>

<Frame>
	<div class="inner">
		<div class="comparison">
			<div>
				<h2>Continental breakfast</h2>
				<Image
					src="/heropics/baladi2.jpg"
					style="width: 200px; height: 200px; object-fit: cover; border: 3px double black; border-radius: 100%;"
				/>
				<p>
					Hotel guests can enjoy a continental breakfast in our round room with sweeping views of
					the Berkshire hills every morning from 8 to 10 a.m.
				</p>
			</div>
			<VR />
			<div>
				<h2>The Ostrich Room</h2>
				<Image
					src="/ostrich-room/fireplace.jpg"
					style="width: 200px; height: 200px; object-fit: cover; border: 3px double black; border-radius: 100%;"
				/>
				<p>
					Our 1899 tavern is open to hotel guests and the public for cocktails, dinner, and live
					music Wednesday through Saturday.
				</p>
				<a class="cta" href="/dining/ostrich-room">Learn more</a>
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

	.comparison h2 {
		margin: 0;
	}

	.comparison > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}
</style>
