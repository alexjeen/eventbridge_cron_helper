import { useState } from 'react'

import { ClockIcon } from '@heroicons/react/24/outline'

import { MetaTags } from '@redwoodjs/web'

import EventBridgeCron from 'src/components/EventBridgeCron/EventBridgeCron'
import RegularCron from 'src/components/RegularCron/RegularCron'

const CronPage = () => {
  const [cron, setCron] = useState('5 12 * * *')
  const [humanReadable, setHumanReadable] = useState()
  const [nextRun, setNextRun] = useState()
  return (
    <>
      <MetaTags title="Cron" description="AWS EventBridge cron helper" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-20 w-auto"
                src="logo.png"
                alt="AWS EventBridge"
              />
              <h2 className="mt-10 text-center text-xl italic font-semibold  leading-9 tracking-tight text-white">
                &quot;{humanReadable}&quot;
              </h2>
              <h3 className="mt-1 text-center text-xs text-white">
                <ClockIcon className="h-4 w-4 text-indigo-400 inline" /> Next
                run at {nextRun}
              </h3>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="cron"
                    className="block font-semibold text-lg leading-6 text-white text-center"
                  >
                    Regular cron
                  </label>
                  <div className="mt-2">
                    <RegularCron
                      cron={cron}
                      setCron={setCron}
                      setHumanReadable={setHumanReadable}
                      setNextRun={setNextRun}
                    ></RegularCron>
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="eventbridge"
                      className="block font-semibold text-lg leading-6 text-white text-center"
                    >
                      EventBridge cron
                    </label>
                  </div>
                  <div className="mt-2">
                    <EventBridgeCron cron={cron}></EventBridgeCron>
                    <p className="text-gray-400 text-xs text-center mt-5">
                      Note that EventBridge crons are based on the{' '}
                      <a
                        target="_blank"
                        className="text-underline text-indigo-400 hover:text-indigo-300"
                        href="http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html"
                        rel="noreferrer"
                      >
                        Quartz format
                      </a>{' '}
                      so they are not fully compatible with regular crons
                    </p>
                  </div>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-400">
                Built by{' '}
                <a
                  href="https://elasticscale.cloud"
                  target="_blank"
                  className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                  rel="noreferrer"
                >
                  elasticscale
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CronPage
