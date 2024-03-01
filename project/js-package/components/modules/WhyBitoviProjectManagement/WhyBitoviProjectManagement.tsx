import { getHubID } from "@hubspot/cms-components"

export function WhyBitoviProjectManagement() {
  const id = getHubID()
  return <h1>{`HubID='${id ? id : "unknown"}'`}</h1>
}
