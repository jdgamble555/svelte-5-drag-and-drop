<script lang="ts">
	import Handle from '$lib/handle.svelte';
	import { reorder, useSortable } from '$lib/use-sortable.svelte';
	import { writable } from 'svelte/store';

	let items = writable([
		{
			id: 1,
			text: 'Item 1'
		},
		{
			id: 2,
			text: 'Item 2'
		},
		{
			id: 3,
			text: 'Item 3'
		}
	]);

	let sortable = $state<HTMLElement | null>(null);

	useSortable(() => sortable, {
		animation: 200,
		handle: '.my-handle',
		ghostClass: 'opacity-0',
		onEnd(evt) {
			$items = reorder($items, evt);
		}
	});
</script>

<div class="hidden opacity-0"></div>
<ul class="flex w-full list-none flex-col items-center" bind:this={sortable}>
	{#each $items as item (item)}
		<li class="m-2 flex w-32 items-center justify-center gap-5 border p-3">
			<span>{item.text}</span>
			<button type="button" class="my-handle outline-none">
				<Handle />
			</button>
		</li>
	{/each}
</ul>
<div class="flex justify-center">
	<pre class="mt-5 w-fit border p-5">{JSON.stringify($items, null, 2)}</pre>
</div>
