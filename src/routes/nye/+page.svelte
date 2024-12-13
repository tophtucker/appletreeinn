<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
</script>

<svelte:head>
	<title>The Ostrich Room • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="The Ostrich Room is open for drinks and food (and often live music) Wed.–Sat. at the Apple Tree Inn"
	/>
</svelte:head>

<Header />

<div class="poster">
	<div class="inner">
		<img
			src="/ostrich-room/nye2024-v2.png"
			alt="The Ostrich Room of Apple Tree Inn presents New Year’s Countdown — join us on December 31st at 6pm for live performances from Andy Wrba and Rounders Revival"
		/>
		<a href="https://ostrichroomnewyearseve.eventbrite.com/">Tickets</a>
	</div>
</div>

<Footer />

<style>
	.poster {
		background: #23242a;
		position: relative;
		margin-top: -1.2em;
		padding: 2em 0 4em 0;
	}
	.poster .inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}
	.poster img {
		width: 600px;
	}
	.poster a {
		color: #d0b061;
		font-family: sans-serif;
		border: 1.5px solid #d0b061;
		border-radius: 4px;
		padding: 0.5em 1em;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 1.5em;
		transition: background 0.1s;
	}
	.poster a:hover {
		background: rgba(208 176 97 / 0.2);
	}
	@media (max-width: 900px) {
		.poster {
			margin-top: -4.5em;
		}
		.poster a {
			font-size: 1em;
		}
	}
</style>
