import { MetaTags } from '@redwoodjs/web'

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
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                AWS EventBridge schedule / cron
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-lg leading-6 text-white text-center"
                  >
                    Regular cron
                  </label>
                  <div className="mt-2">
                    <input
                      id="cron"
                      name="cron"
                      type="text"
                      defaultValue="5 * * * * *"
                      required
                      className="block w-full h-20 text-center font-semibold text-4xl rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
                    />
                  </div>
                  <div className="text-xs text-white columns-6">
                    <div className="w-full text-center">minute</div>
                    <div className="w-full text-center">hour</div>
                    <div className="w-full text-center">day (month)</div>
                    <div className="w-full text-center">month</div>
                    <div className="w-full text-center">day (week)</div>
                    <div className="w-full text-center">year</div>
                  </div>
                </div>

                <div>
                  <div>
                    <label
                      htmlFor="password"
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
                      autoComplete="current-password"
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
