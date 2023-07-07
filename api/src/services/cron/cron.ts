import { randomUUID } from 'crypto'

import {
  DeleteRuleCommand,
  EventBridgeClient,
  PutRuleCommand,
} from '@aws-sdk/client-eventbridge' // ES Modules imp
import type { MutationResolvers } from 'types/graphql'

export const validateCron: MutationResolvers['validateCron'] = async ({
  expression,
}) => {
  try {
    // try to create
    const name = process.env.AWS_EVENT_PREFIX + '-' + randomUUID()
    const client = new EventBridgeClient({
      region: process.env.AWS_DEFAULT_REGION,
    })
    const input = {
      Name: name,
      ScheduleExpression: expression,
      State: 'DISABLED',
      EventBusName: 'default',
    }
    const putRuleCommand = new PutRuleCommand(input)
    await client.send(putRuleCommand)
    // delete it
    const deleteCommand = new DeleteRuleCommand({
      EventBusName: 'default',
      Name: name,
    })
    await client.send(deleteCommand)
  } catch (err) {
    return {
      success: false,
      message: (err as Error).message,
    }
  }
  return {
    success: true,
    message: 'Cron expression is valid',
  }
}
