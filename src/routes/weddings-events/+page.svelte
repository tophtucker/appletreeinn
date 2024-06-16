<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
  import Slideshow from '../Slideshow.svelte';

  const pics = [
    {src: './heropics/lawn.jpg', title: 'The main lawn'}
  ]
</script>

<svelte:head>
	<title>Weddings & Events • Apple Tree Inn • Lenox, MA</title>
	<meta name="description" content="TODO" />
</svelte:head>

<Header />

<div class="inner">
  <div class="grid-or-flex">
    <div>
      <h1>Weddings & events</h1>
      <p>We’d love to host your wedding, rehearsal dinner, welcome party, afterparty, Sunday brunch, room block, or some combination of those. We also host a variety of other events.</p>
      <p>We have 34 rooms, a broad flat lawn with a beautiful view, a dining room with panoramic windows, a tavern, the lobby lounge, cozy fireplaces, and a large-scale commercial kitchen.</p>
      <p>Claire just took over and, as of June 2024, is racing to figure out our plan for next season. Fill out the form below and we’ll be in touch as soon as we know more about pricing and availability.</p>
    </div>
    <Slideshow {pics} />
  </div>

  <hr/>
	
  <iframe title="Event inquiry form" src="https://app.eventtemple.com/lead_intakes/ecdbd71af44e5dcb8407c0e53f184e18/2586/new"></iframe>
</div>

<Footer />

<style>
  iframe {
    width: 100%;
    margin: 2em 0;
    border: none;
    height: 700px;
    border-radius: 5px;
  }
</style>