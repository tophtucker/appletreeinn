<script>
	import Slideshow from './Slideshow.svelte';
	const pics = [
		{ src: './heropics/view2.jpg', title: 'The view' },
		{ src: './ostrich-room/P8243018.JPG', title: 'The Ostrich Room, our tavern' },
		{ src: './baladi/room.jpg', title: 'Brunch at Baladi' },
		{ src: './heropics/drone-repainted.jpg', title: 'The Apple Tree Inn, viewed from the air' },
		{ src: './roompics/main-house/8/_XCS2672.jpg', title: 'Room 8' },
		{ src: './heropics/fire-pit.jpg', title: 'The fire pit' },
		// { src: './heropics/view1.jpg', title: 'The view from the lawn' },
		{ src: './heropics/max.jpg', title: 'Max, the hotel dog, but really Christian’s' },
		{ src: './heropics/pool1.jpg', title: 'The pool' }
		// { src: './heropics/exterior.jpg', title: 'The Apple Tree Inn, viewed from the air' }
	];
</script>

<div class="inner">
	<div class="intro">
		<article>
			<p>Come enjoy our</p>
			<ul>
				<li>beautiful views & grounds,</li>
				<li>hidden gem pool,</li>
				<li>
					wood-paneled <a href="/ostrich-room">tavern</a> (Wed. – Sat.) with frequent live music,
				</li>
				<li>weekend <a href="/baladi">brunch restaurant</a> overlooking the hills,</li>
				<li>luxurious bedding, and</li>
				<li>location walking distance to Tanglewood and Kripalu.</li>
			</ul>
		</article>
		<Slideshow {pics} aspectRatio={1.33} />
	</div>
</div>

<style>
	.intro {
		display: grid;
		grid-template-columns: 2fr 3fr;
		border-radius: 5px;
		border: 1px solid var(--brown);
		overflow: hidden;
	}

	.intro article {
		font-size: larger;
		padding: 2em;
		max-width: 640px;
		background: var(--tan);
		border-right: 1px solid var(--brown);
	}

	.intro article p:first-child {
		margin-top: 0;
	}

	.intro li {
		margin-bottom: 1em;
		line-height: normal;
	}
	.intro li:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 1160px) {
		.intro article {
			font-size: 1em;
		}
		.intro li {
			margin-bottom: 0;
		}
	}

	@media (max-width: 800px) {
		.intro {
			display: flex;
			flex-direction: column;
		}
		.intro .slideshow {
			order: 1;
		}
		.intro article {
			order: 2;
			padding: 1em;
			border: none;
			border-top: 1px solid var(--brown);
			font-size: 1em;
			max-width: 100%;
		}
	}
</style>
