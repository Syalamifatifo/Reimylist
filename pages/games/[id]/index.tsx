import { useRouter } from 'next/router';

const Halaman = function({
    ...props
}){
    const router = useRouter();
    const idGames = router.query.id
    return (
        <h1>Games : {idGames}</h1>
    )
}

export default Halaman