const API_SETTINGS = {
  access_token:
    'EAAKcSDiKTcABAIvBu1ZCIVBHu0XZBWSSys2ezoTDaAmF2GMehDWpsjj6UsdSE4TTf03prTBO3uZC8vSiLiNS1K9gX5q55tdwh9pdNfWo7pzzWCQstX8PtLu9vBZANntgkIPEvNeQe5sWZAuGZAAgw1342y04ZBj4lFGpDxtiQCLJV3t17RbvmZAOYn8s3si54x0ZD',
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
