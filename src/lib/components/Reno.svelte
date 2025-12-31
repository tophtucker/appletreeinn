<div style="position: relative;">
	<img src="/img/reno-bg.jpg" alt="The Apple Tree Inn’s Main House" class="bg" />
	<img
		src="/img/reno-fg.png"
		style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"
		alt="Renovations will include a new entrance, dining room, and garden, as well as demolishing the round room"
		class="fg"
	/>
</div>

<style>
	div {
		position: relative;
	}

	.bg {
		display: block;
		width: 100%;
		animation: desaturate 3s ease forwards;
		animation-delay: 1s;
	}

	.fg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 1;
		animation: fadeIn 1s ease forwards;
		animation-delay: 2s;
	}

	@keyframes desaturate {
		from {
			filter: grayscale(0%);
		}
		to {
			filter: grayscale(100%);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
