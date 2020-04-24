const SMALL_GROUP_MAX_SIZE = 8
const typeIsGroup = type => type === 'GROUP'
const groupIsSmall = minParticipants => minParticipants <= SMALL_GROUP_MAX_SIZE

export default [
  {
    title: 'Compra en dúo',
    groupFilter: ({ type }) => !typeIsGroup(type)
  },
  {
    title: 'Grupos pequeños',
    groupFilter: ({ type, minParticipants }) => typeIsGroup(type) && groupIsSmall(minParticipants)
  },
  {
    title: 'Grupos grandes',
    groupFilter: ({ type, minParticipants }) => typeIsGroup(type) && !groupIsSmall(minParticipants)
  }
]
