import { z } from 'zod'

const configShema = z.object({
    EXPO_DEV_URL: z.string(),
})

const configProject = configShema.safeParse({
    EXPO_DEV_URL: process.env.EXPO_BASE_URL,
})

if (!configProject.success) {
    throw new Error('The value of the environment variable is not valid')
}

const envConfig = configProject.data
export default envConfig