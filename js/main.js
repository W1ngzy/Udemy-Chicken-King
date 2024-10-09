//Copied from the google maps js api implementation docs
//start
let map;

((g) => {
	var h,
		a,
		k,
		p = "The Google Maps JavaScript API",
		c = "google",
		l = "importLibrary",
		q = "__ib__",
		m = document,
		b = window;
	b = b[c] || (b[c] = {});
	var d = b.maps || (b.maps = {}),
		r = new Set(),
		e = new URLSearchParams(),
		u = () =>
			h ||
			(h = new Promise(async (f, n) => {
				await (a = m.createElement("script"));
				e.set("libraries", [...r] + "");
				for (k in g)
					e.set(
						k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
						g[k]
					);
				e.set("callback", c + ".maps." + q);
				a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
				d[q] = f;
				a.onerror = () => (h = n(Error(p + " could not load.")));
				a.nonce = m.querySelector("script[nonce]")?.nonce || "";
				m.head.append(a);
			}));
	d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
	key: "AIzaSyCZ4R0WzbSyW4Vb-hHGVD7zh6PAJEvPE8Y",
	v: "weekly",
	// Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
	// Add other bootstrap parameters as needed, using camel case.
});

async function initMap() {
	const { Map } = await google.maps.importLibrary("maps");
	const position = { lat: -29.86852021674177, lng: 31.046894185394027 };

	map = new Map(document.getElementById("map"), {
		center: position,
		zoom: 17,
		scrollwheel: false,
	});

	const marker = new google.maps.Marker({
		position: position,
		map: map,
		title: "Chicken King",
	});
}
//end

initMap();
