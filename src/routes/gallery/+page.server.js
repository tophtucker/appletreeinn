import { google } from 'googleapis';
import { GOOGLE_KEY } from '$env/static/private';

const FOLDER_ID = '12n_zcIDpz3EtrjnRP21s5Hj0DdXAF7nh';

export async function load() {
	const keyJson = JSON.parse(Buffer.from(GOOGLE_KEY, 'base64').toString());

	const auth = new google.auth.GoogleAuth({
		credentials: keyJson,
		scopes: ['https://www.googleapis.com/auth/drive.readonly']
	});

	const drive = google.drive({ version: 'v3', auth });

	// const res0 = await drive.drives.list();
	// console.log(res0.data.drives);

	const res = await drive.files.list({
		driveId: '0AMiAoeT2ixdmUk9PVA',
		includeItemsFromAllDrives: true,
		supportsAllDrives: true,
		corpora: 'drive',
		q: `'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`,
		fields: 'files(id, name, mimeType, webContentLink)'
	});

	console.log({ res });

	const images = res.data.files.map((file) => ({
		id: file.id,
		name: file.name,
		url: `https://drive.google.com/uc?export=view&id=${file.id}`
	}));

	return { images };
}
