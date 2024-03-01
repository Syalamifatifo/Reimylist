import { useRouter } from 'next/router';
import React from 'react';
import Halaman from './Halaman.module';

const AnimeVideo = () => {
    const router = useRouter();
    const idAnime = router.query.id;

    return (
        <div>
            <h1>Anime Details</h1>
            <Halaman idAnime={idAnime} />
        </div>
    );
}

export default AnimeVideo;
