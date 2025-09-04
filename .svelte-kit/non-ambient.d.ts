
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
		RouteId(): "/" | "/about-us" | "/about-us/[...catchall]" | "/about" | "/about/about-us" | "/about/claire" | "/about/history" | "/about/jobs" | "/about/newsletter" | "/about/policies" | "/about/press" | "/about/scrapbook" | "/activities" | "/activities/amenities" | "/activities/berkshires" | "/activities/tanglewood" | "/baladi" | "/career" | "/dining_ati" | "/dining_ati/[...catchall]" | "/dining" | "/dining/breakfast" | "/dining/ostrich-room" | "/explore" | "/landing" | "/landing/kripalu" | "/landing/review" | "/music" | "/offers" | "/ostrich-room" | "/overview" | "/overview/faq" | "/overview/gallery" | "/overview/map" | "/restaurants" | "/rooms" | "/rooms/lodge" | "/rooms/main-house" | "/termsandcondition" | "/weddings-events";
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
		Pathname(): "/" | "/about-us" | `/about-us/${string}` & {} | "/about" | "/about/about-us" | "/about/claire" | "/about/history" | "/about/jobs" | "/about/newsletter" | "/about/policies" | "/about/press" | "/about/scrapbook" | "/activities" | "/activities/amenities" | "/activities/berkshires" | "/activities/tanglewood" | "/baladi" | "/career" | "/dining_ati" | `/dining_ati/${string}` & {} | "/dining" | "/dining/breakfast" | "/dining/ostrich-room" | "/explore" | "/landing" | "/landing/kripalu" | "/landing/review" | "/music" | "/offers" | "/ostrich-room" | "/overview" | "/overview/faq" | "/overview/gallery" | "/overview/map" | "/restaurants" | "/rooms" | "/rooms/lodge" | "/rooms/main-house" | "/termsandcondition" | "/weddings-events";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/avaloch/.DS_Store" | "/avaloch/ati.svg" | "/avaloch/avaloch.svg" | "/avaloch/favicon.png" | "/avaloch/fonts/BrunelText-Italic-Web.css" | "/avaloch/fonts/BrunelText-Italic-Web.woff2" | "/avaloch/fonts/BrunelText-Roman-Web.css" | "/avaloch/fonts/BrunelText-Roman-Web.woff2" | "/avaloch/fonts/BrunelText-Semibold-Web.css" | "/avaloch/fonts/BrunelText-Semibold-Web.woff2" | "/avaloch/fonts/BrunelText-SemiboldItalic-Web.css" | "/avaloch/fonts/BrunelText-SemiboldItalic-Web.woff2" | "/avaloch/fonts/TAYBartender.otf" | "/avaloch/fonts/TAYWatkins.otf" | "/avaloch/fonts/fonts.css" | "/avaloch/history/9763427296_bf92430a8c_o.jpg" | "/avaloch/history/avaloch.jpg" | "/avaloch/icons/door.svg" | "/avaloch/icons/doorknob.svg" | "/avaloch/icons/pane.svg" | "/avaloch/icons/pentathing.svg" | "/avaloch/img/.DS_Store" | "/avaloch/img/adirondack-cheers.jpg" | "/avaloch/img/adirondack-view.jpg" | "/avaloch/img/bar.jpg" | "/avaloch/img/breakfast-bread.jpg" | "/avaloch/img/breakfast-eggs.jpg" | "/avaloch/img/breakfast-fruit.jpg" | "/avaloch/img/breakfast-granola.jpg" | "/avaloch/img/breakfast-jam.jpg" | "/avaloch/img/breakfast-juice.jpg" | "/avaloch/img/breakfast-muffins.jpg" | "/avaloch/img/breakfast-yogurt.jpg" | "/avaloch/img/check-in.jpg" | "/avaloch/img/cheers.jpg" | "/avaloch/img/chess.jpg" | "/avaloch/img/claire-stride.jpg" | "/avaloch/img/coffee-station.jpg" | "/avaloch/img/continental-breakfast.jpg" | "/avaloch/img/dining.jpg" | "/avaloch/img/door.jpg" | "/avaloch/img/firepit.jpg" | "/avaloch/img/firepit2.jpg" | "/avaloch/img/fireplace.jpg" | "/avaloch/img/flowers.jpg" | "/avaloch/img/gallery.png" | "/avaloch/img/hero-drone.jpg" | "/avaloch/img/inglenook.jpg" | "/avaloch/img/lawn-snow.jpg" | "/avaloch/img/lower-parking.jpg" | "/avaloch/img/main-house.jpg" | "/avaloch/img/map-lower-lot.jpg" | "/avaloch/img/map-upper-lot.jpg" | "/avaloch/img/music.jpg" | "/avaloch/img/music2.jpg" | "/avaloch/img/ostrich-dining.jpg" | "/avaloch/img/ostrich-exterior.jpg" | "/avaloch/img/ostrich-room-packed.jpg" | "/avaloch/img/piano.jpg" | "/avaloch/img/pool-2025.jpg" | "/avaloch/img/pool-view.jpg" | "/avaloch/img/porch-breakfast.jpg" | "/avaloch/img/porch.jpg" | "/avaloch/img/proposal.jpg" | "/avaloch/img/rigatoni-outside.jpg" | "/avaloch/img/round-room.jpg" | "/avaloch/img/sledding.jpg" | "/avaloch/img/tanglewood-walk.jpg" | "/avaloch/img/tanglewood.jpg" | "/avaloch/img/wanda.jpg" | "/avaloch/img/winden-hill.jpg" | "/avaloch/map/.DS_Store" | "/avaloch/map/map.svg" | "/avaloch/map/tanglewood-map.jpg" | "/avaloch/styles.css" | "/favicon.png" | "/heropics/.DS_Store" | "/heropics/1 copy.jpg" | "/heropics/1.jpg" | "/heropics/2.jpg" | "/heropics/baladi1.jpg" | "/heropics/baladi2.jpg" | "/heropics/baladi3.jpg" | "/heropics/baladi4.jpg" | "/heropics/bowling.jpg" | "/heropics/christian.jpg" | "/heropics/claire-sig.png" | "/heropics/claire-toph.jpg" | "/heropics/claire-toph2.jpg" | "/heropics/claire.jpg" | "/heropics/claire2.jpg" | "/heropics/claire3.jpg" | "/heropics/driveway.jpg" | "/heropics/drone-repainted.jpg" | "/heropics/exterior.jpg" | "/heropics/fire-pit.jpg" | "/heropics/lawn.jpg" | "/heropics/main-house.jpg" | "/heropics/max.jpg" | "/heropics/ostrich.jpg" | "/heropics/ostrich2.jpg" | "/heropics/ostrich3.jpg" | "/heropics/ostrich4.jpg" | "/heropics/pool1.jpg" | "/heropics/pool2.jpg" | "/heropics/staff1.jpg" | "/heropics/staff2.jpg" | "/heropics/staff3.jpg" | "/heropics/summer-annex.jpg" | "/heropics/verdant.jpg" | "/heropics/view1.jpg" | "/heropics/view2.jpg" | "/heropics/view3.jpg" | "/heropics/view4.jpg" | "/history/image1.png" | "/history/image2.png" | "/history/image3.jpg" | "/history/image4.png" | "/history/image5.jpg" | "/history/image6.png" | "/img/.DS_Store" | "/img/IMG_2866.HEIC" | "/img/abby.jpg" | "/img/activities.jpg" | "/img/adi.jpg" | "/img/adi.png" | "/img/baladi-icon.jpg" | "/img/claire.jpg" | "/img/cocktail.jpg" | "/img/giovanna.png" | "/img/hagai.png" | "/img/history.png" | "/img/luke.jpg" | "/img/magdalen.jpg" | "/img/max.jpg" | "/img/menu-baladi.jpg" | "/img/menu-drinks.png" | "/img/menu-food.png" | "/img/nic.png" | "/img/ostrich-egg.jpg" | "/img/ostrich-room.png" | "/img/peter.jpg" | "/img/peter.png" | "/img/rooms.jpg" | "/img/sean.jpg" | "/img/weddings.jpg" | "/logo-straight.png" | "/logo.svg" | "/ostrich-room/.DS_Store" | "/ostrich-room/IMG_0129.jpg" | "/ostrich-room/IMG_6929.jpg" | "/ostrich-room/IMG_6961.jpg" | "/ostrich-room/IMG_8470.jpg" | "/ostrich-room/IMG_8521.jpg" | "/ostrich-room/P8243018.JPG" | "/ostrich-room/cauliflower.jpg" | "/ostrich-room/cocktail.jpg" | "/ostrich-room/empty.jpg" | "/ostrich-room/fireplace.jpg" | "/ostrich-room/nye2024-v2.png" | "/ostrich-room/nye2024.png" | "/ostrich-room/packed.jpg" | "/press/bmag1.png" | "/press/bmag2.png" | "/press/bmag3.png" | "/roompics/.DS_Store" | "/roompics/lodge/.DS_Store" | "/roompics/lodge/2-double/.DS_Store" | "/roompics/lodge/2-double/1.jpg" | "/roompics/lodge/2-double/2.jpg" | "/roompics/lodge/2-double/_XCS2794.jpg" | "/roompics/lodge/2-double-scenic-view/1.jpg" | "/roompics/lodge/2-double-scenic-view/2.jpg" | "/roompics/lodge/2-double-scenic-view/_XCS2782.jpg" | "/roompics/lodge/queen/1.jpg" | "/roompics/lodge/queen/2.jpg" | "/roompics/lodge/queen/_XCS2800.jpg" | "/roompics/lodge/queen-scenic-view/1.jpg" | "/roompics/lodge/queen-scenic-view/2.jpg" | "/roompics/lodge/queen-scenic-view/3.jpg" | "/roompics/lodge/queen-scenic-view/_XCS2772.jpg" | "/roompics/main-house/.DS_Store" | "/roompics/main-house/1/.DS_Store" | "/roompics/main-house/1/_XCS2684.jpg" | "/roompics/main-house/10/.DS_Store" | "/roompics/main-house/10/_XCS2642.jpg" | "/roompics/main-house/11-12/_XCS2643.jpg" | "/roompics/main-house/11-12/_XCS2647.jpg" | "/roompics/main-house/11-12/_XCS2649.jpg" | "/roompics/main-house/11-12/_XCS2650.jpg" | "/roompics/main-house/14/_XCS2679.jpg" | "/roompics/main-house/14/_XCS2680.jpg" | "/roompics/main-house/15/_XCS2683.jpg" | "/roompics/main-house/2/_XCS2621.jpg" | "/roompics/main-house/2/_XCS2623.jpg" | "/roompics/main-house/2/_XCS2624.jpg" | "/roompics/main-house/3/_XCS2685.jpg" | "/roompics/main-house/3/_XCS2686.jpg" | "/roompics/main-house/4/_XCS2628.jpg" | "/roompics/main-house/4/_XCS2629.jpg" | "/roompics/main-house/4/_XCS2631.jpg" | "/roompics/main-house/5-or-6/.DS_Store" | "/roompics/main-house/5-or-6/5/_XCS2662.jpg" | "/roompics/main-house/5-or-6/6/_XCS2678.jpg" | "/roompics/main-house/7/.DS_Store" | "/roompics/main-house/7/_XCS2637.jpg" | "/roompics/main-house/8/_XCS2666.jpg" | "/roompics/main-house/8/_XCS2668.jpg" | "/roompics/main-house/8/_XCS2669.jpg" | "/roompics/main-house/8/_XCS2672.jpg" | "/roompics/main-house/9/_XCS2640.jpg" | "/roompics/main-house/9/_XCS2641.jpg" | "/signatures/abby.png" | "/signatures/christian-digital.png" | "/signatures/sean.png" | "/styles.css" | "/weddings/Robin&Nat_B&G-206.jpg" | "/weddings/Robin&Nat_B&G-53.jpg" | "/weddings/Robin&Nat_B&G-93.jpg" | "/weddings/Robin&Nat_Prep-125.jpg" | "/weddings/Robin&Nat_Prep-82.jpg" | "/weddings/Robin&Nat_Reception-1.jpg" | "/weddings/Robin&Nat_Reception-414.jpg";
	}
}