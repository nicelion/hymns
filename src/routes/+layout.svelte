<script>
    import Analytics from "$lib/componets/Analytics.svelte";
	import "../app.css";
</script>
  
<Analytics />

<!-- <div class="flex flex-col ">
	<header class="font-body bg-black-lighter sticky top-0">
		<nav class="w-full  text-cornsilk">
			<h1 class="font-bold text-2xl text-center py-3">HYMNS & HOPS</h1>
		</nav>
	</header>
	<main class="font-body bg-primay-content overflow-y-auto py-4 bg-primary-content flex items-center justify-center">
		<div class="w-full max-w-5xl">		
			<slot />
		</div> 
	</main>
	<footer id="footer" class="bg-black-lighter flex flex-col text-cornsilk font-body">
		<p class="text-center text-xs py-2">
			This is an open source project. <a class="underline" target="_blank" href="https://www.github.com/nicelion/hymns">You can contribute here.</a>
		</p>
	</footer>
</div> -->

<div class="flex flex-col min-h-screen">
	<header class="font-body bg-black-lighter sticky top-0">
		<nav class="w-full  text-cornsilk">
			<h1 class="font-bold text-2xl text-center py-3">HYMNS & HOPS</h1>
		</nav>
	</header>
	<div class="flex-grow">
	  <main class="font-body bg-primay-content overflow-y-auto py-4 bg-primary-content flex items-center justify-center">
		  <div class="w-full max-w-5xl">
			<slot />
		  </div>
	  </main>
	</div>
	<footer class="sticky z-50 bg-black-lighter bottom-0 ">
		<p class="text-center text-xs pb-4 pt-2 text-cornsilk font-body">
			This is an open source project. <a class="underline" target="_blank" href="https://www.github.com/nicelion/hymns">You can contribute here.</a>
		</p>
	</footer>
  </div>