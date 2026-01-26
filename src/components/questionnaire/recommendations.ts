import { Recommendation } from './types'

export const getRecommendations = (): Recommendation[] => {
  return  [
    {
      id: '1',
      title: 'Low Maintenance Plant',
      description: 'Perfect if you forget to water sometimes.',
    },
    {
      id: '2',
      title: 'Bright Light Favourite',
      description: 'Thrives in sunny rooms.',
    },
  ]
}