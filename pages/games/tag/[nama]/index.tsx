import { useRouter } from 'next/router';

const Halaman = function({
    ...props
}){
    const router = useRouter();
    const tagGames = router.query.name
    return (
        <h1>Tags Games : {tagGames}</h1>
    )
}

export default Halaman