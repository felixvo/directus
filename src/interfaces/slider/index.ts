import InterfaceSlider from './slider.vue';
import { defineInterface } from '@/interfaces/define';

export default defineInterface(({ i18n }) => ({
	id: 'slider',
	name: i18n.t('slider'),
	icon: 'linear_scale',
	component: InterfaceSlider,
	types: ['integer', 'decimal', 'float'],
	options: [
		{
			field: 'minValue',
			name: i18n.t('minimum_value'),
			width: 'half',
			interface: 'numeric',
		},
		{
			field: 'maxValue',
			name: i18n.t('maximum_value'),
			width: 'half',
			interface: 'numeric',
		},
		{
			field: 'stepInterval',
			name: i18n.t('step_interval'),
			width: 'half',
			interface: 'numeric',
		},
	],
}));
