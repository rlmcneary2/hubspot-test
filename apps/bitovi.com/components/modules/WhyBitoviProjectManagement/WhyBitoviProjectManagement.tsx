import { getHubID } from "@hubspot/cms-components"

export function WhyBitoviProjectManagement(props: HubspotProps) {
  console.log(props)
  const id = getHubID()
  return <h1>{`HubID='${id ? id : "unknown"}'`}</h1>
}

interface HubspotProps {
  dataQueryResult: { data: { CRM: Record<string, unknown> } }
}
