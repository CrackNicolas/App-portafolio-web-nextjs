import { FC } from "react";

interface EmailTemplateProps {
    data: any;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({ data }) => (
    <div>
        <h1>
            Mensaje de mi portafolio
            <strong>web full stack</strong>
        </h1>
        <h2>Hola soy {data.last_name + " " + data.name}</h2>
        <h3>{data.message}</h3>
        <h4>
            Contactame a {data.email}
        </h4>
    </div>
);