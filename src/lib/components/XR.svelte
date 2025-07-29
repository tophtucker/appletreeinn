<script>
	import VR from '$lib/components/VR.svelte';
	import HR from '$lib/components/HR.svelte';
	let props = $props();
</script>

<div class="vr-wrapper hide-mobile">
	<VR {...props} />
</div>
<div class="hr-wrapper show-mobile">
	<HR {...props} class={`margin-0 ${props.class}`} />
</div>

<style>
	.vr-wrapper {
		height: 100%;
	}
</style>
