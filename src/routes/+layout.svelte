<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<h1 class="m-5 flex justify-center text-3xl">Sortable</h1>

{@render children()}

<nav class="mt-5 flex items-center justify-center gap-5">
	<a href="/">Runes</a>
	<a href="/stores">Stores</a>
</nav>
