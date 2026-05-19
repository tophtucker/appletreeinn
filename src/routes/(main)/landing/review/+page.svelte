<script>
	const FORMSPREE_ID = 'meendeko';

	const DIMENSIONS = [
		{ key: 'staff', label: 'Staff', sub: 'How was the team?' },
		{ key: 'room', label: 'Room', sub: 'Did your room live up to expectations?' },
		{ key: 'cleanliness', label: 'Cleanliness', sub: 'Room and common spaces' },
		{ key: 'value', label: 'Value', sub: 'Did it feel worth what you paid?' },
		{ key: 'overall', label: 'Overall', sub: 'All things considered, how did we do?' }
	];

	/** @type {'form' | 'thanks'} */
	let screen = $state('form');

	/** @type {Record<string, number>} */
	let ratings = $state({ staff: 0, room: 0, cleanliness: 0, value: 0, overall: 0 });

	/** @type {Record<string, number>} */
	let hovers = $state({ staff: 0, room: 0, cleanliness: 0, value: 0, overall: 0 });

	let comments = $state('');
	let email = $state('');
	let errorMsg = $state('');
	let submitting = $state(false);

	function starFill(key, n) {
		return (hovers[key] || ratings[key]) >= n;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		errorMsg = '';

		if (!ratings.overall) {
			errorMsg = 'Please give an overall rating before submitting.';
			return;
		}

		submitting = true;

		const formData = new FormData();
		formData.append('rating_overall', String(ratings.overall));
		formData.append('rating_staff', String(ratings.staff));
		formData.append('rating_cleanliness', String(ratings.cleanliness));
		formData.append('rating_value', String(ratings.value));
		formData.append('rating_room', String(ratings.room));
		formData.append('comments', comments);
		if (email) formData.append('email', email);

		if (!FORMSPREE_ID || FORMSPREE_ID === 'PASTE_FORM_ID_HERE') {
			console.warn('Formspree ID not set. Logging payload to console only:');
			console.log(Object.fromEntries(formData));
			await new Promise((r) => setTimeout(r, 600));
			routeAfterSubmit();
			submitting = false;
			return;
		}

		try {
			const res = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: formData
			});
			if (res.ok) {
				routeAfterSubmit();
			} else {
				handleError();
			}
		} catch {
			handleError();
		} finally {
			submitting = false;
		}
	}

	function routeAfterSubmit() {
		screen = 'thanks';
		window.scrollTo({ top: 0 });
	}

	function handleError() {
		errorMsg = 'Sorry, something went wrong. Please email frontdesk@avalochinn.com.';
	}
</script>

<svelte:head>
	<title>How was your stay? • Avaloch Inn</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="inner">
	<!-- ===== SCREEN: FORM ===== -->
	{#if screen === 'form'}
		<h1>How was your stay?</h1>
		<p>
			Thank you for staying with us this season. I know how special this place is to so many of you,
			and I’m incredibly grateful you’ve decided to stay with us during this slightly unusual time
			as we renovate and rebrand.
		</p>
		<p>
			If this was your first season with us, I hope we gave you a reason to come back and you caught
			a glimpse of what the Main House will be.
		</p>
		<p>
			Tell me how it went. The good, the rough edges, the small things, all of it helps us get
			better.
		</p>

		<img src="/signatures/christian-digital.png" alt="Christian’s signature" height="56" />
		<div>Christian, hotel manager</div>

		<hr />

		<form onsubmit={handleSubmit}>
			<div class="ratings">
				{#each DIMENSIONS as dim}
					<div class="rating-row">
						<div class="rating-label">
							{dim.label}
							<span class="sub">{dim.sub}</span>
						</div>
						<div
							class="stars"
							role="radiogroup"
							tabindex="-1"
							aria-label="{dim.label} rating"
							onmouseleave={() => (hovers[dim.key] = 0)}
						>
							{#each [1, 2, 3, 4, 5] as n}
								<button
									type="button"
									class="star"
									class:active={starFill(dim.key, n)}
									aria-label="{n} star{n > 1 ? 's' : ''}"
									aria-pressed={ratings[dim.key] === n}
									onmouseenter={() => (hovers[dim.key] = n)}
									onclick={() => {
										ratings[dim.key] = n;
										errorMsg = '';
									}}>★</button
								>
							{/each}
						</div>
					</div>
				{/each}
			</div>

			<label for="comments">Comments</label>
			<textarea id="comments" name="comments" bind:value={comments}></textarea>

			<label for="email">Your email (if you want a reply)</label>
			<input
				type="email"
				id="email"
				name="email"
				placeholder="you@example.com"
				bind:value={email}
			/>

			<button type="submit" disabled={submitting}>
				{submitting ? 'Sending…' : 'Send'}
			</button>
			{#if errorMsg}
				<p class="error">{errorMsg}</p>
			{/if}
		</form>
	{/if}

	<!-- ===== SCREEN: THANKS ===== -->
	{#if screen === 'thanks'}
		<h1>Got it. Thank you.</h1>
		<p>
			I read every one of these myself. If you left your email, you’ll hear back from me within a
			day or two.
		</p>
		{#if ratings.overall === 5}
			<p>
				If you have <em>30 more seconds</em>, a Google review is the single most helpful thing you
				can do for a small inn like ours.
			</p>
			<a href="https://g.page/r/CWrY-jLZWU-bEAI/review" class="cta" target="_blank" rel="noopener">
				Leave a Google review →
			</a>
		{/if}
		<p>— Christian</p>
	{/if}
</div>

<style>
	h1 {
		text-transform: none;
	}

	/* Rating rows */
	.ratings {
		margin: 1rem 0;
	}

	.rating-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.5rem 0;
	}

	.rating-label {
		flex: 1;
		min-width: 0;
	}

	.sub {
		display: block;
		font-style: italic;
		font-size: smaller;
	}

	.stars {
		display: flex;
		flex-shrink: 0;
	}

	.star {
		background: none !important;
		border: none !important;
		font-size: 28px;
		line-height: 1;
		cursor: pointer;
		color: #ccc;
		font-family: system-ui, sans-serif;
	}

	.star.active {
		color: inherit;
	}

	/* Form fields */
	form {
		max-width: 640px;
	}

	label {
		display: block;
		margin-top: 1rem;
	}

	textarea {
		display: block;
		width: 100%;
		min-height: 110px;
		resize: vertical;
		font: inherit;
	}

	input[type='email'] {
		display: block;
	}

	button[type='submit'] {
		margin-top: 1rem;
	}

	.error {
		color: var(--red);
		text-indent: 0;
	}

	@media (max-width: 480px) {
		.rating-row {
			flex-direction: column;
			align-items: start;
			gap: 0.25rem;
		}
	}
</style>
