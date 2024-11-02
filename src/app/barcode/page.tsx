'use client'

// import { BarcodeScanner } from 'react-barcode-scanner'
// import "react-barcode-scanner/polyfill"

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { DetectedBarcode } from 'react-barcode-scanner'

const BarcodeScanner = dynamic(() => {
    import('react-barcode-scanner/polyfill')
    return import('react-barcode-scanner').then(mod => mod.BarcodeScanner)
}, { ssr: false })

const Page = () => {
    const [barcodes, setBarcodes] = useState<DetectedBarcode[]>([])
    const handleCapture = (barcodes: DetectedBarcode[]) => {
        setBarcodes(barcodes)
    }

    if (barcodes.length > 0) {
        return (
            <div>
                <h1>BARCODES</h1>
                <div>
                    {barcodes.map((b) => {
                        return (
                            <div key={b.rawValue}>
                                BAR: {b.rawValue} <br />
                                FOR: {b.format}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return <BarcodeScanner onCapture={handleCapture} />
}

export default Page
