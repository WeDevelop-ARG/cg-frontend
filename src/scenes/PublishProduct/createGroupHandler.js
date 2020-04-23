import apolloClient from '../../apollo/configurations/client'
import createGroup from '../../apollo/mutations/createGroup'
import uploadPhotosHandler from './uploadPhotosHandler'

export default async ({
  product: { productPhotosUrls: photosToLoad, ...product },
  type,
  minParticipants,
  maxParticipants,
  discount,
  expiresAt
}) => {
  product.productPhotosUrls = await uploadPhotosHandler(photosToLoad)

  const { data } = await apolloClient.mutate({
    mutation: createGroup,
    variables: { groupInput: { product, type, minParticipants, maxParticipants, discount, expiresAt } }
  })

  return data
}
