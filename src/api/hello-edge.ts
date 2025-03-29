import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  return new Response(`Hello edge from ${req.url} ${process.env.PORT}`, {
    status: 200,
  })
}
