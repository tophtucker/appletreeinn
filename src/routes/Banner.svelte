<script>
	import { onMount } from 'svelte';
	const message = 'Ostrich Room closed April 3 – 5 for “spring break”';
	const chars = message.toUpperCase().split('');
	onMount(() => {
		const charWidth = 14;
		const charEls = document.querySelectorAll('.char');
		for (let i = 0; i < charEls.length; i++) {
			charEls[i].style.visibility = 'visible';
		}
		const bannerWidth = charEls.length * charWidth;
		let x = innerWidth + 10;
		requestAnimationFrame(function animate() {
			for (let i = 0; i < charEls.length; i++) {
				const char = charEls[i];
				char.style.left = `${x + i * 14}px`;
				char.style.top = `${2.5 + 5 * Math.sin(x / 20 + i / 4)}px`;
			}
			x--;
			if (x >= -bannerWidth - 10) requestAnimationFrame(animate);
		});
	});
</script>

<div class="banner" aria-label={message} role="presentation">
	{#each chars as char}
		<span class="char" aria-hidden="true">{char}</span>
	{/each}
</div>

<style>
	.banner {
		position: absolute;
		top: 15px;
		left: 0;
		font-family: Consolas, monospace;
		z-index: -1;
		width: 100%;
		height: 40px;
		overflow: hidden;
	}
	.char {
		position: absolute;
		visibility: hidden;
	}
</style>
