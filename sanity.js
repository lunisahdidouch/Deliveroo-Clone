import {useClient} from 'sanity'
import imageUrlBuilder from '@sanity/image-url'

const client = useClient({
    projectId: 'lc4r95tl',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client