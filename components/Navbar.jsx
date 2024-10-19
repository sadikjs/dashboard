import Image from "next/image";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "@/assest/images/sj-logo-design_731343-572.jpg"

const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-900 py-2 px-5 flex justify-between text-white">
            <Link href="/">
                <Image
                    className="rounded-lg"
                    src={logo} alt="logo" width={40} height={40} />
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuSeparator />
                <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/setting">Setting</Link>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default Navbar