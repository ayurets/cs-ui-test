import * as contentstack from "contentstack"
import * as Utils from "@contentstack/utils"
import ContentstackLivePreview from "@contentstack/live-preview-utils"

const Stack = contentstack.Stack({
    api_key: `${process.env.CONTENTSTACK_API_KEY}`,
    delivery_token: `${process.env.CONTENTSTACK_DELIVERY_TOKEN}`,
    environment: `${process.env.CONTENTSTACK_ENVIRONMENT}`,
    live_preview: {
      management_token: `${process.env.CONTENTSTACK_MANAGEMENT_TOKEN}`,
      enable: process.env.CONTENTSTACK_LIVE_PREVIEW === "true",
      host: `${process.env.CONTENTSTACK_API_HOST}`,
    },
    //@ts-ignore
    stackDetails: {
      apiKey: process.env.CONTENTSTACK_API_KEY,
      environment: process.env.CONTENTSTACK_ENVIRONMENT,
    },
  })
  
  
  ContentstackLivePreview.init({
    enable: process.env.CONTENTSTACK_LIVE_PREVIEW === "true",
    stackSdk: Stack,
    clientUrlParams: {
      host: process.env.CONTENTSTACK_APP_HOST,
    },
    ssr: false,
  })
  
  export const onEntryChange = ContentstackLivePreview.onEntryChange

  export default {
    getEntry({contentTypeUid}) {
        const query = Stack.ContentType(contentTypeUid).Entry('bltfe7db99d54b0c956')
        return query
    },
  }