import React from 'react';
import Link from '@docusaurus/Link';

import { Stack } from '@mui/material';

import UserProfile from '@site/static/img/user_profile.svg';
import Translate from '@docusaurus/Translate';

export default function Header() {
    return (
        <Stack spacing={2} direction='row' m={2} alignItems='center'>
            <Stack spacing={2} alignItems='flex-start'>
                <h1><Translate id='header.title'>Let's make visitor management easy</Translate></h1>
                <p>
                    <Translate id='header.subTitle'>
                        Welcome guests with reliable visitor management system that keeps your workplace safe, compliant, and productive
                    </Translate>
                </p>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    <Translate id='header.btn'>
                        Get Started
                    </Translate>
                </Link>
            </Stack>
            <UserProfile />
        </Stack>
    )
}