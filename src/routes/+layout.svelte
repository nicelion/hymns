<script>
    import "../app.css";
</script>
  

<header class="font-body h-24">
    <nav class="w-full bg-black-lighter text-cornsilk">
        <h1 class="font-bold text-2xl text-center py-3">HYMNS & HOPS</h1>
    </nav>
</header>

<div class="font-body bg-primay-content">
    <slot />
</div>

<footer id="footer" class="bg-black-lighter py-2 flex flex-col text-cornsilk font-body">
	<!-- <div id="footer-contnet" class="flex flex-col lg:flex-row space-y-6 md:space-y-0 md:space-x-6">
		<div id="footer-left" class="md:w-full md:p-7">
		</div>
		<div id="footer-right" class="md:w-1/2 p-7">

		</div>
	</div> -->
	<div id="copyright" class="text-center space-y-2 text-xs">
		<div class="text-center">
			<p>
				Developed by <a class="hover:underline" href="https://www.nicelion.com">Nice Lion Technologies LLC.</a>
			</p>
		</div>
	</div>
</footer>