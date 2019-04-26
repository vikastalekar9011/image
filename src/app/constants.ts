import { SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
export const config: SocketIoConfig = {
    url:  environment.SOCKET_PATH,
    options: {}
};
