<script>
	import Asterisk from './Asterisk.svelte';
	import Avaloch from './Avaloch.svelte';
	import Door from './Door.svelte';
	import Doorknob from './Doorknob.svelte';
	import Pane from './Pane.svelte';
	import Pentathing from './Pentathing.svelte';

	let { icon, ...rest } = $props();
</script>

{#if icon === 'Asterisk'}
	<Asterisk {...rest} />
{:else if icon === 'Avaloch'}
	<Avaloch {...rest} />
{:else if icon === 'Door'}
	<Door {...rest} />
{:else if icon === 'Doorknob'}
	<Doorknob {...rest} />
{:else if icon === 'Pane'}
	<Pane {...rest} />
{:else if icon === 'Pentathing'}
	<Pentathing {...rest} />
{:else}
	<div></div>
{/if}
