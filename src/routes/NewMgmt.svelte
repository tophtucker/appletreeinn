<script>
	import { onMount } from 'svelte';
    const message = 'Under new management';
    const chars = message.toUpperCase().split('');
	onMount(() => {
        const charWidth = 14;
        const charEls = document.querySelectorAll('.char');
        for (let i = 0; i < charEls.length; i++) {
            charEls[i].style.visibility = "visible";
        }
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
	}
	.char {
		position: absolute;
        visibility: hidden;
	}
</style>
