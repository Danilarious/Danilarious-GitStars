const SHELL_CACHE = "stars-shell-v2";
const DATA_CACHE = "stars-data-v2";
const SHELL_ASSETS = [
	"./",
	"./index.html",
	"./styles.css",
	"./app.js",
	"./manifest.json",
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_ASSETS)),
	);
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys
						.filter((key) => ![SHELL_CACHE, DATA_CACHE].includes(key))
						.map((key) => caches.delete(key)),
				),
			),
	);
	self.clients.claim();
});

async function staleWhileRevalidate(request, cacheName) {
	const cache = await caches.open(cacheName);
	const cached = await cache.match(request);
	const networkPromise = fetch(request)
		.then((response) => {
			if (response.ok) {
				cache.put(request, response.clone());
			}

			return response;
		})
		.catch(() => cached);

	return cached ?? networkPromise;
}

self.addEventListener("fetch", (event) => {
	if (event.request.method !== "GET") {
		return;
	}

	const url = new URL(event.request.url);
	if (url.origin !== self.location.origin) {
		return;
	}

	if (event.request.mode === "navigate") {
		event.respondWith(
			fetch(event.request).catch(() => caches.match("./index.html")),
		);
		return;
	}

	if (url.pathname.includes("/data/")) {
		event.respondWith(staleWhileRevalidate(event.request, DATA_CACHE));
		return;
	}

	event.respondWith(staleWhileRevalidate(event.request, SHELL_CACHE));
});
