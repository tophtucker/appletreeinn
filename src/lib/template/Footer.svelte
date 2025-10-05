<div class="inner">
	<hr />
</div>

<footer class="inner">
	<div class="top">
		<div>
			<a href="https://maps.app.goo.gl/vpsxJ5KnzqR1n78q8" target="_blank"
				>10 Richmond Mountain Road<br />Lenox, Massachusetts<br />01240</a
			>
		</div>
		<div>
			<div>
				<a href="tel:1.413.637.1910" target="_blank">(413) 637-1910</a><br /><a
					href="mailto:info@appletreeinnlenox.com"
					target="_blank">info@appletreeinnlenox.com</a
				><br />
				<a href="https://www.instagram.com/appletreeinn/" target="_blank">@appletreeinn</a>
			</div>
		</div>
	</div>
	<div class="bottom">
		<img src="/icons/pentathing.svg" alt="Pentathing" width="50" />
		Directly across the road from Tanglewood
	</div>
</footer>

<style>
	hr {
		margin: 4rem 0;
	}
	footer {
		margin: 4rem 0;
	}
	.top {
		display: flex;
		justify-content: space-between;
	}
	.top div:last-child {
		text-align: right;
	}
	.bottom {
		font-family: watkins;
		font-size: 14px;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		text-wrap: balance;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
		color: var(--accent);
	}
	@media (max-width: 800px) {
		.top {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
			margin-bottom: 1rem;
		}

		.top div:last-child {
			text-align: center;
		}
	}
</style>
