<script>
	import HR from '$lib/components/HR.svelte';
	import NewsletterSubscribe from '$lib/components/NewsletterSubscribe.svelte';
	import { formatMonthYear } from '$lib/index.js';
	let { data } = $props();
	const { newsletters } = data;
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

	{#if newsletters.length}
		<table>
			<tbody>
				{#each newsletters as n}
					<tr><td>{formatMonthYear(n.date)}</td><td><a href={n.url}>{n.title}</a></td></tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<p class="notice">
			⚠️ Can’t load newsletters. Try again later, or <a href="mailto:info@appletreeinnlenox.com"
				>email us</a
			> if this continues.
		</p>
	{/if}
</div>

<style>
	table {
		border-collapse: collapse;
	}
	table td {
		border: 1px solid var(--gray);
		padding: 0.25rem 0.5rem;
		vertical-align: top;
	}
	table td:first-child {
		text-align: right;
	}

	.inner {
		min-height: 50vh;
	}

	.notice {
		border: 2px solid var(--gold);
		padding: 6px;
		transform: rotate(-3deg);
	}
</style>
