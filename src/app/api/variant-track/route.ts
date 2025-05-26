// app/api/variant-track/route.ts

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      event,
      key,
      variant,
      timestamp,
      pathname,
      referrer,
      userAgent,
      sessionId,
      testGroup,
      ip,
      browser,
      os,
      deviceType,
      campaign,
      medium,
      source,
      term,
      content,
      screenWidth,
      screenHeight,
      language,
      timezone,
      platform,
      experimentVersion,
      buildId,
      nodeEnv,
      isMobile,
      cookieConsent,
      darkModeEnabled,
      latencyMs,
      country,
      region,
      city,
      pageId,
      componentId,
      experimentId,
      sessionStart,
      visitCount,
      pageViewCount,
      isReturningVisitor,
      touchEnabled,
      pointerType,
      batteryLevel,
      networkSpeed,
      ttfbMs,
      fcpMs,
      lcpMs,
      cls,
      fidMs,
      gdprRegion,
      privacyMode,
      cartValue,
      pricingTierSeen,
      leadScore,
      triggeredBy,
      isControl,
      abVersion
    } = body

    if (!event || !key || !variant) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    console.log('📊 VARIANT EVENT (Ultra Extended):', {
      event,
      key,
      variant,
      timestamp,
      pathname,
      referrer,
      userAgent,
      sessionId,
      testGroup,
      ip,
      browser,
      os,
      deviceType,
      campaign,
      medium,
      source,
      term,
      content,
      screenWidth,
      screenHeight,
      language,
      timezone,
      platform,
      experimentVersion,
      buildId,
      nodeEnv,
      isMobile,
      cookieConsent,
      darkModeEnabled,
      latencyMs,
      country,
      region,
      city,
      pageId,
      componentId,
      experimentId,
      sessionStart,
      visitCount,
      pageViewCount,
      isReturningVisitor,
      touchEnabled,
      pointerType,
      batteryLevel,
      networkSpeed,
      ttfbMs,
      fcpMs,
      lcpMs,
      cls,
      fidMs,
      gdprRegion,
      privacyMode,
      cartValue,
      pricingTierSeen,
      leadScore,
      triggeredBy,
      isControl,
      abVersion
    })

    // TODO: Store in DB or external provider

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('❌ Variant API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
