import Image from "next/image";

import Use_translation from "@/context/translation/use";

type Props = {
    name: string,
    size?: number,
    layout?: string,
    description_class?: string,
    alt?: string
}

export default function ComponentImage(props: Props) {
    const { name, size = 1, layout = "", description_class = "", alt = `Logo ${name}` } = props;

    const { translate } = Use_translation();

    const url_proyects = "/images/proyects"
    const url_icons = "/images/icons";

    //Tener en cuenta que siempre que se añada alguna imagen externa tambien se debe añadir su dominio en next.config.js
    const get_image = (name: string) => {
        switch (name) {
            case 'Aplicacion YouTube':
                return url_proyects + "/youtube/app.png";
            case 'YouTube':
                return url_proyects + "/youtube/logo.png";
            case 'Angular':
                return url_icons + "/angular.svg";
            case 'TypeScript':
                return url_icons + "/typescript.svg";
            case 'JavaScript':
                return url_icons + "/javascript.png";
            case 'Node.js':
                return url_icons + "/nodejs.png";
            case 'CSS':
                return url_icons + "/css.png";
            case 'Tailwind':
                return url_icons + "/tailwind.png";
            case 'HTML':
                return url_icons + "/html.png";
            case 'Java':
                return url_icons + "/java.png";
            case 'PHP':
                return url_icons + "/php.png";
            case 'C/C++':
                return url_icons + "/c.png";
            case 'MongoDB':
                return url_icons + "/mongodb.png";
            case 'MySql':
                return url_icons + "/mysql.png";
            case 'Scrum':
                return url_icons + "/scrum.png";
            case 'Jira':
                return url_icons + "/jira.png";
            case 'Trello':
                return url_icons + "/trello.png";
            default:
                return "";
        }
    }

    return (
        <Image width={size} height={size} layout={layout} src={get_image(name)} className={`cursor-pointer transition duration-500 rounded-sm ${description_class}`} alt={alt ? translate(alt) : alt} />
    )
}