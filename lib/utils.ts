import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date:string){
  return new Date(date).toLocaleDateString('en-US',{
    month:'long',
    day:'numeric',
    year:'numeric'
  })
}