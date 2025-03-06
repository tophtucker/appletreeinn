<script>
	import Slideshow from './Slideshow.svelte';
	const pics = [
		// { src: './heropics/view2.jpg', title: 'The view' },
		{ src: './heropics/view3.jpg', title: 'The view' },
		{ src: './ostrich-room/P8243018.JPG', title: 'The Ostrich Room, our tavern' },
		{ src: './baladi/room.jpg', title: 'Brunch at Baladi' },
		{ src: './heropics/view4.jpg', title: 'The main house' },
		// { src: './heropics/drone-repainted.jpg', title: 'The Apple Tree Inn, viewed from the air' },
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
			<p>Welcome to the Apple Tree!</p>
			<ul>
				<li>Historic Lenox estate situated high on a hill in the Berkshires</li>
				<li>21 scenic acres with beautiful year-round views</li>
				<li>Walking distance to Tanglewood and Kripalu</li>
				<li>Fireplaces in winter; pool in summer; board games all year round</li>
				<li>Wood paneled tavern serving dinner and cocktails and featuring frequent live music</li>
				<li>Weekend brunch restaurant with panoramic views</li>
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
		font-size: normal;
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

	@media (max-width: 900px) {
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
