'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function PageDinamic() {
    const redirect = useRouter();
    const current_path = usePathname().substring(1);

    const sections = ['', 'start', 'about', 'services', 'experience', 'proyects', 'education', 'contact'];

    useEffect(() => {
        if (sections.includes(current_path)) {
            redirect.push("/");
        } else {
            redirect.replace("/error");
        }
    }, []);

    return null;
}