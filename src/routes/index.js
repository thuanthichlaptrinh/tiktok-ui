// Layout
import { HeaderOnly } from '~/components/Layout';
// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Những router ko cần đăng nhập cũng xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Những router phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
