import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { SkipOption } from '@/types/index';

type Step = {
    title: string;
    isCompleted: boolean;
    isCurrent: boolean;
};

type CheckoutData = {
    postcode?: string;
    wasteType?: string;
    selectedSkip?: SkipOption;
    permitCheck?: boolean;
    chosenDate?: Date;
    paymentInfo?: any;
};

type CheckoutContextType = {
    steps: Step[];
    currentStep: number;
    data: CheckoutData;
    setStep: (index: number) => void;
    setStepData: (stepIndex: number, data: Partial<CheckoutData>) => void;
};

const defaultSteps: Step[] = [
    { title: 'Postcode', isCompleted: true, isCurrent: false },
    { title: 'Waste Type', isCompleted: true, isCurrent: false },
    { title: 'Select Skip', isCompleted: false, isCurrent: true },
    { title: 'Permit Check', isCompleted: false, isCurrent: false },
    { title: 'Choose Date', isCompleted: false, isCurrent: false },
    { title: 'Payment', isCompleted: false, isCurrent: false },
];

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
    const [steps, setSteps] = useState<Step[]>(defaultSteps);
    const [currentStep, setCurrentStep] = useState<number>(2);
    const [data, setData] = useState<CheckoutData>({});

    const setStep = (index: number) => {
        setCurrentStep(index);
        setSteps(prev =>
            prev.map((step, i) => ({
                ...step,
                isCurrent: i === index,
                isCompleted: i < index ? true : step.isCompleted,
            }))
        );
    };

    const setStepData = (stepIndex: number, stepData: Partial<CheckoutData>) => {
        setData(prev => ({ ...prev, ...stepData }));
        setSteps(prev =>
            prev.map((step, i) =>
                i === stepIndex ? { ...step, isCompleted: true } : step
            )
        );
    };

    return (
        <CheckoutContext.Provider value={{ steps, currentStep, data, setStep, setStepData }}>
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckout = () => {
    const context = useContext(CheckoutContext);
    if (!context) {
        throw new Error('useCheckout must be used within a CheckoutProvider');
    }
    return context;
};