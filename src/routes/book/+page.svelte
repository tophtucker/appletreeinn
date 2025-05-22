<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
</script>

<svelte:head>
	<title>Book • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/>
	<script src="//widget.siteminder.com/ibe.min.js"></script>
</svelte:head>

<Header />

<div class="inner">
	<h1>Book</h1>
	<div class="ibe" data-widget="embed"></div>
	<div
		class="ibe"
		data-region="emea"
		data-channelcode="AppleTreeInndirect"
		data-widget="embed"
	></div>
</div>

<Footer />

<style>
	h1 {
		margin-bottom: 1rem;
	}
</style>
