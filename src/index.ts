import aw3 from '@mmstudio/aw000003';
import global from '@mmstudio/global';

export default function send_msg<T>(service: string, msg: unknown) {
	const data = JSON.stringify(msg);
	const url = `${global('host', '.')}/sendmessage/${encodeURIComponent(service)}`;
	return aw3<T>(url, data);
}
