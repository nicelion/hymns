
 <script lang="ts">
    import { page } from '$app/stores'
	  import { PUBLIC_MEASUREMENT_ID } from '$env/static/public';
    $: {
        if (PUBLIC_MEASUREMENT_ID == "") {
          console.warn("MEASUREMENT_ID not found! In a development environment?")
        }
        if (typeof gtag !== 'undefined') {
            gtag('config', PUBLIC_MEASUREMENT_ID, {
                page_title: document.title,
                page_path: $page.url.href
            })
        }
    
    }
</script>

<svelte:head>
  {#if PUBLIC_MEASUREMENT_ID != ""}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_MEASUREMENT_ID}`}>
    </script>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', PUBLIC_MEASUREMENT_ID)
    </script>
  {/if}
  
</svelte:head>