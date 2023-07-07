import { useEffect, useState } from 'react'

import parser from 'cron-parser'
import cronstrue from 'cronstrue'
import moment from 'moment'

const RegularCron = ({ setHumanReadable, setNextRun, cron, setCron }) => {
  const [error, setError] = useState('')
  const validateCron = (cron: string) => {
    const cronSplit = cron.split(/\s+/)
    const cronJoin = cronSplit.slice(0, 5).join(' ')
    setError('')
    try {
      const interval = parser.parseExpression(cronJoin)
      const next = interval.next()
      setHumanReadable(cronstrue.toString(cronJoin))
      setNextRun(moment(next.toDate()).calendar())
    } catch (err) {
      setError((err as Error).message)
    }
    setCron(cronJoin)
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
        className={
          'block w-full h-20 text-center font-semibold text-4xl rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6' +
          (error ? ' ring-red-500 focus:ring-red-500' : '')
        }
      />
      <div className="text-red-900 mt-2 text-center text-xs">{error}</div>
      <div className="text-xs mt-2 grid text-white grid-cols-5">
        <div className="w-full text-center">minute</div>
        <div className="w-full text-center">hour</div>
        <div className="w-full text-center">
          day
          <br />
          (month)
        </div>
        <div className="w-full text-center">month</div>
        <div className="w-full text-center">
          day
          <br />
          (week)
        </div>
      </div>
    </div>
  )
}

export default RegularCron
