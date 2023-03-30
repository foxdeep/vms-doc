import React from 'react';
import Link from '@docusaurus/Link';

import { Stack } from '@mui/material';

import UserProfile from '@site/static/img/user_profile.svg';

export default function Header() {
    return (
        <Stack spacing={2} direction='row' m={2} alignItems='center'>
            <Stack spacing={2} alignItems='flex-start'>
                <h1>Let's make visitor management easy</h1>
                <p>
                    Welcome guests with reliable visitor management system that keeps your workplace safe, compliant, and productive
                </p>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Get Started
                </Link>
            </Stack>
            <UserProfile />
        </Stack>
    )
}