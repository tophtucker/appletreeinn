import { google } from 'googleapis';
import { GOOGLE_KEY } from '$env/static/private';

export async function GET({ params }) {
	const keyJson = JSON.parse(Buffer.from(GOOGLE_KEY, 'base64').toString());

	const auth = new google.auth.GoogleAuth({
		credentials: keyJson,
		scopes: ['https://www.googleapis.com/auth/drive.readonly']
	});

	const drive = google.drive({ version: 'v3', auth });

	const fileId = params.id;

	const res = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'stream' });

	return new Response(res.data, {
		headers: {
			'Content-Type': res.headers['content-type'] || 'image/jpeg',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
