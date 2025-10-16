
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about-us" | "/about-us/[...catchall]" | "/about" | "/about/about-us" | "/about/claire" | "/about/history" | "/about/jobs" | "/about/newsletter" | "/about/policies" | "/about/press" | "/about/renovations" | "/about/scrapbook" | "/activities" | "/activities/amenities" | "/activities/berkshires" | "/activities/tanglewood" | "/baladi" | "/career" | "/dining_ati" | "/dining_ati/[...catchall]" | "/dining" | "/dining/breakfast" | "/dining/ostrich-room" | "/explore" | "/landing" | "/landing/kripalu" | "/landing/review" | "/music" | "/offers" | "/ostrich-room" | "/overview" | "/overview/faq" | "/overview/gallery" | "/overview/map" | "/restaurants" | "/rooms" | "/rooms/lodge" | "/rooms/main-house" | "/termsandcondition" | "/weddings-events";
		RouteParams(): {
			"/about-us/[...catchall]": { catchall: string };
			"/dining_ati/[...catchall]": { catchall: string }
		};
		LayoutParams(): {
			"/": { catchall?: string };
			"/about-us": { catchall?: string };
			"/about-us/[...catchall]": { catchall: string };
			"/about": { catchall?: string };
			"/about/about-us": Record<string, never>;
			"/about/claire": Record<string, never>;
			"/about/history": Record<string, never>;
			"/about/jobs": Record<string, never>;
			"/about/newsletter": Record<string, never>;
			"/about/policies": Record<string, never>;
			"/about/press": Record<string, never>;
			"/about/renovations": Record<string, never>;
			"/about/scrapbook": Record<string, never>;
			"/activities": Record<string, never>;
			"/activities/amenities": Record<string, never>;
			"/activities/berkshires": Record<string, never>;
			"/activities/tanglewood": Record<string, never>;
			"/baladi": Record<string, never>;
			"/career": Record<string, never>;
			"/dining_ati": { catchall?: string };
			"/dining_ati/[...catchall]": { catchall: string };
			"/dining": { catchall?: string };
			"/dining/breakfast": Record<string, never>;
			"/dining/ostrich-room": Record<string, never>;
			"/explore": Record<string, never>;
			"/landing": Record<string, never>;
			"/landing/kripalu": Record<string, never>;
			"/landing/review": Record<string, never>;
			"/music": Record<string, never>;
			"/offers": Record<string, never>;
			"/ostrich-room": Record<string, never>;
			"/overview": Record<string, never>;
			"/overview/faq": Record<string, never>;
			"/overview/gallery": Record<string, never>;
			"/overview/map": Record<string, never>;
			"/restaurants": Record<string, never>;
			"/rooms": Record<string, never>;
			"/rooms/lodge": Record<string, never>;
			"/rooms/main-house": Record<string, never>;
			"/termsandcondition": Record<string, never>;
			"/weddings-events": Record<string, never>
		};
		Pathname(): "/" | "/about-us" | `/about-us/${string}` & {} | "/about" | "/about/about-us" | "/about/claire" | "/about/history" | "/about/jobs" | "/about/newsletter" | "/about/policies" | "/about/press" | "/about/renovations" | "/about/scrapbook" | "/activities" | "/activities/amenities" | "/activities/berkshires" | "/activities/tanglewood" | "/baladi" | "/career" | "/dining_ati" | `/dining_ati/${string}` & {} | "/dining" | "/dining/breakfast" | "/dining/ostrich-room" | "/explore" | "/landing" | "/landing/kripalu" | "/landing/review" | "/music" | "/offers" | "/ostrich-room" | "/overview" | "/overview/faq" | "/overview/gallery" | "/overview/map" | "/restaurants" | "/rooms" | "/rooms/lodge" | "/rooms/main-house" | "/termsandcondition" | "/weddings-events";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/ati.svg" | "/avaloch.svg" | "/favicon.png" | "/fonts/BrunelText-Italic-Web.css" | "/fonts/BrunelText-Italic-Web.woff2" | "/fonts/BrunelText-Roman-Web.css" | "/fonts/BrunelText-Roman-Web.woff2" | "/fonts/BrunelText-Semibold-Web.css" | "/fonts/BrunelText-Semibold-Web.woff2" | "/fonts/BrunelText-SemiboldItalic-Web.css" | "/fonts/BrunelText-SemiboldItalic-Web.woff2" | "/fonts/TAYBartender.otf" | "/fonts/TAYWatkins.otf" | "/fonts/fonts.css" | "/heropics/.DS_Store" | "/heropics/1 copy.jpg" | "/heropics/1.jpg" | "/heropics/2.jpg" | "/heropics/baladi1.jpg" | "/heropics/baladi2.jpg" | "/heropics/baladi3.jpg" | "/heropics/baladi4.jpg" | "/heropics/bowling.jpg" | "/heropics/christian.jpg" | "/heropics/claire-toph.jpg" | "/heropics/claire-toph2.jpg" | "/heropics/claire.jpg" | "/heropics/claire2.jpg" | "/heropics/claire3.jpg" | "/heropics/driveway.jpg" | "/heropics/drone-repainted.jpg" | "/heropics/exterior.jpg" | "/heropics/fire-pit.jpg" | "/heropics/lawn.jpg" | "/heropics/main-house.jpg" | "/heropics/max.jpg" | "/heropics/ostrich2.jpg" | "/heropics/ostrich3.jpg" | "/heropics/ostrich4.jpg" | "/heropics/pool1.jpg" | "/heropics/pool2.jpg" | "/heropics/staff1.jpg" | "/heropics/staff2.jpg" | "/heropics/staff3.jpg" | "/heropics/summer-annex.jpg" | "/heropics/verdant.jpg" | "/heropics/view1.jpg" | "/heropics/view2.jpg" | "/heropics/view3.jpg" | "/heropics/view4.jpg" | "/history/9763427296_bf92430a8c_o.jpg" | "/history/avaloch.jpg" | "/history/carriage-house.png" | "/history/image1.png" | "/history/image2.png" | "/history/image3.jpg" | "/history/image4.png" | "/history/image5.jpg" | "/history/image6.png" | "/icons/door.svg" | "/icons/doorknob.svg" | "/icons/pane.svg" | "/icons/pentathing.svg" | "/img/.DS_Store" | "/img/abby.jpg" | "/img/adirondack-cheers.jpg" | "/img/adirondack-view.jpg" | "/img/bar.jpg" | "/img/breakfast-bread.jpg" | "/img/breakfast-eggs.jpg" | "/img/breakfast-fruit.jpg" | "/img/breakfast-granola.jpg" | "/img/breakfast-jam.jpg" | "/img/breakfast-juice.jpg" | "/img/breakfast-muffins.jpg" | "/img/breakfast-yogurt.jpg" | "/img/check-in.jpg" | "/img/cheers.jpg" | "/img/chess.jpg" | "/img/claire-stride.jpg" | "/img/claire.jpg" | "/img/cocktail.jpg" | "/img/coffee-station.jpg" | "/img/continental-breakfast.jpg" | "/img/dining.jpg" | "/img/distant.jpg" | "/img/door.jpg" | "/img/drink-1.jpg" | "/img/drink-2.jpg" | "/img/drink-plum-sour.jpg" | "/img/drink-son-of-fire.jpg" | "/img/drink-worm-moon-martini.jpg" | "/img/drinks.jpg" | "/img/firepit.jpg" | "/img/firepit2.jpg" | "/img/fireplace.jpg" | "/img/flowers.jpg" | "/img/food-burger.jpg" | "/img/food-chicken.jpg" | "/img/food-creme-brulee.jpg" | "/img/food-deviled-eggs.jpg" | "/img/food-focaccia.jpg" | "/img/food-spicy-rigatoni.jpg" | "/img/hero-drone.jpg" | "/img/inglenook.jpg" | "/img/lawn-snow.jpg" | "/img/lower-parking.jpg" | "/img/luke.jpg" | "/img/magdalen.jpg" | "/img/main-house.jpg" | "/img/map-lower-lot.jpg" | "/img/map-upper-lot.jpg" | "/img/max.jpg" | "/img/music.jpg" | "/img/music2.jpg" | "/img/ostrich-dining.jpg" | "/img/ostrich-exterior.jpg" | "/img/ostrich-room-packed.jpg" | "/img/peter.jpg" | "/img/piano.jpg" | "/img/pool-2025.jpg" | "/img/pool-view.jpg" | "/img/porch-breakfast.jpg" | "/img/porch.jpg" | "/img/proposal.jpg" | "/img/renovations.jpg" | "/img/rigatoni-outside.jpg" | "/img/rooms.jpg" | "/img/round-room.jpg" | "/img/sean.jpg" | "/img/sledding.jpg" | "/img/staff-armando.jpg" | "/img/staff-demetrio.jpg" | "/img/staff-memo.jpg" | "/img/tanglewood-walk.jpg" | "/img/tanglewood.jpg" | "/img/wanda.jpg" | "/img/winden-hill.jpg" | "/logo-straight.png" | "/map/.DS_Store" | "/map/map.svg" | "/map/tanglewood-map.jpg" | "/ostrich-room/.DS_Store" | "/ostrich-room/IMG_0129.jpg" | "/ostrich-room/IMG_6929.jpg" | "/ostrich-room/IMG_6961.jpg" | "/ostrich-room/IMG_8470.jpg" | "/ostrich-room/IMG_8521.jpg" | "/ostrich-room/P8243018.JPG" | "/ostrich-room/cauliflower.jpg" | "/ostrich-room/cocktail.jpg" | "/ostrich-room/empty.jpg" | "/ostrich-room/fireplace.jpg" | "/ostrich-room/nye2024-v2.png" | "/ostrich-room/nye2024.png" | "/ostrich-room/packed.jpg" | "/press/bmag1.png" | "/press/bmag2.png" | "/press/bmag3.png" | "/roompics/.DS_Store" | "/roompics/lodge/.DS_Store" | "/roompics/lodge/2-double/.DS_Store" | "/roompics/lodge/2-double/1.jpg" | "/roompics/lodge/2-double/2.jpg" | "/roompics/lodge/2-double/_XCS2794.jpg" | "/roompics/lodge/2-double-scenic-view/1.jpg" | "/roompics/lodge/2-double-scenic-view/2.jpg" | "/roompics/lodge/2-double-scenic-view/_XCS2782.jpg" | "/roompics/lodge/queen/1.jpg" | "/roompics/lodge/queen/2.jpg" | "/roompics/lodge/queen/_XCS2800.jpg" | "/roompics/lodge/queen-scenic-view/1.jpg" | "/roompics/lodge/queen-scenic-view/2.jpg" | "/roompics/lodge/queen-scenic-view/3.jpg" | "/roompics/lodge/queen-scenic-view/_XCS2772.jpg" | "/roompics/main-house/.DS_Store" | "/roompics/main-house/1/.DS_Store" | "/roompics/main-house/1/_XCS2684.jpg" | "/roompics/main-house/10/.DS_Store" | "/roompics/main-house/10/_XCS2642.jpg" | "/roompics/main-house/11-12/_XCS2643.jpg" | "/roompics/main-house/11-12/_XCS2647.jpg" | "/roompics/main-house/11-12/_XCS2649.jpg" | "/roompics/main-house/11-12/_XCS2650.jpg" | "/roompics/main-house/14/_XCS2679.jpg" | "/roompics/main-house/14/_XCS2680.jpg" | "/roompics/main-house/15/_XCS2683.jpg" | "/roompics/main-house/2/_XCS2621.jpg" | "/roompics/main-house/2/_XCS2623.jpg" | "/roompics/main-house/2/_XCS2624.jpg" | "/roompics/main-house/3/_XCS2685.jpg" | "/roompics/main-house/3/_XCS2686.jpg" | "/roompics/main-house/4/_XCS2628.jpg" | "/roompics/main-house/4/_XCS2629.jpg" | "/roompics/main-house/4/_XCS2631.jpg" | "/roompics/main-house/5-or-6/.DS_Store" | "/roompics/main-house/5-or-6/5/_XCS2662.jpg" | "/roompics/main-house/5-or-6/6/_XCS2678.jpg" | "/roompics/main-house/7/.DS_Store" | "/roompics/main-house/7/_XCS2637.jpg" | "/roompics/main-house/8/_XCS2666.jpg" | "/roompics/main-house/8/_XCS2668.jpg" | "/roompics/main-house/8/_XCS2669.jpg" | "/roompics/main-house/8/_XCS2672.jpg" | "/roompics/main-house/9/_XCS2640.jpg" | "/roompics/main-house/9/_XCS2641.jpg" | "/signatures/abby.png" | "/signatures/christian-digital.png" | "/signatures/claire.png" | "/signatures/sean.png" | "/styles.css" | "/weddings/Robin&Nat_B&G-206.jpg" | "/weddings/Robin&Nat_B&G-53.jpg" | "/weddings/Robin&Nat_B&G-93.jpg" | "/weddings/Robin&Nat_Prep-125.jpg" | "/weddings/Robin&Nat_Prep-82.jpg" | "/weddings/Robin&Nat_Reception-1.jpg" | "/weddings/Robin&Nat_Reception-414.jpg";
	}
}