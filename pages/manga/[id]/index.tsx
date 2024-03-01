import { useRouter } from 'next/router';

const Halaman = function({
    ...props
}){
    const router = useRouter();
    const idManga = router.query.id
    return (
        <h1>Manga : {idManga}</h1>
    )
}

export default Halaman