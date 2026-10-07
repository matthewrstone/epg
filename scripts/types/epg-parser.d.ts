declare module 'epg-parser' {
  export interface EPGParserResult {
    channels: Record<string, unknown>[]
    programs: Record<string, unknown>[]
    date?: string | null
    sourceInfoName?: string
    sourceInfoUrl?: string
    sourceDataUrl?: string
    generatorInfoName?: string
    generatorInfoUrl?: string
  }

  const epgParser: {
    parse(source: string | Buffer): EPGParserResult
  }

  export default epgParser
}
