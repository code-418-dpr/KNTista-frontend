"use client";

import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image,
    Navbar,
    NavbarBrand,
    NavbarContent,
} from "@heroui/react";

const Logo = () => {
    return <Image src="/logo-light-2457x2457.png" alt="Logo" width="50" />;
};

export default function App() {
    return (
        <Navbar className="py-2">
            <NavbarBrand className="space-x-2">
                <Logo />
                <p className="text-xl font-bold">KNTista</p>
            </NavbarBrand>

            <NavbarContent justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            size="md"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
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
