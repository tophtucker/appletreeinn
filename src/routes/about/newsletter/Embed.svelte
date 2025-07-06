<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const container = document.getElementById('mailchimp-archive');
		const iframe = document.createElement('iframe');
		iframe.style.border = 'none';
		iframe.style.width = '100%';
		iframe.style.height = '600px';
		container.appendChild(iframe);

		const doc = iframe.contentWindow.document;
		doc.open();
		doc.write(`<!DOCTYPE html><html>
            <style>
            body {
                font-size: 20px;
                font-family: Georgia, 'Times New Roman', Times, serif;
                line-height: 1.4;
                margin: 0;
            }
            a {
                color: #5e4c3c;
            }
            </style>
			<body>
			<${'script'} src="https://appletreeinnlenox.us19.list-manage.com/generate-js/?u=0e2051740f0e8e07588b8b1ce&show=20&fid=27878"></${'script'}>
			</body></html>`);
		doc.close();
	});
</script>

<div id="mailchimp-archive"></div>
