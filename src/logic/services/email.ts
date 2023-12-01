import axios from 'axios';

export function Send_email(form: any) {
    const data = {
        name: form?.name.value,
        last_name: form?.last_name.value,
        email: form?.email.value,
        message: form?.message.value
    }

    return axios.post("/api/email", data);
}