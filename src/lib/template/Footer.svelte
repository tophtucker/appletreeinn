<div class="inner">
	<hr />
</div>

<footer class="inner">
	<div class="top">
		<div>10 Richmond Mountain Road<br />Lenox, Massachusetts<br />01240</div>
		<div>
			<div>
				(413) 637-1910<br />info@avalochinn.com<br />
				@avaloch.inn
			</div>
		</div>
	</div>
	<div class="bottom">
		<img src="/avaloch/icons/pentathing.svg" alt="Pentathing" width="50" />
		Directly across the road from Tanglewood
	</div>
</footer>

<style>
	hr {
		margin: 4rem 0;
	}
	footer {
		font-family: watkins;
		font-size: 14px;
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
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
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
