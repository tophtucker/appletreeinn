<script>
	import { page } from '$app/stores';
	const pages = [
		{ pathname: '/about-us', title: 'Staff' },
		{ pathname: '/about-us/claire', title: 'Claire' },
		{ pathname: '/about-us/scrapbook', title: 'Scrapbook' },
		{ pathname: '/about-us/newsletter', title: 'Newsletter' }
	];
</script>

<div class="subheader">
	{#each pages as { pathname, title }}
		<a href={pathname} class={$page.url.pathname === pathname ? 'current' : ''}>{title}</a>
	{/each}
</div>

<style>
	.subheader {
		display: flex;
		gap: 1rem;
		margin-top: -1.3rem;
		padding: 1rem;
		border-bottom: 1px solid var(--brown);
		justify-content: center;
	}

	@media (max-width: 900px) {
		.subheader {
			margin-top: 0;
		}
	}

	a {
		text-decoration: none;
	}

	a.current {
		font-weight: bold;
	}
</style>
