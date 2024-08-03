import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import profilePic from '@/public/avatar/profile-pic.svg'
import Link from "next/link"
import { socialLinks } from "@/mock-data/mock-data"

export function CardComponent() {
    return (
        <Card className="w-[350px] bg-[#1F1F1F] text-white border-none text-center py-6">
            <CardHeader >
                <CardTitle className="flex justify-center">
                    <Image src={profilePic} alt='profile-Pic' />
                </CardTitle>
                <div className="text-white">
                    <div className="space-y-2 py-6 ">
                        <div className="text-2xl font-semibold">Jessica Randall</div>
                        <div className="text-[#C4F82A] font-bold text-sm">London, United Kingdom</div>
                    </div>
                    <div className="text-sm font-normal">&quot;Front-end developer and avid reader.&quot;</div>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">

                {socialLinks && socialLinks?.map((link) => (
                    <Link href={link?.url} key={link?.id}>
                        <Button className="w-full bg-button-color text-sm font-bold">
                            {link?.title}
                        </Button>
                    </Link>
                )
                )}
            </CardContent>
        </Card>
    )
}
