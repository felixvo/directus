import { registerOperator } from './operator-register';

export default registerOperator({
	operator: '_empty',
	apply: ({ query, selectionRaw, compareValue }) => {
		if (compareValue) {
			query.where(selectionRaw, '=', '');
		} else {
			query.where(selectionRaw, '!=', '');
		}
	},
});
