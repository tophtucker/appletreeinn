<footer>
	<div>
		10 Richmond Mountain Road<br />
		Lenox, Massachusetts<br />
		01240<br />
		<br />
		<a href="tel:1.413.637.1910" target="_blank">(413) 637-1910</a><br />
		<a href="mailto:info@appletreeinnlenox.com" target="_blank">info@appletreeinnlenox.com</a><br />
		<a href="https://instagram.com/appletreeinn">@appletreeinn</a>
	</div>
	<div>
		Check-in: 4 p.m.<br />
		Check-out: 11 a.m.<br />
		<a href="/terms-of-service">Terms of service</a>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--brown);
		background: var(--tan);
		padding: 4em var(--gutter) 6em;
		font-size: smaller;
		display: flex;
		justify-content: space-between;
		gap: 1em;
	}

	footer div:nth-child(2) {
		text-align: right;
	}

	@media (max-width: 800px) {
		footer {
			flex-direction: column;
		}
		footer div:nth-child(2) {
			text-align: left;
		}
	}
</style>
