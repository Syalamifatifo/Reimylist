import { createTheme, MantineProvider, Button } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Card, Image, Text, Badge, Group, List } from '@mantine/core';
import { Grid } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { Center, Box } from '@mantine/core';
import { Pagination } from '@mantine/core';
import { Container, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import React from 'react';
import { Anchor } from '@mantine/core';
import { Autocomplete, } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from './HeaderSearch.module.css';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Table } from '@mantine/core';
import { useRef } from 'react';
import '@mantine/carousel/styles.css';

const images = ["https://cdn.myanimelist.net/images/anime/1645/140627.jpg"];



export function HeaderSearch() {
    const [opened, { toggle }] = useDisclosure(false);
}


const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

const links = [
    { link: '/pages/anime', label: 'Anime' },
    { link: '/pages/manga', label: 'Manga' },
    { link: '/pages/movie', label: 'Movie' },
    { link: '/pages/games', label: 'Games' },
];

const data = [
    {
      title: 'About',
      links: [
        { label: 'Features', link: '#' },
        { label: 'Pricing', link: '#' },
        { label: 'Support', link: '#' },
        { label: 'Forums', link: '#' },
      ],
    },
    {
      title: 'Project',
      links: [
        { label: 'Contribute', link: '#' },
        { label: 'Media assets', link: '#' },
        { label: 'Changelog', link: '#' },
        { label: 'Releases', link: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Join Discord', link: '#' },
        { label: 'Follow on Twitter', link: '#' },
        { label: 'Email newsletter', link: '#' },
        { label: 'GitHub discussions', link: '#' },
      ],
    },
  ];

const items = links.map((link) => (
    <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
    >
        {link.label}
    </a>
));



const Halaman = function ({
    ...props
}) {

    const [opened, { toggle }] = useDisclosure();

    const callMe = function () {
        alert("OK")
    }

    return (
        <MantineProvider
            theme={{
                colors: {
                    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
                    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
                },
            }}
        >
            <AppShell
                header={{ height: 60 }}
                aside={{
                    width: 260,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
                padding="lg"
            >
                <AppShell.Header>

                    <header className={classes.header}>
                        <div className={classes.inner}>
                            <Group>
                                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                                <MantineLogo size={30} />
                            </Group>

                            <Group>
                                <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                                    {items}
                                </Group>
                                <Autocomplete
                                    className={classes.search}
                                    placeholder="Search"
                                    leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                                    data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                                    visibleFrom="xs"
                                />
                            </Group>
                        </div>
                    </header>

                </AppShell.Header>
                {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
                <AppShell.Aside w={260} p="md">
                    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
                        <Grid>
                            <Grid.Col span={4}>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>




                            </Grid.Col>

                            <Grid.Col span={4}>
                                <List listStyleType="none">
                                    <List.Item > <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'crimson', to: 'crimson' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor></List.Item>
                                    <List.Item> <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'pink', to: 'pink' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor></List.Item>
                                    <List.Item> <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'blue', to: 'blue' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor></List.Item>
                                    <List.Item> <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'red', to: 'red' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor></List.Item>
                                    <List.Item> <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'yellow', to: 'yellow' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor></List.Item>
                                </List>
                            </Grid.Col>

                            <Grid.Col span={4}>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                                <List listStyleType="none">
                                    <Anchor
                                        variant="gradient"
                                        gradient={{ from: 'purple', to: 'purple' }}
                                        fw={500}
                                        fz="sm"
                                        href="#text-props"
                                    >
                                        Adventure
                                    </Anchor>

                                </List>
                            </Grid.Col>
                        </Grid>

                    </Grid>


                </AppShell.Aside>
                <AppShell.Main>
        <Carousel withIndicators height={200}>
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
            </Carousel>
                    <Grid>
                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Card shadow="xl" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src="https://cdn.myanimelist.net/images/anime/1244/134653.jpg"
                                        height={300}
                                        alt="Norway"
                                    />
                                </Card.Section>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>Psycho-Pass Movie: Providence</Text>
                                    <Badge color="grey">Movie</Badge>
                                    <Badge leftSection={<IconStar height={14}></IconStar>} color="yellow">7.85</Badge>
                                </Group>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Card shadow="xl" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src="https://cdn.myanimelist.net/images/anime/1244/134653.jpg"
                                        height={300}
                                        alt="Norway"
                                    />
                                </Card.Section>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>Psycho-Pass Movie: Providence</Text>
                                    <Badge color="grey">Movie</Badge>
                                    <Badge leftSection={<IconStar height={14}></IconStar>} color="yellow">7.85</Badge>
                                </Group>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Card shadow="xl" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src="https://cdn.myanimelist.net/images/anime/1244/134653.jpg"
                                        height={300}
                                        alt="Norway"
                                    />
                                </Card.Section>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>Psycho-Pass Movie: Providence</Text>
                                    <Badge color="grey">Movie</Badge>
                                    <Badge leftSection={<IconStar height={14}></IconStar>} color="yellow">7.85</Badge>
                                </Group>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Card shadow="xl" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src="https://cdn.myanimelist.net/images/anime/1244/134653.jpg"
                                        height={300}
                                        alt="Norway"
                                    />

                                </Card.Section>


                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>Psycho-Pass Movie: Providence</Text>
                                    <Badge color="grey">Movie</Badge>
                                    <Badge leftSection={<IconStar height={14}></IconStar>} color="yellow">7.85</Badge>
                                </Group>

                            </Card>

                        </Grid.Col>

                       
                    </Grid>
                    <Center maw={1200} h={100} bg="var(--mantine-color-gray-light)">

                        <Pagination total={20} siblings={3} defaultValue={10} />
                    </Center>




                </AppShell.Main>

            </AppShell>
        </MantineProvider>
    )
}

export default Halaman;