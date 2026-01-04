import {
  getVideoDetails,
  getSubtitles,
  type VideoDetails as CaptionExtractorVideoDetails,
} from 'youtube-caption-extractor'
import type { Subtitle } from 'youtube-caption-extractor'

export async function getVideoCaptionsFromCaptionExtractor(
  videoId: string,
  language: string
): Promise<{
  videoDetails: CaptionExtractorVideoDetails
  subtitles: Subtitle[]
}> {
  try {
    console.log(
      `[Caption Extractor] Fetching captions for video ${videoId} with language ${language}`
    )

    const videoDetails = await getVideoDetails({
      videoID: videoId,
      lang: language as string,
    })

    console.log(
      `[Caption Extractor] Successfully fetched video details for video ${videoId}`
    )

    const subtitles = await getSubtitles({
      videoID: videoId,
      lang: language as string,
    })

    console.log(
      `[Caption Extractor] Successfully fetched ${
        subtitles?.length || 0
      } caption segments`
    )
    return {
      videoDetails,
      subtitles,
    }
  } catch (error) {
    console.error(
      '[Caption Extractor] Error:',
      error instanceof Error ? error.message : String(error)
    )
    console.error(
      '[Caption Extractor] Error stack:',
      error instanceof Error ? error.stack : 'No stack trace'
    )
    throw error
  }
}
