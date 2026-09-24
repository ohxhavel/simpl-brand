import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground border-input flex h-11 w-full min-w-0 rounded-ctl border bg-surface px-3.5 py-1 text-base transition-[border-color,box-shadow] duration-(--sg-duration-fast) ease-brand file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-[13.5px]",
        "focus-visible:outline-none focus-visible:border-strong focus-visible:ring-[0.5px] focus-visible:ring-strong",
        "aria-invalid:border-destructive aria-invalid:ring-[0.5px] aria-invalid:ring-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
