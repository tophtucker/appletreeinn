<script>
	const images = [
		{ src: '/heropics/summer-annex.jpg', alt: 'Summer annex' },
		{ src: '/newlodge/1.jpg', alt: 'Queen room' },
		{ src: '/heropics/view2.jpg', alt: 'View of the Stockbridge Bowl' },
		{ src: '/heropics/pool1.jpg', alt: 'The pool' },
		{ src: '/newlodge/2.jpg', alt: 'Queen room' },
		{ src: '/heropics/view3.jpg', alt: 'View from the hill' },
		{ src: '/newlodge/3.jpg', alt: 'Bathroom' },
		{ src: '/heropics/pool2.jpg', alt: 'Pool area' },
		{ src: '/newlodge/4.jpg', alt: 'Double room' }
	];

	// Duplicate for seamless looping
	const track = [...images, ...images];
</script>

<div class="carousel" aria-label="Photo gallery">
	<div class="track">
		{#each track as img}
			<img src={img.src} alt={img.alt} />
		{/each}
	</div>
</div>

<style>
	.carousel {
		width: 100%;
		overflow: hidden;
		height: 400px;
		background: white;
	}

	.track {
		display: flex;
		gap: 2px;
		height: 100%;
		/* Total width = number of original images × (image width + gap).
		   We duplicate the list, so the animation moves exactly 50% (one full set). */
		animation: scroll linear infinite;
		animation-duration: 40s;
		will-change: transform;
	}

	.track:hover {
		animation-play-state: paused;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			/* Move left by exactly half the track width (one full copy of the image list) */
			transform: translateX(-50%);
		}
	}

	img {
		display: block;
		height: 100%;
		width: auto;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		object-position: center;
		flex-shrink: 0;
	}
</style>
