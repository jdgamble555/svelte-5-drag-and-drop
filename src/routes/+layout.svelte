<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<h1 class="m-5 flex justify-center text-3xl">Sortable</h1>

{@render children()}
