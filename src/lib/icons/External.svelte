<script>
	// Stolen from https://en.wikipedia.org/wiki/Help:External_link_icons
	let { size = 12, fill = 'currentColor', ...rest } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12" {...rest}>
	<path
		{fill}
		d="M6 1h5v5L8.86 3.85 4.7 8 4 7.3l4.15-4.16zM2 3h2v1H2v6h6V8h1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
	/>
</svg>
