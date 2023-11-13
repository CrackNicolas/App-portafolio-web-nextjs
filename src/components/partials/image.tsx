import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    name: string,
    description_class?: string,
    alt?: string
}

export default function ComponentImage(props: Props) {
    const { name, description_class = "", alt = `Logo ${name}` } = props;

    const t = Use_translation(1);

    const get_image = (name: string) => {
        switch (name) {
            case 'Aplicacion YouTube':
                return "/images/youtube/app.png";
            case 'YouTube':
                return '/images/youtube/logo.png';
            case 'Angular':
                return "https://docs.angular.lat/assets/images/logos/angular/angular.svg";
            case 'TypeScript':
                return "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
            case 'JavaScript':
                return "https://img.icons8.com/fluency/48/null/javascript.png";
            case 'Node.js':
                return "https://img.icons8.com/fluency/48/null/node-js.png";
            case 'CSS':
                return "https://img.icons8.com/fluency/48/null/css3.png";
            case 'Tailwind':
                return "https://img.icons8.com/fluency/48/null/tailwind_css.png";
            case 'HTML':
                return "https://img.icons8.com/fluency/48/null/html-5.png";
            case 'Java':
                return "https://img.icons8.com/fluency/48/null/java-coffee-cup-logo.png";
            case 'PHP':
                return "https://img.icons8.com/fluency/48/null/php.png";
            case 'C/C++':
                return "https://img.icons8.com/fluency/48/null/c-plus-plus-logo.png";
            case 'MongoDB':
                return "https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Emblem-768x480.jpg";
            case 'MySql':
                return "https://img.icons8.com/fluency/48/null/mysql-logo.png";
            case 'Scrum':
                return "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/07/ScrumLogo.png";
            case 'Jira':
                return "https://clipground.com/images/jira-logo-clipart-2.png";
            case 'Trello':
                return "https://s3.amazonaws.com/urgeio-versus/trello.front.variety.1576684641045.jpg";
        }
    }

    return (
        <img src={get_image(name)} className={`cursor-pointer transition duration-500 rounded-sm ${description_class}`} alt={alt ? t(alt) : alt} />
    )
}