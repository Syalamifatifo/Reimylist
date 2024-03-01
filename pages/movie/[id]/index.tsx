import { useRouter } from 'next/router';

const Halaman = function({
    ...props
}){
    const router = useRouter();
    const idMovie = router.query.id
    return (
        <h1>Movienya : {idMovie}</h1>
    )
}

export default Halaman