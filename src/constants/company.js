const FOUNDING_YEAR  = 2007
const FOUNDING_MONTH = 6   // junho
const FOUNDING_DAY   = 21

function calcYearsExperience() {
  const today       = new Date()
  const anniversary = new Date(today.getFullYear(), FOUNDING_MONTH - 1, FOUNDING_DAY)
  const base        = today.getFullYear() - FOUNDING_YEAR
  return today >= anniversary ? base : base - 1
}

export const COMPANY_YEARS_EXPERIENCE = calcYearsExperience()
