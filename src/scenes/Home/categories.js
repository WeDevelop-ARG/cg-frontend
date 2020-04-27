const SMALL_GROUP_MAX_SIZE = 8
const typeIsGroup = type => type === 'GROUP'
const groupIsSmall = minParticipants => minParticipants <= SMALL_GROUP_MAX_SIZE

export default [
  {
    key: 1,
    title: 'Compra en dúo',
    groupFilter: ({ type }) => !typeIsGroup(type)
  },
  {
    key: 2,
    title: 'Grupos pequeños',
    groupFilter: ({ type, minParticipants }) => typeIsGroup(type) && groupIsSmall(minParticipants)
  },
  {
    key: 3,
    title: 'Grupos grandes',
    groupFilter: ({ type, minParticipants }) => typeIsGroup(type) && !groupIsSmall(minParticipants)
  }
]
