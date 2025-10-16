<script>
	import HR from '$lib/components/HR.svelte';
	import NewsletterSubscribe from '$lib/components/NewsletterSubscribe.svelte';
	import Embed from './Embed.svelte';
</script>

<svelte:head>
	<title>About us: Newsletter • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/>
</svelte:head>

<div class="inner">
	<h1>Newsletter</h1>

	<p>
		Claire writes every month with: the goings-on (live music schedule, new food and cocktails,
		interesting events you can come to), behind-the-scenes stories about running an inn, and a
		couple of other short recommendations to enhance your Berkshires experience.
	</p>

	<NewsletterSubscribe />

	<HR />

	<h2>Past installments</h2>

	<div style="padding: 1em 0">
		<Embed />
	</div>
</div>

<style>
	.inner {
		min-height: 50vh;
	}
</style>
