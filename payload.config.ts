import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import Page from './collections/Page';
import Media from './collections/Media';

dotenv.config();

export default buildConfig({
  collections: [
    Page,
    Media,
  ],
  plugins: [
    payloadCloud(),
  ],
});
