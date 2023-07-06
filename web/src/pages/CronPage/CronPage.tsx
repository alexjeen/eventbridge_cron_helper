import { ClockIcon } from '@heroicons/react/24/outline'

import { MetaTags } from '@redwoodjs/web'

import RegularCron from 'src/components/RegularCron/RegularCron'

const CronPage = () => {
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
                &quot;Every day at midnight&quot;
              </h2>
              <h3 className="mt-1 text-center text-xs text-white">
                <ClockIcon className="h-4 w-4 text-indigo-400 inline" /> Next
                run at 2023-05-01 12:00
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
                    <RegularCron></RegularCron>
                  </div>
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
                    <input
                      id="eventbridge"
                      name="eventbridge"
                      type="text"
                      defaultValue="rate(5 minutes)"
                      required
                      className="block w-full h-20 text-center font-semibold text-4xl rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
                    />
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
