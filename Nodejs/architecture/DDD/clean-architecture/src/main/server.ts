import 'module-alias';
import app from '@/main/config/app';
import { env } from '@/main/config/env';

// eslint-disable-next-line no-console
app.listen(env.port, () => console.log('Server running'));
