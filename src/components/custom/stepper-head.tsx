import React from 'react'
import { CheckOutlined } from '@ant-design/icons'
import { cn } from '@/lib/utils'
import { useCheckout } from '@/context/checkout-context'

type Step = {
  title: string
  isCompleted: boolean
  isCurrent: boolean
}

 
export default function StepperHeader() {
  const { steps} = useCheckout();
  return (
    <div className="sticky top-0 z-[100000] flex items-center justify-between bg-waste-primary text-white p-4 overflow-x-auto">
      {steps.map((step, index) => (
        <div
          key={index}
          className={cn(
            'flex items-center gap-2 text-sm whitespace-nowrap',
            step.isCurrent && 'font-semibold text-white underline',
            !step.isCurrent && !step.isCompleted && 'opacity-50'
          )}
        >
          {step.isCompleted ? (
            <CheckOutlined className="text-green-400 text-xs" />
          ) : (
            <div
              className={cn(
                'w-4 h-4 rounded-full border border-white flex items-center justify-center text-[10px]',
                step.isCurrent && 'bg-waste-accent text-primary font-bold'
              )}
            >
              {!step.isCurrent && index + 1}
            </div>
          )}
          {step.title}
        </div>
      ))}
    </div>
  )
}
