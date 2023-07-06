import { useEffect, useState } from 'react'

import parser from 'cron-parser'
import moment from 'moment'

const RegularCron = () => {
  const [cron, setCron] = useState('5 12 * * *')
  const [error, setError] = useState('')
  const validateCron = (cron: string) => {
    setError('')
    try {
      const interval = parser.parseExpression(cron)
      const next = interval.next()

      console.log('Date: ', next.toString()) // Sat Dec 29 2012 00:42:00 GMT+0200 (EET)
      console.log(moment(next.toDate()).fromNow())
    } catch (err) {
      setError((err as Error).message)
    }
    setCron(cron)
  }
  useEffect(() => {
    validateCron(cron)
  })
  return (
    <div>
      <input
        id="cron"
        name="cron"
        type="text"
        value={cron}
        onChange={(e) => validateCron(e.target.value)}
        required
        className="block w-full h-20 text-center font-semibold text-4xl rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
      />
      <div className="text-red-900 mt-2 text-center text-xs">{error}</div>
    </div>
  )
}

export default RegularCron
