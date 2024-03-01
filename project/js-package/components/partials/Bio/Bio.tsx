import React from "react"

export function Bio({ name, title }: BioProps) {
  return (
    <div>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <div>{name}</div>
      <div>{title}</div>
    </div>
  )
}

interface BioProps {
  name: string
  title: string
}
