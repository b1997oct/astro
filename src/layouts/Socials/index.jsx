
import { LinkedIn, YouTube, Instagram, Facebook, TwitterX } from '@/preact/Icons/index.jsx'

let socials = [
    {
        href: "https://www.linkedin.com/company/upgradableweb",
        icon: <LinkedIn size="26" />,
        hover: "hover:text-sky-500",
    },
    {
        href: "https://www.youtube.com/@UpgradableWeb",
        icon: <YouTube size="32" />,
        hover: "hover:text-red-600",
    },
    {
        href: "https://www.instagram.com/upgradableweb",
        icon: <Instagram size="26" />,
        hover: "hover:text-violet-500",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61556306291291",
        icon: <Facebook size="26" />,
        hover: "hover:text-blue-500",
    },
    {
        href: 'https://x.com/Bharath_Nethra',
        icon: <TwitterX size='26' />,
        hover: "hover:text-blue-500",
    }
];


export default function Socials() {
    return (
        <div class="df gap text-2xl aic my-8">
            {
                socials.map((d) => {
                    let { hover, href, icon } = d;
                    hover += " transition-all";
                    return (
                        <a target="_blank" class={hover} href={href}>
                            {icon}
                        </a>
                    );
                })
            }
        </div>
    )
}
