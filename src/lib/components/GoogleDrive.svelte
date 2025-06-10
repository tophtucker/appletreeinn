<script>
	let { id, title } = $props();
</script>

<div>
	<iframe src={`https://drive.google.com/file/d/${id}/preview`} {title}></iframe>
	<a href={`https://drive.google.com/file/d/${id}/view?usp=drivesdk`}>{title}</a>
</div>

<style>
	iframe {
		width: 100%;
		height: 500px;
		border: none;
		border: 1px solid var(--black);
		border-radius: 5px;
	}
</style>
