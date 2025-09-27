<script>
	let { ostrichRoom } = $props();
</script>

<div class="wrapper">
	<div class="filled"></div>
	<div class="left-right"></div>
	<div class="filled"></div>

	<div class="top-bottom"></div>
	<div class="content">
		<h3>The<br />Ostrich<br />Room</h3>
		<div>{ostrichRoom.dayRange}</div>
		<a class="cta" href="/dining/ostrich-room">More info</a>
	</div>
	<div class="top-bottom"></div>

	<div class="filled"></div>
	<div class="left-right"></div>
	<div class="filled"></div>
</div>

<style>
	h3 {
		margin: 0;
	}

	a.cta {
		align-self: center;
	}

	.wrapper {
		border: 1px solid black;
		display: inline-grid;
		grid-template-columns: 4px 1fr 4px;
		grid-template-rows: 4px 1fr 4px;
	}

	.wrapper .content {
		border: 1px solid black;
		padding: 1rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.wrapper .filled {
		background: black;
	}

	.wrapper .top-bottom {
		border-top: 1px solid black;
		border-bottom: 1px solid black;
	}

	.wrapper .left-right {
		border-left: 1px solid black;
		border-right: 1px solid black;
	}
</style>
