import { makeInstaller } from '@andre-element/utils';
import components from './components';
import '@andre-element/theme/index.css';

const installer = makeInstaller(components);

export * from '@andre-element/components';
export default installer;
