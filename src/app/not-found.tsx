"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import { HomeRounded } from '@mui/icons-material';

export default function NotFound() {
    return (
        <>
            <Box className="flex flex-col justify-center items-center w-full h-full pt-16">
                <Box className="mb-14">
                    <Image src="/page-not-found.svg" alt="me" className="h-72 w-full" width="64" height="64" />
                </Box>
                <Box className="font-semibold text-2xl mb-8">
                    Page Not Found !
                </Box>
                <Box>
                    <Link href="/">
                        <Button
                            className="bg-primary font-semibold capitalize"
                            variant="contained"
                            size="large"
                            startIcon={<HomeRounded />}
                        >
                            go to home
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}