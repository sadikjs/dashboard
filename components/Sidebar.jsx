import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { LayoutDashboard, Newspaper, Folder, User, CreditCard, Settings } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div>
            <Command className="bg-">
                <CommandInput placeholder="search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <LayoutDashboard className="mr-2 h-4 w-4"/>
                            <Link href="/dashboard">Dashboard</Link>
                        </CommandItem>
                        <CommandItem>
                        <Newspaper className="mr-2 h-4 w-4"/>
                        <Link href="/dashboard">Posts</Link>
                        </CommandItem>
                        <CommandItem>
                            <Folder className="mr-2 h-4 w-4"/>
                            <Link href="/categories">Categories</Link>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User className="mr-2 h-4 w-4"/>
                                <span>Profile</span>
                            <CommandShortcut>P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard className="mr-2 h-4 w-4"/>
                                <span>Billing</span>
                                <CommandShortcut>B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>

    );
}

export default Sidebar;