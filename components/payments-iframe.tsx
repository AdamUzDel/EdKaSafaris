"use client"

import { useEffect, useRef } from "react"

interface PaymentIframeProps {
  height?: number
  width?: number
}

export default function PaymentIframe({ height = 400, width = 300 }: PaymentIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Adjust iframe if needed
    if (iframeRef.current) {
      // Additional iframe setup if needed
    }
  }, [])

  return (
    <div className="payment-iframe-container">
      <iframe
        ref={iframeRef}
        width={width.toString()}
        height={height.toString()}
        src="https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/edkasafarisandadventures"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  )
}

