<script>
    import Analytics from "$lib/componets/Analytics.svelte";
	import "../app.css";
</script>
  
<Analytics />

<div class="flex flex-col ">
	<header class="font-body bg-black-lighter sticky top-0">
		<nav class="w-full  text-cornsilk">
			<h1 class="font-bold text-2xl text-center py-3">BEERS & BOPS</h1>
		</nav>
	</header>
	<main class="font-body bg-primay-content overflow-y-auto py-4">
		<slot />
	</main>
	<footer id="footer" class="h-12 bg-black-lighter py-2 flex flex-col text-cornsilk font-body">
		<div id="copyright" class="text-center space-y-2 text-xs">
			<div class="text-center">
				<p>
					This is an open source project. <a class="underline" target="_blank" href="https://www.github.com/nicelion/hymns">You can contribute here.</a>
				</p>
			</div>
		</div>
	</footer>
</div>

<!-- <header class="font-body h-24">
    <nav class="w-full bg-black-lighter text-cornsilk">
        <h1 class="font-bold text-2xl text-center py-3">HYMNS & HOPS</h1>
    </nav>
</header>

<main class="font-body bg-primay-content h-full overflow-scroll">
    <slot />
</main>

<footer id="footer" class="h-12 bg-black-lighter py-2 flex flex-col text-cornsilk font-body">
	<div id="copyright" class="text-center space-y-2 text-xs">
		<div class="text-center">
			<p>
				Developed by <a class="hover:underline" href="https://www.nicelion.com">Nice Lion Technologies LLC.</a>
			</p>
		</div>
	</div>
</footer> -->