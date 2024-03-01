import { useRouter } from 'next/router';

const Halaman = function({
    ...props
}){
    const router = useRouter();
    const YearGames = router.query.year
    return (
        <h1>Year Games : {YearGames}</h1>
    )
}

export default Halaman