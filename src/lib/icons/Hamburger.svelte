<script>
	let { size = 12, fill = 'currentColor', ...rest } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 16 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...rest}
>
	<path d="M 0 1 H 16 M 0 8 H 16 M 0 15 H 16" stroke={fill} stroke-width="2" />
</svg>
