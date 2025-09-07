import { Temporal } from '@js-temporal/polyfill';

export const transport = {
	TemporalZonedDateTime: {
		encode: (v) => v instanceof Temporal.ZonedDateTime && v.toString(),
		decode: (s) => Temporal.ZonedDateTime.from(s)
	},
	TemporalPlainDate: {
		encode: (v) => v instanceof Temporal.PlainDate && v.toString(),
		decode: (s) => Temporal.PlainDate.from(s)
	},
	TemporalPlainTime: {
		encode: (v) => v instanceof Temporal.PlainTime && v.toString(),
		decode: (s) => Temporal.PlainTime.from(s)
	},
	TemporalPlainDateTime: {
		encode: (v) => v instanceof Temporal.PlainDateTime && v.toString(),
		decode: (s) => Temporal.PlainDateTime.from(s)
	}
};
