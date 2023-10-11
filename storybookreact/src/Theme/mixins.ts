import { Mixins } from '@mui/material';
import breakpoints from './breakpoints';

const mixins: Mixins = {
    toolbar: {
        minHeight: 48,
        [breakpoints.down('md')]: {
            minHeight: 52
        }
    }
};
export default mixins 