import global from '@mmstudio/global';

export default async function send_msg<T>(service: string, msg: unknown) {
	const data = JSON.stringify(msg);
	const url = `${global('host', '.')}/sendmessage/${encodeURIComponent(service)}`;

	const res = await fetch(url, {
		method: 'POST',
		body: data,
		headers: {
			'Content-Type': 'text/json; charset=utf-8'
		}
	});
	const content_type = res.headers.get('Content-type');
	if (res.status > 0 && res.status < 400) {
		if (content_type && /json/i.test(content_type)) {
			return await res.json() as T;
		}
		return res.text() as unknown as T;
	}
	throw new Error(res.statusText);
}
