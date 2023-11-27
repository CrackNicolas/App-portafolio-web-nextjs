import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "My Portfolio Web Full Stack",
        short_name: "Portfolio",
        description: "Aplicación construida en Next.js",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: "/images/logo/logo.png",
                sizes: "144x144",
                type: "image/png",
                purpose: "any"
            },
            {
                src: "/images/logo/logo.png",
                sizes: "512x512",
                type: "image/png"
            },
            {
                src: "/images/logo/logo.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ]
    };
}
