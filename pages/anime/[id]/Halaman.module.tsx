import { Paper, Text, Button, Group, Grid, Container, Divider, Chip, Card, Image, Badge } from "@mantine/core"
import styles from './card.module.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { createTheme, MantineProvider, MantineTheme, } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';



const Halaman = (_props: any) => {
    const router = useRouter();
    const idAnime = router.query.id;

    return (
        <>
            <MantineProvider>
                <Paper radius={'none'} color="white" w={'100%'} h={64}>
                    <Group justify="space-between" py={12} px={24}>
                        <div>
                            <a href="/home">
                                <Button variant="subtle" color="indigo" radius={'xl'} mr={6}>Home</Button>
                            </a>
                            <a href="./anime">
                                <Button variant="subtle" color="indigo" radius={'xl'} mr={6}>Anime</Button>
                            </a>
                        </div>
                    </Group>
                </Paper>

                <Container size={"xl"} mt={24}>
                    <Grid p={0} m={0}>
                        <Grid.Col span={9}>
                            <Grid p={0} m={0} my={12}>
                                <Grid.Col span={12}>
                                    <Text size="18px" fw={600} c="indigo">isekai</Text>
                                    <Divider my={12}></Divider>
                                </Grid.Col>
                                <Grid.Col span={3}>

                                    <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.animeCard} // Add a custom CSS class for easier styling
                                    >
                                        <Card.Section>
                                            <div className={styles.imageContainer}>
                                                <Image
                                                    src="https://www.gematsu.com/wp-content/uploads/2021/06/Rune-Factory-5_2021_06-13-21_001.jpg"
                                                    height={350}
                                                    alt="Norway"
                                                    className={styles.animeImage}
                                                />
                                            </div>
                                        </Card.Section>
                                        <Group justify="space-between" mt="-12px" mb="xs">
                                            <Badge defaultChecked color="gray" style={{ color: 'white', backgroundColor: '#2b4d6f' }}>&#9733; 7,5</Badge>
                                            <Badge defaultChecked color="gray" style={{ color: 'black', backgroundColor: 'white' }}>Ep 12</Badge>
                                        </Group>

                                        <Group justify="space-between">
                                            <Text fw={500}>Rune Factory 5</Text>
                                        </Group>

                                        <Text size="sm" c="dimmed" mt={12}>
                                        </Text>
                                        
                                        <Link href={`./${idAnime}`}>
            <a>
                <Button variant="outline" color="blue" radius="md" fullWidth>Watch</Button>
            </a>
        </Link>
                                    </Card>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                                        <Card.Section>
                                            <Image
                                                src="https://www.gematsu.com/wp-content/uploads/2021/06/Rune-Factory-5_2021_06-13-21_001.jpg"
                                                height={350}
                                                alt="Norway"
                                            />
                                        </Card.Section>
                                        <Group justify="space-between" mt="-12px" mb="xs">
                                            <Badge defaultChecked color="gray" style={{ color: 'white', backgroundColor: '#2b4d6f' }}>&#9733; 7,5</Badge>
                                            <Badge defaultChecked color="gray" style={{ color: 'black', backgroundColor: 'white' }}>Ep 12</Badge>
                                        </Group>


                                        <Group justify="space-between">
                                            <Text fw={500}>Rune Factory 5</Text>
                                        </Group>

                                        <Text size="sm" c="dimmed" mt={12}>

                                        </Text>
                                        
                                        <Link href={`/${idAnime}`}>
    <a>
        <Button variant="outline" color="blue" radius="md" fullWidth>Watch</Button>
    </a>
</Link>


                                    </Card>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                                        <Card.Section>
                                            <Image
                                                src="https://www.gematsu.com/wp-content/uploads/2021/06/Rune-Factory-5_2021_06-13-21_001.jpg"
                                                height={350}
                                                alt="Norway"
                                            />
                                        </Card.Section>
                                        <Group justify="space-between" mt="-12px" mb="xs">
                                            <Badge defaultChecked color="gray" style={{ color: 'white', backgroundColor: '#2b4d6f' }}>&#9733; 7,5</Badge>
                                            <Badge defaultChecked color="gray" style={{ color: 'black', backgroundColor: 'white' }}>Ep 12</Badge>
                                        </Group>


                                        <Group justify="space-between">
                                            <Text fw={500}>Rune Factory 5</Text>
                                        </Group>

                                        <Text size="sm" c="dimmed" mt={12}>

                                        </Text>
                                        
                                        <Link href={`./${idAnime}`}>
            <a>
                <Button variant="outline" color="blue" radius="md" fullWidth>Watch</Button>
            </a>
        </Link>

                                    </Card>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                                        <Card.Section>
                                            <Image
                                                src="https://www.gematsu.com/wp-content/uploads/2021/06/Rune-Factory-5_2021_06-13-21_001.jpg"
                                                height={350}
                                                alt="Norway"
                                            />
                                        </Card.Section>
                                        <Group justify="space-between" mt="-12px" mb="xs">
                                            <Badge defaultChecked color="gray" style={{ color: 'white', backgroundColor: '#2b4d6f' }}>&#9733; 7,5</Badge>
                                            <Badge defaultChecked color="gray" style={{ color: 'black', backgroundColor: 'white' }}>Ep 12</Badge>
                                        </Group>


                                        <Group justify="space-between">
                                            <Text fw={500}>Rune Factory 5</Text>
                                        </Group>

                                        <Text size="sm" c="dimmed" mt={12}>

                                        </Text>
                                        
                                        <Link href={`./${idAnime}`}>
            <a>
                <Button variant="outline" color="blue" radius="md" fullWidth>Watch</Button>
            </a>
        </Link>

                                    </Card>
                                </Grid.Col>
                            </Grid>
                            <Grid p={0} m={0} my={12}>
                                <Grid.Col span={12}>
                                    <Text size="18px" fw={600} c="indigo">Isekai</Text>
                                    <Divider my={12}></Divider>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                                        <Card.Section>
                                            <Image
                                                src="https://www.gematsu.com/wp-content/uploads/2021/06/Rune-Factory-5_2021_06-13-21_001.jpg"
                                                height={350}
                                                alt="Norway"
                                            />
                                        </Card.Section>
                                        <Group justify="space-between" mt="-12px" mb="xs">
                                            <Badge defaultChecked color="gray" style={{ color: 'white', backgroundColor: '#2b4d6f' }}>&#9733; 7,5</Badge>
                                            <Badge defaultChecked color="gray" style={{ color: 'black', backgroundColor: 'white' }}>Ep 12</Badge>
                                        </Group>


                                        <Group justify="space-between">
                                            <Text fw={500}>Rune Factory 5</Text>
                                        </Group>

                                        <Text size="sm" c="dimmed" mt={12}>

                                        </Text>
                                        
                                        <Link href={`./${idAnime}`}>
            <a>
                <Button variant="outline" color="blue" radius="md" fullWidth>Watch</Button>
            </a>
        </Link>

                                    </Card>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                                        <Card.Section>
                                            <Image
                                                src="https://www.gematsu.com/wp-content/uploads/2021/06/Rune-Factory-5_2021_06-13-21_001.jpg"
                                                height={350}
                                                alt="Norway"
                                            />
                                        </Card.Section>
                                        <Group justify="space-between" mt="-12px" mb="xs">
                                            <Badge defaultChecked color="gray" style={{ color: 'white', backgroundColor: '#2b4d6f' }}>&#9733; 7,5</Badge>
                                            <Badge defaultChecked color="gray" style={{ color: 'black', backgroundColor: 'white' }}>Ep 12</Badge>
                                        </Group>


                                        <Group justify="space-between">
                                            <Text fw={500}>Rune Factory 5</Text>
                                        </Group>

                                        <Text size="sm" c="dimmed" mt={12}>

                                        </Text>
                                        
                                        <Link href={`./${idAnime}`}>
            <a>
                <Button variant="outline" color="blue" radius="md" fullWidth>Watch</Button>
            </a>
        </Link>

                                    </Card>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                                        <Card.Section>
                                            <Image
                                                src="https://www.gematsu.com/wp-content/uploads/2021/06/Rune-Factory-5_2021_06-13-21_001.jpg"
                                                height={350}
                                                alt="Norway"
                                            />
                                        </Card.Section>
                                        <Group justify="space-between" mt="-12px" mb="xs">
                                            <Badge defaultChecked color="gray" style={{ color: 'white', backgroundColor: '#2b4d6f' }}>&#9733; 7,5</Badge>
                                            <Badge defaultChecked color="gray" style={{ color: 'black', backgroundColor: 'white' }}>Ep 12</Badge>
                                        </Group>


                                        <Group justify="space-between">
                                            <Text fw={500}>Rune Factory 5</Text>
                                        </Group>

                                        <Text size="sm" c="dimmed" mt={12}>

                                        </Text>
                                        
                                        <Link href={`./${idAnime}`}>
            <a>
                <Button variant="outline" color="blue" radius="md" fullWidth>Watch</Button>
            </a>
        </Link>

                                    </Card>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                                        <Card.Section>
                                            <Image
                                                src="https://www.gematsu.com/wp-content/uploads/2021/06/Rune-Factory-5_2021_06-13-21_001.jpg"
                                                height={350}
                                                alt="Norway"

                                            />
                                        </Card.Section>
                                        <Group justify="space-between" mt="-12px" mb="xs">
                                            <Badge defaultChecked color="gray" style={{ color: 'white', backgroundColor: '#2b4d6f' }}>&#9733; 7.5</Badge>
                                            <Badge defaultChecked color="gray" style={{ color: 'black', backgroundColor: 'white' }}>Ep1 8</Badge>
                                        </Group>
                                        <Group justify="space-between">
                                            <Text fw={500}>Rune Factory 5</Text>
                                        </Group>
                                        <Text size="sm" c="dimmed" mt={12}>
                                            12 Epsiode
                                        </Text>
                                        
                                        <Link href={`./${idAnime}`}>
            <a>
                <Button variant="outline" color="blue" radius="md" fullWidth>Watch</Button>
            </a>
        </Link>
                                    </Card>
                                </Grid.Col>

                            </Grid>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Grid mt={80}>
                                <Paper shadow="xl" withBorder>
                                    <Divider p={12} label="Genre" labelPosition="left"></Divider>
                                    <Group p={12}>
                                        <a href="/isekai">
                                            <Chip defaultChecked color="indigo">Isekai</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="green">Fantasy</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="gray">Mecha</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="red">Harem</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="orange">Romance</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="blue">Action</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="black">Dark Fantasy</Chip>
                                        </a>
                                    </Group>
                                </Paper>
                            </Grid>
                            <Grid mt={30}>
                                <Paper shadow="xl" withBorder>
                                    <Divider p={12} label="Year" labelPosition="left"></Divider>
                                    <Group p={12}>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="red">2019</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="blue">2020</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="dark">2021</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="indigo">2022</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="green">2023</Chip>
                                        </a>
                                        <a href="https://example.com/">
                                            <Chip defaultChecked color="gray">2024</Chip>
                                        </a>
                                        <Button fullWidth>Confirm</Button>
                                    </Group>

                                </Paper>

                            </Grid>
                        </Grid.Col>
                    </Grid>

                </Container>
            </MantineProvider>
        </>
    )
}

export default Halaman