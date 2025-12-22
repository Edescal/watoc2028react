import { http, HttpResponse } from 'msw'

export const handlers = [
    http.post('/api/v1/login', async ({ request }) => {
        const { email, password } = await request.json()

        if (email === 'admin' && password === 'password') {
            return HttpResponse.json({
                message: 'Awebo',
                access: 'putamadre',
                refresh: 'putamadre'
            })
        }
        return new HttpResponse(null, { status: 404 })
    }),

    http.post('/api/v1/contact', async ({ request }) => {
        const { firstName, lastName, email, subject, description } = await request.json()
        if (!firstName || !lastName || !email || !subject || !description) {
            return new HttpResponse(null, { status: 404 })
        }
        return HttpResponse.text('Success', { status: 201 })
    }),
]