import { createClient } from '@sanity/client';

export const sanity = createClient({
	projectId: 'lxtjf1cx',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: false
});
