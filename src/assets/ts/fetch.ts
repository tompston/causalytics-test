const API_SETTINGS = {
  access_token:
    'EAAKcSDiKTcABAMNOn3MgD9dh30VsKpuWNIGb8IeOsa3kSxlzwVA9RS5qEcyETtnn54Hk6ZBwKTUFvoJDplAUGn0iSdiO2pMVilplXd5IZCzp7sJ73L8sZAXklYTnwfsxUgkXLAhFp7qwKZAdzZBKQaS3kdCsbtovZCGk9biwRiQX3OpqgdjNIiJ07ccLJdrUDZAOBtSzjqVAgZDZD',
  fields: 'campaign_id%2Ccampaign_name%2Cimpressions&level=campaign',
  limit: '25',
}

export async function FacebookAnalyticsEndpoint(
  start_date: string,
  end_date: string,
  fields: string = API_SETTINGS.fields,
  access_token: string = API_SETTINGS.access_token,
  limit: string = API_SETTINGS.limit, // doesn't seem like this param changes something
): Promise<Response> {
  let URL = `https://graph.facebook.com/v14.0/act_25064918/insights?access_token=${access_token}&fields=${fields}&time_range%5Bsince%5D=${start_date}&time_range%5Buntil%5D=${end_date}&limit=${limit}`
  return await fetch(URL)
}
