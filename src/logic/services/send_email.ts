import emailjs from '@emailjs/browser';

import { key_global_emailjs, key_service_emailjs, key_template_emaijs } from '../../config/credentials';

export function Send_email(form: any) {
    emailjs.sendForm(
        key_service_emailjs,
        key_template_emaijs,
        form,
        key_global_emailjs
    ).then(result => console.log(result.text)).catch(error => console.log(error))
}