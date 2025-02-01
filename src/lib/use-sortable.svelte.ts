import Sortable from 'sortablejs';

export const useSortable = (
	getter: () => HTMLElement | null,
	options?: Sortable.Options

) => {
	$effect(() => {
		const sortable = getter();
		if (sortable) {
			Sortable.create(sortable, options);
		}
	});
}