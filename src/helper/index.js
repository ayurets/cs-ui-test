import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Stack from "../live-preview-sdk"

export const getHeaderRes = async () => {
    const response = await Stack.getEntry({
      contentTypeUid: "header",
    })
    const formattedData = ContentstackLivePreview.getGatsbyDataFormat(
        response,
        "contentstack"
    );
    return formattedData
  }