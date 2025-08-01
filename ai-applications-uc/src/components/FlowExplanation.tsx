"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FlowStep {
  title: string
  description: string
}

interface FlowExplanationProps {
  title: string
  description?: string
  steps: FlowStep[]
  technologies?: string[]
  benefits?: string[]
}

export default function FlowExplanation({
  title,
  description,
  steps,
  technologies,
  benefits
}: FlowExplanationProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-8 p-6 rounded-xl card-shadow-lg" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between"
      >
        <h2 className="text-xl font-bold" style={{ color: 'var(--card-foreground)' }}>
          {title}
        </h2>
        {isExpanded ? (
          <ChevronUp size={20} style={{ color: 'var(--primary)' }} />
        ) : (
          <ChevronDown size={20} style={{ color: 'var(--primary)' }} />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-6">
          {description && (
            <p style={{ color: 'var(--muted-foreground)' }}>{description}</p>
          )}
          
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>Flow Steps:</h3>
            <ol className="space-y-2 ml-6 list-decimal">
              {steps.map((step, index) => (
                <li key={index}>
                  <span className="font-medium" style={{ color: 'var(--card-foreground)' }}>{step.title}</span>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>

          {technologies && technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {benefits && benefits.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>Benefits:</h3>
              <ul className="space-y-1 ml-6 list-disc">
                {benefits.map((benefit, index) => (
                  <li key={index} style={{ color: 'var(--muted-foreground)' }}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}