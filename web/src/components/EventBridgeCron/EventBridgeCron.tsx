import { useState, useEffect } from 'react'

import c2q from 'cron-to-quartz'

const EventBridgeCron = ({ cron }: { cron: string }) => {
  const [eventBridgeCron, setEventBridgeCron] = useState('')
  useEffect(() => {
    const quartz = c2q.getQuartz(cron)[0].slice(1)
    setEventBridgeCron(quartz.join(' '))
  }, [cron])
  return (
    <div>
      <input
        id="eventbridge"
        name="eventbridge"
        type="text"
        value={'cron(' + eventBridgeCron + ')'}
        required
        readOnly
        className="block w-full h-20 text-center font-semibold text-4xl rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
      />
      <div className="text-xs mt-2 grid text-white grid-cols-6">
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
        <div className="w-full text-center">year</div>
      </div>
    </div>
  )
}

export default EventBridgeCron
