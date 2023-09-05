import React from "react"
interface BreadcrumbCode {
    link: string;
    name: string;
}
export interface Pageheader {
    title?: string
    subtitle?: string
    breadcrumbs?: BreadcrumbCode[]
    actions?: React.ReactNode;
    tabs?: React.ReactNode
}

