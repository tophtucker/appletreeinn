<script>
	import HR from '$lib/components/HR.svelte';
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

	<div id="mc_embed_shell">
		<div id="mc_embed_signup">
			<form
				action="https://appletreeinnlenox.us19.list-manage.com/subscribe/post?u=0e2051740f0e8e07588b8b1ce&amp;id=7c3030910a&amp;f_id=000b0ae7f0"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				class="validate"
				target="_self"
				novalidate=""
			>
				<div id="mc_embed_signup_scroll">
					<div class="mc-field-group">
						<label for="mce-EMAIL">Email address:</label><input
							type="email"
							name="EMAIL"
							class="required email"
							id="mce-EMAIL"
							required=""
							value=""
						/>
						<input
							type="submit"
							name="subscribe"
							id="mc-embedded-subscribe"
							class="button"
							value="Subscribe"
						/>
					</div>
					<div id="mce-responses" class="clear">
						<div class="response" id="mce-error-response" style="display: none;"></div>
						<div class="response" id="mce-success-response" style="display: none;"></div>
					</div>
					<div aria-hidden="true" style="position: absolute; left: -5000px;">
						<input
							type="text"
							name="b_0e2051740f0e8e07588b8b1ce_7c3030910a"
							tabindex="-1"
							value=""
						/>
					</div>
				</div>
			</form>
		</div>
	</div>

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
	.mc-field-group {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>
