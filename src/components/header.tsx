import { User } from "iconoir-react";

import Logo from "@/components/logo";
import siteMetadata from "@/conf/site-metadata";
import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
} from "@heroui/react";

export default function Header() {
    return (
        <Navbar className="py-2">
            <NavbarBrand className="space-x-3">
                <Logo />
                <p className="text-xl font-bold">{siteMetadata.shortName}</p>
            </NavbarBrand>

            <NavbarContent justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            size="md"
                            fallback={<User width="2rem" height="1.8rem" />}
                        />
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem key="profile" className="gap-2">
                            <p className="font-bold">Имя Фамилия</p>
                            <p className="font-semibold">example@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Выход
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
