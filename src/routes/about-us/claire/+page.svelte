<script>
	import Header from '../../Header.svelte';
	import Footer from '../../Footer.svelte';
	import Subheader from '../Subheader.svelte';
</script>

<svelte:head>
	<title>About us: Claire • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/>
</svelte:head>

<Header />

<Subheader />

<div class="inner">
	<h1>Claire</h1>

	<img
		src="../heropics/claire.jpg"
		alt="Claire Collery, proprietor of the inn, sitting by the roaring fireplace in the main lobby in a maroon sweater and blue jeans, legs crossed. She is inexplicably holding a newspaper open over her head, creating a sort of roof shape."
		class="hero"
	/>

	<p>
		I am originally from just outside New York City — a town called Pelham — and though this makes
		me technically a New Yorker, I have always had a weird “thing” for Massachusetts. I grew up as a
		big Red Sox fan thanks to my Massachusetts-born dad, attended boarding school in Massachusetts,
		and spent two months every summer in Massachusetts. It was really just icing on the cake by the
		time I married my husband Toph, who has many great qualities, only one of which is being from
		Massachusetts.
	</p>

	<p>
		In those Massachusetts summers, I spent a few seasons working at the Chatham Bars Inn, a
		beautiful old hotel on Cape Cod, which is where I fell in love with hospitality. I worked as a
		concierge and just <em>loved</em> sitting at my desk in the great, wood-paneled lobby, watching the
		guests go hither and thither, all with their own lives and stories. The hotel was such a fun, grand
		production every single day and, to me, represented the intersection of so many of the best parts
		of life: food, history, architecture, intriguing backstories, teamwork, nice views….
	</p>

	<p>
		After I graduated from college, I worked a couple of jobs — in real estate development which I
		liked, and in edtech, which I did not — and had been at business school for a couple of months,
		still not totally sure what I should do with myself, when I had my “Eureka!” moment: I had loved
		my summer hotel job so much, and had liked working in real estate development, why not try to
		work in “hotel real estate development”? Felt too good to be true. Does such a thing exist?? I
		wondered.
	</p>

	<p>
		Took me a little while to figure it out, but turns out it does! So I spent the balance of
		business school taking every real estate and finance class they offered, meeting every
		hotel-related person I could, and working an internship in development finance at a luxury hotel
		company called Rosewood. I was rewarded at the end with a prize I could hardly believe — a job
		offer at a very intense and analytical hotel investment firm called Starwood Capital Group.
	</p>

	<p>
		Having never done Excel financial modeling professionally before, I spent every day of my first
		year there afraid that I was going to get fired. But by the end of three years, I couldn’t
		believe how much I had learned and how much the company seemed to like me. That appreciation is
		what gave me the confidence to act on the whisper in my head to do it, to <em
			>go out on my own</em
		>. It sure is comforting to have some understanding of how hotel financials work when you buy a
		struggling, seasonal inn in a remote area, and for that, and for many things, I am eternally
		grateful to Starwood.
	</p>

	<p>
		I started my hotel search in Cape Cod because of my familiarity with it, but discovered after
		some months that anything remotely nice on the Cape was going to be just too expensive for me.
		When brainstorming alternatives, I thought: What about the Berkshires?? Toph and I had gone to
		see the Boston Symphony Orchestra perform at Tanglewood one weekend in Summer 2023 (thanks to
		Gene’s wedding present!), and we had absolutely loved the show, the Tanglewood campus, and the
		whole area. But, we had only been there once, and only spent two days, so it did not seem like
		the most reasonable thing in the history of time to pack up our lives and go buy a hotel there.
	</p>

	<p>
		But, the Apple Tree was for sale and I went to go look at it and it was love at first sight. The
		views, the history, the arches in the living room, the graceful front porch, the moldings, the
		wood paneling in the Ostrich Room, the working fireplaces, the wallpaper, the music wafting up
		from Tanglewood, the acres of woods in the back, the fact that it had just been connected to
		town sewer, I mean, come <em>on</em>, this was <em>it</em>! I had my mom out there two days
		later to make sure I wasn’t crazy, and I wasn’t. I made an offer that day, and the rest, as they
		say, will unfold in future <a href="/about-us/newsletter">email newsletters</a>!
	</p>

	<p>
		<img
			src="../heropics/claire-sig.png"
			alt="Claire’s illegible scrawl of a signature"
			height="80"
		/>
	</p>
</div>

<Footer />

<style>
	img.hero {
		width: 500px;
		float: right;
		margin: 1em 0 1em 1em;
	}

	@media (max-width: 900px) {
		img.hero {
			display: block;
			float: none;
			width: 100%;
			margin: 1em 0;
		}
	}
</style>
