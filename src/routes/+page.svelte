<script>
	import Circle from './Circle.svelte';
</script>

<svelte:head>
	<title>Avaloch • A Country Inn • Lenox, MA</title>
	<link rel="stylesheet" href="styles.css" />
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<!-- <Frame></Frame> -->

<div class="frame">
	<Circle />
	<div class="top bottom"></div>
	<Circle />

	<div class="left right bottom"></div>
	<div class="bottom"></div>
	<div class="left right bottom"></div>

	<div class="left right"></div>
	<div class="content"><img src="./avaloch/avaloch.svg" alt="Avaloch" width="300" /></div>
	<div class="left right"></div>

	<div class="left right top"></div>
	<div class="top"></div>
	<div class="left right top"></div>

	<Circle />
	<div class="top bottom"></div>
	<Circle />
</div>

<style>
	.top {
		border-top: 1px solid black;
	}
	.bottom {
		border-bottom: 1px solid black;
	}
	.left {
		border-left: 1px solid black;
	}
	.right {
		border-right: 1px solid black;
	}
	.frame {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 20px 1fr 20px;
		grid-template-rows: 20px 3px 1fr 3px 20px;
	}
	.content {
		padding: 1rem;
		text-align: center;
	}
</style>
