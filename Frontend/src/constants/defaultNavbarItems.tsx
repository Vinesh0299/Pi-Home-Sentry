import Logo from '@/assets/pi-home-sentry-logo.svg'
import { Cctv, Video, Settings } from 'lucide-react';

const navbarItems = [{
    name: "Dashboard",
    icon: <img src={Logo} alt="Logo" />,
    href: "/"
}, {
    name: "Live Feed",
    icon: <Cctv />,
    href: "/live-feed"
}, {
    name: "Recordings",
    icon: <Video />,
    href: "/recordings"
}, {
    name: "Settings",
    icon: <Settings />,
    href: "/settings"
}]

export { navbarItems };