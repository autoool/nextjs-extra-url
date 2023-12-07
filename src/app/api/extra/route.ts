import { NextRequest, NextResponse } from 'next/server'
import urlMetadata from 'url-metadata'
type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {

  const url = 'https://github.com/BetaHuhn/metadata-scraper'
	const data = await urlMetadata(url)
	console.log(data)
 return NextResponse.json(data)
}

export async function POST(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {
 return NextResponse.json({ message: 'post Hello from Next.js!' })
}