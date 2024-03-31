import { allNav } from '../../data/AllNav'

export const getNav = (role) => {
  const finalNav = []

  for (let i = 0; i < allNav.length; i++) {
    if (allNav[i].role === role) {
      finalNav.push(allNav[i])
    }
  }

  return finalNav
}
