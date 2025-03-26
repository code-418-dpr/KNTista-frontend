"use client";

import siteMetadata from "@/conf/site-metadata";
import { Image } from "@heroui/react";

export default function Logo() {
    return <Image src={siteMetadata.logoLight} alt="Logo" width={48} />;
}
