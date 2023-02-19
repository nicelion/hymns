
 <script lang="ts">
    import { page } from '$app/stores'
	import { PUBLIC_MEASUREMENT_ID } from '$env/static/public';
    $: {
        if (typeof gtag !== 'undefined') {
            gtag('config', PUBLIC_MEASUREMENT_ID, {
                page_title: document.title,
                page_path: $page.url.href
            })
        }
    
    }
</script>


  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_MEASUREMENT_ID}`}>
  </script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', PUBLIC_MEASUREMENT_ID)
  </script>
