<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Intro from './Intro.svelte';
	import Events from './Events.svelte';
</script>

<svelte:head>
	<title>Apple Tree Inn • Lenox, MA</title>
	<link rel="stylesheet" href="styles.css" />
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<Header />

<Intro />

<Events />

<Footer />
