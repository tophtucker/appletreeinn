<script>
    import Slideshow from './Slideshow.svelte';
</script>

<div class="inner">
	<div class="intro">
		<article>
			<p>The Apple Tree Inn is a small historic hotel in the Berkshires.</p>
			<p>
				It is the only hotel within walking distance to
				<a href="https://www.bso.org/tanglewood/" target="_blank">Tanglewood</a>
				and <a href="https://kripalu.org/">Kripalu</a>.
			</p>
			<p>
				It has 34 rooms split across two buildings, a porch where you can enjoy your free
				continental breakfast with beautiful views of the hills, a pool, and lots of wood-burning
				fireplaces (including a few in guest rooms).
			</p>
			<p>
				<a href="/ostrich-room">The Ostrich Room</a>, our tavern, is open for drinks
				Wednesday–Saturday, 4–10 p.m., with food from 5–9 and live music on Wednesdays and
				Saturdays.
			</p>
		</article>
		<Slideshow />
	</div>
</div>

<style>
	.intro {
		display: grid;
		grid-template-columns: 2fr 3fr;
		border-radius: 5px;
		border: 1px solid var(--brown);
		overflow: hidden;
		margin-bottom: 1em;
	}

	.intro article {
		padding: 2em;
		max-width: 640px;
		background: var(--tan);
		border-right: 1px solid var(--brown);
	}

	.intro article p:first-child {
		margin: 0;
		font-size: 2em;
	}
	.intro article p:last-child {
		margin-bottom: 0;
	}
	@media (max-width: 640px) {
		.intro {
			grid-template-columns: none;
			grid-template-rows: 1fr 2fr;
		}
		.intro .slideshow {
			order: 1;
		}
		.intro article {
			order: 2;
			padding: 1em;
			border: none;
			border-top: 1px solid var(--brown);
		}
	}
</style>