 import { NextRequest, NextResponse } from 'next/server'
type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextRequest,
  context:any,
  res: NextResponse<ResponseData>

) {
  const { params } = context; 
 return NextResponse.json({ message: params.pid+ 'Hello from Next.js!' })
}

export async function POST(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {

 return NextResponse.json({ message: 'post Hello from Next.js!' })
}