import Stack from "../live-preview-sdk"

export const getHeaderRes = async () => {
    const response = await Stack.getEntry({
      contentTypeUid: "header",
    })
    return response
  }