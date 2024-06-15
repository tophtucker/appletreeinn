<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
</script>

<svelte:head>
	<title>The Ostrich Room • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="The Ostrich Room is open for drinks and food Wed.–Sat., 4–10 pm, with live music on Wed. and Sat., at the Apple Tree Inn"
	/>
</svelte:head>

<Header />

<div class="inner">
	<h1>The Ostrich Room</h1>
	<img src="heropics/ostrich.jpg" alt="The Ostrich Room" style="max-width: 100%;" />
	<p>Drinks Wednesday – Saturday, 4 – 10 p.m.</p>
	<p>Food 5 – 9 p.m.</p>
	<p>Live music Wednesdays and Saturdays</p>
</div>

<Footer />
