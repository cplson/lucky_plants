import { Link } from "@/lib/types";
import NavLink from "@/components/NavLink";

const links: Link[] = [
    { text: 'Shop', path: '/shop' },
    { text: 'Our Story', path: '/about' },
    { text: 'Journal', path: '/journal' },
    { text: 'Contact', path: '/contact' }

]

export default function NavBar(){
    return(
        <div>
            {links.map(link => (
                <NavLink link={link} />
            ))}
        </div>
    )
}