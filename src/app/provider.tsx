'use client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '../theme';

type ProvidersProps = {
    children: React.ReactNode;
    config: Map<string, string | undefined>;
};

export default function Providers({
    children, config
}: ProvidersProps) {

    return (
        <MantineProvider theme={theme}>
            <Notifications />
                        {children}
        </MantineProvider>
    );
}
