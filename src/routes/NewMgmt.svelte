<script>
	import { onMount } from 'svelte';
    const chars = 'Under new management'.toUpperCase().split('');
	onMount(() => {
        const charWidth = 14;
        const charEls = document.querySelectorAll('.char');
        const bannerWidth = charEls.length * charWidth;
        let x = innerWidth + bannerWidth / 2;
		requestAnimationFrame(function animate() {
			for (let i = 0; i < charEls.length; i++) {
				const char = charEls[i];
				char.style.left = `${x + i * 14}px`;
				char.style.top = `${5 * Math.sin(x / 15 + i / 2)}px`;
			}
			x--;
			if (x >= -bannerWidth - 10) requestAnimationFrame(animate);
		});
	});
</script>

<div class="banner">
	{#each chars as char}
		<div class="char">{char}</div>
	{/each}
</div>

<style>
	.banner {
		position: absolute;
		top: 15px;
		left: 0;
		font-family: Consolas, monospace;
	}
	.char {
		position: absolute;
	}
</style>
