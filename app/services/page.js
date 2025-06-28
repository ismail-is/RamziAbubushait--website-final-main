'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Service from "@/components/sections/home2/Service"
export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our services">
        {/* Start Services One*/} 
        <Service/>
       
        {/* End Services One*/} 
        </Layout>
        </>
    )
}